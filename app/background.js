// Default blocked sites
const DEFAULT_BLOCKED_SITES = [
  "*://*.twitter.com/*",
  "*://*.x.com/*",
  "*://x.com/*",
  "*://*.reddit.com/*",
  "*://*.youtube.com/*",
  "*://*.pinterest.com/*"
];

// Default redirect URL (a focus page)
const REDIRECT_URL = chrome.runtime.getURL("focus.html");

// Initialize storage with default values if not set
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['blockedSites', 'isActive'], (result) => {
    if (!result.blockedSites) {
      chrome.storage.local.set({ blockedSites: DEFAULT_BLOCKED_SITES });
    }
    if (result.isActive === undefined) {
      chrome.storage.local.set({ isActive: true });
    }
  });
});

// Listen for web navigation and block if necessary
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return; // Only block main frame

  chrome.storage.local.get(['blockedSites', 'isActive'], (result) => {
    if (!result.isActive) return;

    const url = new URL(details.url);
    const blockedSites = result.blockedSites || [];
    
    // Simple domain check for x.com
    if (url.hostname === 'x.com' || url.hostname.endsWith('.x.com')) {
      chrome.tabs.update(details.tabId, { url: REDIRECT_URL });
      return;
    }
    
    // Check if the URL matches any blocked pattern
    const isBlocked = blockedSites.some(pattern => {
      // Convert wildcard pattern to regex
      const regexPattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*');
      
      const regex = new RegExp(`^${regexPattern}$`);
      const matches = regex.test(details.url);
      
      // For debugging
      console.log(`Testing URL: ${details.url}`);
      console.log(`Against pattern: ${pattern} (regex: ${regexPattern})`);
      console.log(`Match result: ${matches}`);
      
      return matches;
    });

    if (isBlocked) {
      // Redirect to focus page
      chrome.tabs.update(details.tabId, { url: REDIRECT_URL });
    }
  });
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getStatus") {
    chrome.storage.local.get(['blockedSites', 'isActive'], (result) => {
      sendResponse({
        blockedSites: result.blockedSites || DEFAULT_BLOCKED_SITES,
        isActive: result.isActive !== false
      });
    });
    return true; // Required for async sendResponse
  }
  
  if (message.action === "toggleActive") {
    chrome.storage.local.set({ isActive: message.isActive }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (message.action === "updateBlockedSites") {
    chrome.storage.local.set({ blockedSites: message.blockedSites }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
}); 