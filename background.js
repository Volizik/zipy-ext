'use strict';

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'Cookie') {
        if (!details.requestHeaders[i].value.includes('firewall=zipy')) {
          details.requestHeaders[i].value += "; firewall=zipy"
        }
        break;
      }
      console.log(details.requestHeaders)
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders", "extraHeaders"]
)