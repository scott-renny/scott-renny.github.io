/*
 * UCU App Shell — responsive sidebar open/close behavior.
 * Purely structural: toggles a class on [data-ucu-app] and wires
 * open/close triggers + overlay + Escape key. No app logic here.
 * See docs/RESPONSIVE.md.
 */
(function (global) {
  "use strict";

  function init() {
    var app = document.querySelector("[data-ucu-app]");
    if (!app) {
      return;
    }

    var openTriggers = document.querySelectorAll("[data-ucu-nav-open]");
    var closeTriggers = document.querySelectorAll("[data-ucu-nav-close]");

    function openNav() {
      app.classList.add("is-nav-open");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      app.classList.remove("is-nav-open");
      document.body.style.overflow = "";
    }

    for (var i = 0; i < openTriggers.length; i++) {
      openTriggers[i].addEventListener("click", openNav);
    }
    for (var j = 0; j < closeTriggers.length; j++) {
      closeTriggers[j].addEventListener("click", closeNav);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeNav();
      }
    });

    var desktopQuery = window.matchMedia("(min-width: 1025px)");
    var handleDesktopChange = function (e) {
      if (e.matches) {
        closeNav();
      }
    };
    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", handleDesktopChange);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(handleDesktopChange);
    }
  }

  global.UCU = global.UCU || {};
  global.UCU.shell = { init: init };
})(window);
