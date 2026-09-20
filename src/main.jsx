import React from 'react'
import ReactDOM from 'react-dom/client'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  X,
  Sparkles,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Layers3,
} from 'lucide-react'
import { portfolioData as data } from './data/portfolioData'
import { openEmail } from './lib/mail'
import './styles.css'

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Education', 'education'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
]

function ExternalLink({ href, children, className = '', ...props }) {
  if (!href) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  )
}

function Reveal({ children, className = '', delay = 0, y = 28 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({ title, intro, action }) {
  return (
    <div className="section-header">
      <div className="section-title-block">
        <span className="section-accent" aria-hidden="true" />
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      {action}
    </div>
  )
}

function Navbar({ active, open, setOpen }) {
  return (
    <header className={`nav-wrap ${open ? 'nav-open' : ''}`}>
      <div className="nav-inner">
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, id], i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.03 }}
              >
                <span>0{i + 1}</span>{label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  const lastName = 'Kumar'.split('')
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-aurora hero-aurora-a" />
      <div className="hero-aurora hero-aurora-b" />
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.span
            className="hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            SOFTWARE / DIGITAL BUILDER
          </motion.span>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 34 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Ritesh <span className="hero-name-last" aria-label="Kumar">
              {lastName.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="name-letter"
                  initial={reduceMotion ? false : { opacity: 0, y: 26, rotateX: -70 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.42, delay: 0.38 + index * 0.09 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.div
            className="hero-line"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={reduceMotion ? undefined : { scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="hero-role"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.52 }}
          >
            {data.title}<br />
            <span>{data.specialties.join(' / ')}</span>
          </motion.p>
          <motion.p
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6 }}
          >
            Building practical software with a steady focus on problem-solving, clean interfaces, and continuous learning.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.67 }}
          >
            <ExternalLink className="button button-primary" href={data.resume}>
              <Download size={17} /> Download Resume
            </ExternalLink>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-frame">
            <div className="portrait-scan" />
            <div className="portrait-ring portrait-ring-one" />
            <div className="portrait-ring portrait-ring-two" />
            <img src={data.profileImage} alt="Portrait of Ritesh Kumar" />
            <div className="portrait-glow" />
          </div>
          <div className="portrait-foot">
            <span>OPEN TO OPPORTUNITIES</span>
            <span>WEB • JAVA • SOFTWARE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-shell content-section section-about">
      <div className="about-frame">
        <SectionHeader title="About Me" />
        <div className="about-layout">
          <Reveal className="about-statement">
            <p>{data.about}</p>
          </Reveal>
          <Reveal className="about-aside" delay={0.08}>
            <div className="aside-topline"><Sparkles size={15} /> CURRENT INTERESTS</div>
            <p>{data.interests}</p>
            <div className="aside-rule" />
            <div className="aside-meta">
              <span>Focus</span><strong>Web Development / Freelancing</strong>
              <span>Approach</span><strong>Learn → Build → Repeat</strong>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section-shell content-section section-education">
      <SectionHeader title="Education" intro="The academic path behind the work." />
      <div className="education-orbit">
        <div className="orbit-core"><GraduationCap size={24} /><span>ACADEMIC PATH</span></div>
        {data.education.map((item, index) => (
          <Reveal className={`education-card education-card-${index + 1}`} key={item.institution} delay={index * 0.05}>
            <span className="education-year">{item.years}</span>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-shell content-section section-skills">
      <SectionHeader title="Skills" intro="Core technologies and concepts — no artificial percentage bars." />
      <div className="skills-grid">
        {Object.entries(data.skills).map(([group, skills], index) => (
          <Reveal className={`skill-group skill-group-${index + 1}`} key={group} delay={index * 0.05}>
            <div className="skill-group-top">
              <h3>{group}</h3>
            </div>
            <div className="skill-tags">
              {skills.map((skill) => <span key={skill}><Code2 size={13} />{skill}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-shell content-section section-experience">
      <SectionHeader title="Experience" intro="A focused entry from hands-on Java training." />
      {data.experience.map((item) => (
        <Reveal className="experience-card" key={item.role}>
          <div className="experience-badge"><BriefcaseBusiness size={18} /></div>
          <div className="experience-top">
            <div>
              <span className="eyebrow">{item.duration}</span>
              <h3>{item.role}</h3>
              <p>{item.organization}</p>
            </div>
            <ExternalLink href={item.url} className="text-link">
              View Training Certificate <ArrowUpRight size={17} />
            </ExternalLink>
          </div>
          <div className="experience-body">{item.description}</div>
        </Reveal>
      ))}
    </section>
  )
}

function ProjectMockup({ project, index }) {
  const [videoFailed, setVideoFailed] = React.useState(false)
  return (
    <div className={`project-visual ${index === 1 ? 'project-visual-alt' : ''}`}>
      <div className="project-media-shell">
        {project.media && !videoFailed ? (
          <video
            src={project.media}
            poster={project.poster}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
            aria-label={project.mediaAlt}
          />
        ) : (
          <img src={project.poster} alt={project.mediaAlt} loading="lazy" />
        )}
        <div className="project-media-overlay" />
        <div className="project-media-label">CASE STUDY / {project.name}</div>
        <div className="project-media-icon"><ArrowUpRight size={20} /></div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-shell content-section section-projects">
      <SectionHeader title="PROJECTS" intro="Visual case studies built to show the work, not just list it." />
      <div className="project-stack">
        {data.projects.map((project, index) => (
          <Reveal className={`project-row project-row-${index + 1} ${index % 2 ? 'reverse' : ''}`} key={project.name}>
            <ProjectMockup project={project} index={index} />
            <div className="project-copy">
              <span className="eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies.length > 0 && (
                <div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              )}
              <div className="project-links">
                <ExternalLink href={project.github || data.github} className="text-link"><Github size={16} /> GitHub Profile</ExternalLink>
                {project.liveDemo && <ExternalLink href={project.liveDemo} className="text-link"><ArrowUpRight size={16} /> Live Demo</ExternalLink>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section-shell content-section section-certifications">
      <SectionHeader title="Certifications" intro="A clear record of completed learning experiences." />
      <div className="cert-grid">
        {data.certifications.map((cert, index) => (
          <Reveal className={`cert-card cert-card-${index + 1}`} key={cert.name} delay={index * 0.06}>
            <div className="cert-orbit"><Layers3 size={18} /></div>
            <div className="cert-meta">{cert.issued}</div>
            <h3>{cert.name}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <p className="cert-description">{cert.description}</p>
            <ExternalLink href={cert.url} className="cert-link">View Certificate <ArrowUpRight size={16} /></ExternalLink>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = React.useState('')
  const [sent, setSent] = React.useState(false)

  const submit = (e) => {
    e.preventDefault()
    setError('')
    setSent(false)
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (form.message.trim().length < 12) {
      setError('Please make the message a little more detailed.')
      return
    }
    openEmail({ ...form, to: data.email })
    setSent(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid-lines" />
      <div className="section-shell">
        <div className="contact-grid">
          <Reveal className="contact-copy">
            <span className="contact-kicker">LET'S CONNECT</span>
            <h2>Have an idea<br /><em>worth building?</em></h2>
            <p>Let’s make it real.</p>
            <div className="contact-links">
              <a href={`mailto:${data.email}`}><Mail size={18} />{data.email}</a>
              <a href={`tel:${data.phone.replace(/\s/g, '')}`}><Phone size={18} />{data.phone}</a>
              <ExternalLink href={data.gmail}><Mail size={18} />Open Gmail</ExternalLink>
              <ExternalLink href={data.github}><Github size={18} />GitHub</ExternalLink>
              <ExternalLink href={data.linkedin}><Linkedin size={18} />LinkedIn</ExternalLink>
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={0.08}>
            <div className="form-corner form-corner-a" />
            <div className="form-corner form-corner-b" />
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <label>NAME<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
                <label>EMAIL<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
              </div>
              <label>SUBJECT<input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required /></label>
              <label>MESSAGE<textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></label>
              {error && <p className="form-error">{error}</p>}
              {sent && <p className="form-success"><Check size={16} /> Your email app should now be open.</p>}
              <button className="button button-primary submit-button" type="submit"><Send size={17} /> Send via email</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <div>
          <div className="footer-brand">Ritesh Kumar</div>
          <p>{data.title}</p>
        </div>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} Ritesh Kumar</span>
          <div>
            <ExternalLink href={data.github}>GitHub</ExternalLink>
            <ExternalLink href={data.linkedin}>LinkedIn</ExternalLink>
            <a href={`mailto:${data.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [active, setActive] = React.useState('home')
  const [open, setOpen] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 })

  React.useEffect(() => {
    const observers = []
    navItems.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar active={active} open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
