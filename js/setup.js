'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
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
    wizardElement.querySelector('.wizard-coat').style.fill = elementData.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = elementData.eyesColor;
    return wizardElement;
  };

  var createWizardFragment = function (dataList) {
    var wizardFragment = document.createDocumentFragment();

    for (var i = 0; i < dataList.length; i++) {
      wizardFragment.appendChild(createWizardElement(dataList[i]));
    }

    return wizardFragment;
  };

  var createWizardsList = function (elementsCount) {
    var newWizards = [];
    for (var i = 0; i < elementsCount; i++) {
      var newWizard = {
        name: window.util.getRandomValue(WIZARD_NAMES) + ' ' + window.util.getRandomValue(WIZARD_SURNAMES),
        coatColor: window.util.getRandomValue(COAT_COLORS),
        eyesColor: window.util.getRandomValue(EYES_COLORS),
      };
      newWizards.push(newWizard);
    }

    return newWizards;
  };

  // отрисовка списка волшебников
  var wizards = createWizardsList(WIZARDS_COUNT);
  wizardList.appendChild(createWizardFragment(wizards));

  // раскраска волшебника
  window.colorize(wizardCoat, COAT_COLORS, coatColorValue);
  window.colorize(wizardEyes, EYES_COLORS, eyesColorValue);
  window.colorize(wizardFireball, FIREBAL_COLORS, fireballColorValue, true);
})();
