(function () {
  'use strict';

  var css = '.evidence-overlay > p { display: none;}', // Hide spoilers
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
})();
