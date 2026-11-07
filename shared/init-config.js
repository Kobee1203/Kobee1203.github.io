// Fills a page from its `EXTENSION_CONFIG` (defined by the config.js of the page, loaded before this file)

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
