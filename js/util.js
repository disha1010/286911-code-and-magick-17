'use strict';

window.util = (function () {
  var ESC_KEY = 'Esc';
  var ENTER_KEY = 'Enter';

  var setup = document.querySelector('.setup');
  var userName = setup.querySelector('.setup-user-name');

  return {
    isEscEvent: function (evt, action) {
      var focused = document.activeElement;
      if (evt.key === ESC_KEY && userName !== focused) {
        action();
      }
    },
    isEnterEvent: function (evt) {
      return evt.key === ENTER_KEY;
    }
  };
})();
