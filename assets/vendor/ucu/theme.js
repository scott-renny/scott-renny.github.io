/*
 * UCU Theme — persistence + toggle wiring.
 * Requires the anti-flash inline script to already have set
 * document.documentElement[data-theme] before this file runs.
 * See docs/THEMING.md.
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "ucu-theme";

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* storage unavailable (private browsing, etc.) — theme still applies for this load */
    }
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");
  }

  function current() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function syncToggles(theme) {
    var toggles = document.querySelectorAll("[data-ucu-theme-toggle]");
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      var label = toggles[i].querySelector("[data-ucu-theme-label]");
      if (label) {
        label.textContent = theme === "light" ? "Light mode" : "Dark mode";
      }
    }
  }

  function set(theme) {
    apply(theme);
    setStored(theme);
    syncToggles(theme);
  }

  function toggle() {
    set(current() === "light" ? "dark" : "light");
  }

  function init() {
    apply(current());
    syncToggles(current());

    var toggles = document.querySelectorAll("[data-ucu-theme-toggle]");
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener("click", toggle);
    }
  }

  global.UCU = global.UCU || {};
  global.UCU.theme = {
    init: init,
    toggle: toggle,
    set: set,
    current: current
  };
})(window);
