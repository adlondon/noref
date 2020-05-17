// This function must be called in a visible page, such as a browserAction popup
// or a content script. Calling it in a background page has no effect!

function formatLink() {
  function getFirstLinkInSelection(selection) {
    return selection.anchorNode.parentNode.href;
  }

  function formatURL(format, url) {
    return url.replace(format,"");
  }

  let href;
  let selection = window.getSelection();
  if (selection.rangeCount > 0) {
    let hrefInSelection = getFirstLinkInSelection(selection);
    if (hrefInSelection) {
      href = hrefInSelection;
    }
  }
  if (!href) {
    href = window.location.href;
  }

  const URL_FORMATTERS = {
    default: /\?.*$/g,
    amazon: /ref=.*$/g,
    ebay: /\?.*$/g
  };

  const urlOrigin = Object.keys(URL_FORMATTERS).filter(function(e) { return window.location.origin.includes(e);})[0];
  const format = URL_FORMATTERS[urlOrigin] || URL_FORMATTERS.default;
  return formatURL(format, href);
}
