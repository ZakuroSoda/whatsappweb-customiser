chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.enabled === true) {
    document.getElementById("status").className = "btn btn-success";
    document.getElementById("status").innerHTML = "Active";
  }
  else {
    document.getElementById("status").className = "btn btn-secondary";
    document.getElementById("status").innerHTML = "Inactive";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('status');
  btn.addEventListener('click', function () {
    reverseState();
  });
});

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

// debug func
// chrome.storage.sync.get('enabled', function (result) {
//   console.log(result.enabled);
// });