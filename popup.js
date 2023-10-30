async function checkCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  if (tab["url"] == "https://web.whatsapp.com/" ||
  tab["url"] == "http://web.whatsapp.com/") {
    return true;
  }
  else {
    return false;
  }
}

async function init() {
  whatsapp = await checkCurrentTab();
  if (whatsapp) {
    state = "active";
    document.getElementById("status").className = "btn btn-success";
    document.getElementById("status").innerHTML = "Active";
  }
  else {
    state = "inactive";
    document.getElementById("status").className = "btn btn-secondary";
    document.getElementById("status").innerHTML = "Inactive";
  }
}

init();