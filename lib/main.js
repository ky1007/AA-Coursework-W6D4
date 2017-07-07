const DOMNodeCollection = require('./dom_node_collection');

const $l = (arg, ...functions) => {
  let selector;
  if (arg instanceof HTMLElement) {
    selector = Array.from(arg);
  } else {
    selector = document.querySelectorAll(arg);
  }

  const fnQueue = [];
  if (functions) {
    fnQueue += functions;
  }

  function checkStatus() {
    sleep 1;
  }

  if (document.readyState === "complete") {
    fnQueue.forEach((el) => {
      el();
    })
  }

  return new DOMNodeCollection(selector);
};

window.$l = $l;
