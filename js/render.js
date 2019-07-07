'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var similar = window.commonVar.setup.querySelector('.setup-similar');
  var similarList = window.commonVar.setup.querySelector('.setup-similar-list');

  var renderWizard = function (elementData) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = elementData.name;
    wizardElement.querySelector('.wizard-coat').style.fill = elementData.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = elementData.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    var wizardFragment = document.createDocumentFragment();
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      wizardFragment.appendChild(renderWizard(data[i]));
    }

    similarList.appendChild(wizardFragment);
    similar.classList.remove('hidden');
  };
})();
