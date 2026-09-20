export function openEmail({ name, email, subject, message, to }) {
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
  const href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
}
