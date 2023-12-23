document.addEventListener("DOMContentLoaded", () => {
  // null here defaults to active tab of current window
  chrome.tabs.executeScript(null, {
    code: `
      window.location.href;
    `
  }, response => {
    const pageData = response[0];

    if (!pageData) {
      console.log("Could not get data from page.");
      return;
    }

    document.getElementById("link").href = "http://archive.is/newest/" + pageData;
  });
});
