'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  window.commonVar = {};
  window.commonVar.setup = document.querySelector('.setup');
  window.commonVar.userName = window.commonVar.setup.querySelector('.setup-user-name');


  window.util = {
    isEscEvent: function (evt, action) {
      var focused = document.activeElement;
      if (evt.key === ESC_KEY && window.commonVar.userName !== focused) {
        action();
      }
    },
    isEnterEvent: function (evt) {
      return evt.key === ENTER_KEY;
    },
    getRandomValue: function (dataList) {
      var randValueIndex = Math.floor(Math.random() * dataList.length);
      return dataList[randValueIndex];
    }
  };
})();
