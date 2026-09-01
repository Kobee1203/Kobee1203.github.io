const EXTENSION_CONFIG = {
  version: "1.9.0",
  size: "600 KB",
  license: "GPL-3.0",
  year: new Date().getFullYear(),
  links: {
    chrome: "https://chromewebstore.google.com/detail/source-code-viewer/ninadapabgjafeobaoomggobomaogcdi",
    firefox: "https://addons.mozilla.org/fr/firefox/addon/source-code-viewer/",
    github: "https://github.com/Kobee1203/source-viewer-web-extension",
    issues: "https://github.com/Kobee1203/source-viewer-web-extension/issues"
  }
};

/**
 * Uniformly populates the page using data attributes.
 * - data-cfg-text="key" -> updates textContent
 * - data-cfg-link="key" -> updates href attribute
 */
function initConfig() {
  // Populate Text Content
  document.querySelectorAll("[data-cfg-text]").forEach(el => {
    const key = el.getAttribute("data-cfg-text");
    if (EXTENSION_CONFIG[key] !== undefined) {
      el.textContent = EXTENSION_CONFIG[key];
    }
  });

  // Populate Links (href)
  document.querySelectorAll("[data-cfg-link]").forEach(el => {
    const key = el.getAttribute("data-cfg-link");
    if (EXTENSION_CONFIG.links[key]) {
      el.href = EXTENSION_CONFIG.links[key];
    }
  });
}

// Run as soon as possible
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initConfig);
} else {
  initConfig();
}
