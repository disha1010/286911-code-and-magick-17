'use strict';

var WIZARDS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var wizardList = document.querySelector('.setup-similar-list');

var randomValue = function (dataList) {
  var randValueIndex = Math.floor(Math.random() * dataList.length);
  return dataList[randValueIndex];
};

var createWizardElement = function (element) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = element.name;
  wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = element.eyesColor;
  return wizardElement;
};

var createWizardFragment = function (fragment) {
  var wizardFragment = document.createDocumentFragment();

  for (var i = 0; i < fragment.length; i++) {
    wizardFragment.appendChild(createWizardElement(fragment[i]));
  }

  return wizardFragment;
};

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var newWizard = {
    name: randomValue(WIZARD_NAMES) + ' ' + randomValue(WIZARD_SURNAMES),
    coatColor: randomValue(coatColors),
    eyesColor: randomValue(eyesColors),
  };
  wizards.push(newWizard);
}

wizardList.appendChild(createWizardFragment(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');
