function setFooterYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
setFooterYear();

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

function getSavedTheme() {
  return localStorage.getItem('gavleguiden-theme-mode');
}

function saveTheme(mode) {
  localStorage.setItem('gavleguiden-theme-mode', mode);
}

function toggleTheme() {
  const isDark = body.classList.contains('dark');
  if (isDark) {
    setTheme('light');
    saveTheme('light');
  } else {
    setTheme('dark');
    saveTheme('dark');
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

const saved = getSavedTheme();
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme('dark');
} else {
  setTheme('light');
}