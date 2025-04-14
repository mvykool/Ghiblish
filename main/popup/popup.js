document.addEventListener("DOMContentLoaded", () => {
  const blockingToggle = document.getElementById("blocking-toggle");
  const container = document.querySelector(".toggle-container");
  const siteList = document.getElementById("site-list");
  const newSiteInput = document.getElementById("new-site");
  const addButton = document.getElementById("add-btn");

  let blockedSites = [];

  // Load current status from storage
  loadStatus();

  // Event listeners
  blockingToggle.addEventListener("change", toggleBlocking);
  addButton.addEventListener("click", addSite);
  newSiteInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addSite();
  });

  // Functions
  function loadStatus() {
    chrome.runtime.sendMessage({ action: "getStatus" }, (response) => {
      if (response) {
        blockedSites = response.blockedSites || [];
        blockingToggle.checked = response.isActive;
        renderSiteList();
      }
    });
  }

  function toggleBlocking() {
    const isActive = blockingToggle.checked;
    if (isActive) {
      container.style.display = "none";
    }
    chrome.runtime.sendMessage({
      action: "toggleActive",
      isActive: isActive,
    });
  }

  function renderSiteList() {
    siteList.innerHTML = "";

    if (blockedSites.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.textContent = "No sites are currently blocked.";
      emptyMessage.style.padding = "10px 0";
      emptyMessage.style.fontStyle = "italic";
      emptyMessage.style.color = "#7f8c8d";
      siteList.appendChild(emptyMessage);
      return;
    }

    blockedSites.forEach((site, index) => {
      const siteItem = document.createElement("div");
      siteItem.className = "site-item";

      const siteText = document.createElement("span");
      siteText.textContent = site;

      const removeButton = document.createElement("button");
      removeButton.className = "remove-btn";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => removeSite(index));

      siteItem.appendChild(siteText);
      siteItem.appendChild(removeButton);
      siteList.appendChild(siteItem);
    });
  }

  function addSite() {
    const newSite = newSiteInput.value.trim();

    if (!newSite) {
      alert("Please enter a valid site pattern.");
      return;
    }

    // Validate pattern format
    if (!newSite.includes("*://") && !newSite.includes("://")) {
      // Add proper format if user just entered a domain
      const formattedSite = `*://*.${newSite.replace(/^www\./, "")}/*`;
      blockedSites.push(formattedSite);
    } else {
      blockedSites.push(newSite);
    }

    updateBlockedSites();
    newSiteInput.value = "";
  }

  function removeSite(index) {
    blockedSites.splice(index, 1);
    updateBlockedSites();
  }

  function updateBlockedSites() {
    chrome.runtime.sendMessage(
      {
        action: "updateBlockedSites",
        blockedSites: blockedSites,
      },
      () => {
        renderSiteList();
      },
    );
  }
});
