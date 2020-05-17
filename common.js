async function copyLinkToClipboard() {
  try {
    await browser.tabs.executeScript({
      file: "clipboard-helper.js",
    });

    let code = 'formatLink();';
    const result = await browser.tabs.executeScript({code});
    const formattedText = result[0];

    await navigator.clipboard.writeText(formattedText);
    return formattedText;
  } catch (err) {
    // This could happen if the extension is not allowed to run code in
    // the page, for example if the tab is a privileged page.
    console.error('Failed to copy text: ' + err);
  }
}
