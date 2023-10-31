// runs once on popup open
chrome.storage.sync.get('enabled', function (result) {
  if (result.enabled === true) {
    document.getElementById("status").className = "btn btn-success";
    document.getElementById("status").innerHTML = "Active";
  }
  else {
    document.getElementById("status").className = "btn btn-secondary";
    document.getElementById("status").innerHTML = "Inactive";
  }
});

// runs once on popup open
chrome.storage.sync.get('chatBGImageURL', function (result) {
  document.getElementById("chatBGImageURL").value = result.chatBGImageURL;  
});

//change handler for enabled state
const reverseState = () => {
  chrome.storage.sync.get('enabled', function (result) {
    console.log("Enabled: " + !result.enabled)
    chrome.storage.sync.set({ "enabled": !result.enabled }, function () { ; });
  });

  const element = document.getElementById("status");
  if (element.innerHTML === "Active") {
    element.innerHTML = "Inactive";
    element.className = "btn btn-secondary";
  }
  else {
    element.innerHTML = "Active";
    element.className = "btn btn-success";
  }
}

//change handler for chatBGImageURL
const editChatBGImageURL = () => {
  chrome.storage.sync.set({ "chatBGImageURL": document.getElementById("chatBGImageURL").value }, function () { ; });
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('status');
  btn.addEventListener('click', function () {
    reverseState();
  });
  
  var link = document.getElementById('chatBGImageURL');
  link.addEventListener('change', function () {
    editChatBGImageURL();
  });
});