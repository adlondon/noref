function populateText(formattedText) {
  const textElem = document.getElementById('textToCopy');
  textElem.value = formattedText;
  textElem.focus();
  textElem.select();
}

async function init() {
  let formattedText = await copyLinkToClipboard();
  populateText(formattedText);
}
document.addEventListener('DOMContentLoaded', init);
