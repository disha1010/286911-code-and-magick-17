'use strict';

var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
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

var userDialog = document.querySelector('.setup');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var wizardList = document.querySelector('.setup-similar-list');

var wizard = document.querySelector('.setup-wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var coatColorValue = document.querySelector('input[name="coat-color"]');
var eyesColorValue = document.querySelector('input[name="eyes-color"]');
var fireballColorValue = wizardFireball.querySelector('input[name="fireball-color"]');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userName = userDialog.querySelector('.setup-user-name');
var formSubmitButton = userDialog.querySelector('.setup-submit');
var setupWizardForm = userDialog.querySelector('.setup-wizard-form');

var getRandomValue = function (dataList) {
  var randValueIndex = Math.floor(Math.random() * dataList.length);
  return dataList[randValueIndex];
};

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
      name: getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES),
      coatColor: getRandomValue(COAT_COLORS),
      eyesColor: getRandomValue(EYES_COLORS),
    };
    newWizards.push(newWizard);
  }

  return newWizards;
};

// функция изменения цвета мантии (глаз, фаербола) волшебника
var colorizeWizard = function (colorizedElement, colorsList, elementColor, cssStyle) {
  colorizedElement.addEventListener('click', function () {
    var randomColor = getRandomValue(colorsList);
    elementColor.value = randomColor;
    if (!cssStyle) {
      colorizedElement.style.fill = randomColor;
    } else {
      colorizedElement.style.background = randomColor;
    }
  });
};

// функции для отработки событий открытия/закрытия попапа
var onPopupValidate = function () {
  userName.addEventListener('invalid', function (evt) {
    evt.preventDefault();
  });
};

var formSubmit = function () {
  setupWizardForm.addEventListener('submit', onPopupValidate);
};

var onPopupEscPress = function (evt) {
  var focused = document.activeElement;
  if (evt.keyCode === ESC_KEYCODE && userName !== focused) {
    closePopup();
  }
};

var openPopup = function () {
  var focused = document.activeElement;
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

  formSubmitButton.addEventListener('click', function () {
    formSubmit();
  });

  formSubmitButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE && formSubmitButton === focused) {
      formSubmit();
    }
  });
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// события открытия/закрытия попапа
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// отрисовка списка волшебников
var wizards = createWizardsList(WIZARDS_COUNT);
wizardList.appendChild(createWizardFragment(wizards));
document.querySelector('.setup-similar').classList.remove('hidden');

// раскраска волшебника
colorizeWizard(wizardCoat, COAT_COLORS, coatColorValue);
colorizeWizard(wizardEyes, EYES_COLORS, eyesColorValue);
colorizeWizard(wizardFireball, FIREBAL_COLORS, fireballColorValue, true);
