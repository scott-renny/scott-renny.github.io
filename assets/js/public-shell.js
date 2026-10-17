document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.darkstar-header');
  if (!header) return;
  var button = header.querySelector('.darkstar-menu');
  var nav = header.querySelector('.darkstar-navigation');
  var mobile = window.matchMedia('(max-width: 760px)');
  function close(returnFocus) {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    if (returnFocus) button.focus();
  }
  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  header.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') close(true);
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { close(false); });
  });
  mobile.addEventListener('change', function () { close(nav.contains(document.activeElement)); });
  var theme = header.querySelector('[data-darkstar-theme]');
  function syncTheme() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    theme.textContent = dark ? 'Light mode' : 'Dark mode';
    theme.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  theme.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('ucu-theme', next); } catch (error) { /* Theme still applies. */ }
    syncTheme();
  });
  syncTheme();
});
