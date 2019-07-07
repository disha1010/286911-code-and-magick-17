'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBAL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var coatColorValue = document.querySelector('input[name="coat-color"]');
  var eyesColorValue = document.querySelector('input[name="eyes-color"]');
  var fireballColorValue = wizardFireball.querySelector('input[name="fireball-color"]');

  window.wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomValue(COAT_COLORS);
    coatColorValue.value = newColor;
    wizardCoat.style.fill = newColor;
    window.wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomValue(EYES_COLORS);
    eyesColorValue.value = newColor;
    wizardEyes.style.fill = newColor;
    window.wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = window.util.getRandomValue(FIREBAL_COLORS);
    fireballColorValue.value = newColor;
    wizardFireball.style.background = newColor;
  });

  return window.wizard;
})();
