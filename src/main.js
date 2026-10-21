const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

// Assemble the contact address at runtime so it never appears in the source.
const mail = document.querySelector('[data-mail]');
if (mail) {
  const address = ['levi', 'evalscience.org'].join('@');
  mail.href = `mailto:${address}`;
  mail.textContent = address;
}
