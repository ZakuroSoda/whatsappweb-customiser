var chatBGImageURL;
var enabled;

const refreshStatus = async () => {
  chrome.storage.sync.get('enabled', function (result) {
    if (result.enabled === undefined) {
      chrome.storage.sync.set({ enabled: true }, function () { ; });
      enabled = true;
    } else {
      enabled = result.enabled;
    }
  });
  
  chrome.storage.sync.get('chatBGImageURL', function (result) {
    if (result.chatBGImageURL === undefined) {
      chrome.storage.sync.set({ 'chatBGImageURL': "https://i.imgur.com/02HMWHU.png" }, function () { ; });
      chatBGImageURL = "https://i.imgur.com/02HMWHU.png";
    } else {
      chatBGImageURL = result.chatBGImageURL;
    }
  });
}; refreshStatus();

const applyCustomStyling = () => {
  const targetElement = document.querySelector('[data-asset-chat-background-dark="true"]');
  if (targetElement) {
    targetElement.style.backgroundSize = "cover";
    targetElement.style.backgroundImage = `url(${chatBGImageURL})`;
    targetElement.style.backgroundPosition = "-120px 0"
    targetElement.style.opacity = "1";
  }
};

const removeCustomStyling = () => {
  const targetElement = document.querySelector('[data-asset-chat-background-dark="true"]');
  if (targetElement) {
    targetElement.style.backgroundSize = "";
    targetElement.style.backgroundImage = "";
    targetElement.style.backgroundPosition = "";
    targetElement.style.opacity = "0.06";
  }
};

const customPage = async () => {
  const observerConfig = { attributes: true, childList: true, subtree: true };
  const mutationCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        refreshStatus().then(() => {
          enabled === true ? applyCustomStyling() : removeCustomStyling();
        });
        
      }
    }
  };
  const observer = new MutationObserver(mutationCallback);
  observer.observe(document.body, observerConfig);
};

customPage();