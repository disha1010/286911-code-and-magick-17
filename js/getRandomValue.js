'use strict';

(function () {
  window.getRandomValue = function (dataList) {
    var randValueIndex = Math.floor(Math.random() * dataList.length);
    return dataList[randValueIndex];
  };
})();
