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

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var wizardList = window.commonVar.setup.querySelector('.setup-similar-list');

  var wizard = document.querySelector('.setup-wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var coatColorValue = document.querySelector('input[name="coat-color"]');
  var eyesColorValue = document.querySelector('input[name="eyes-color"]');
  var fireballColorValue = wizardFireball.querySelector('input[name="fireball-color"]');

  var createWizardElement = function (elementData) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = elementData.name;
    wizardElement.querySelector('.wizard-coat').style.fill = elementData.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = elementData.colorEyes;
    return wizardElement;
  };

  var createWizardFragment = function (dataList) {
    var wizardFragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      wizardFragment.appendChild(createWizardElement(dataList[i]));
    }

    return wizardFragment;
  };

  var onLoad = function (wizards) {
    wizardList.appendChild(createWizardFragment(wizards));
    window.commonVar.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // отрисовка списка волшебников
  window.backend.load(onLoad, onError);

  // раскраска волшебника
  window.colorize(wizardCoat, COAT_COLORS, coatColorValue);
  window.colorize(wizardEyes, EYES_COLORS, eyesColorValue);
  window.colorize(wizardFireball, FIREBAL_COLORS, fireballColorValue, true);
})();
