var chatBGImageURL = "https://i.imgur.com/02HMWHU.png";

var state = "inactive";

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
        applyCustomStyling();
      }
    }
  };

  const observer = new MutationObserver(mutationCallback);
  observer.observe(document.body, observerConfig);
  applyCustomStyling();
};

customPage();