document.addEventListener('DOMContentLoaded', function () {
  UCU.shell.init();
  var app = document.querySelector('[data-ucu-app]');
  var sidebar = document.querySelector('.ucu-sidebar');
  var opener = document.querySelector('[data-ucu-nav-open]');
  var mobile = window.matchMedia('(max-width: 1024px)');
  function syncNavigation() {
    var opened = app.classList.contains('is-nav-open');
    opener.setAttribute('aria-expanded', String(opened));
    sidebar.inert = mobile.matches && !opened;
  }
  new MutationObserver(syncNavigation).observe(app, {attributes:true, attributeFilter:['class']});
  mobile.addEventListener('change', syncNavigation);
  syncNavigation();
  opener.addEventListener('click', function () {
    syncNavigation();
    sidebar.querySelector('[data-ucu-nav-close]').focus();
  });
  document.querySelectorAll('[data-ucu-nav-close]').forEach(function (button) {
    button.addEventListener('click', function () { opener.focus(); });
  });
  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      app.classList.remove('is-nav-open');
      document.body.style.overflow = '';
    });
  });
  document.addEventListener('keydown', function (event) {
    if (!mobile.matches) return;
    if (event.key === 'Escape' && sidebar.contains(document.activeElement)) opener.focus();
    if (event.key !== 'Tab' || !app.classList.contains('is-nav-open')) return;
    var items = Array.from(sidebar.querySelectorAll('a,button'));
    var first = items[0], last = items[items.length-1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
});
