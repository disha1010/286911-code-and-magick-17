'use strict';

(function () {
  window.colorize = function (colorizedElement, colorsList, elementColor, cssStyle) {
    colorizedElement.addEventListener('click', function () {
      var randomColor = window.util.getRandomValue(colorsList);
      elementColor.value = randomColor;
      if (!cssStyle) {
        colorizedElement.style.fill = randomColor;
      } else {
        colorizedElement.style.background = randomColor;
      }
    });
  };
})();
