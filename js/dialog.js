'use strict';

(function () {
  var POPUP_ORIGIN_TOP = '80px';
  var POPUP_ORIGIN_LEFT = '50%';

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.commonVar.setup.querySelector('.setup-close');
  var formSubmitButton = window.commonVar.setup.querySelector('.setup-submit');
  var setupWizardForm = window.commonVar.setup.querySelector('.setup-wizard-form');

  // функции для отработки событий открытия/закрытия попапа
  var onPopupValidate = function () {
    window.commonVar.userName.addEventListener('invalid', function (evt) {
      evt.preventDefault();
    });
  };

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var formSubmit = function () {
    setupWizardForm.addEventListener('submit', onPopupValidate);
  };

  var openPopup = function () {
    window.commonVar.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    formSubmitButton.addEventListener('click', function () {
      formSubmit();
    });

    formSubmitButton.addEventListener('keydown', function (evt) {
      if (window.util.isEnterEvent(evt)) {
        formSubmit();
      }
    });
  };

  var resetToOriginCoords = function () {
    window.commonVar.setup.style.top = POPUP_ORIGIN_TOP;
    window.commonVar.setup.style.left = POPUP_ORIGIN_LEFT;
  };

  var closePopup = function () {
    window.commonVar.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    resetToOriginCoords();
  };

  // события открытия/закрытия попапа
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (window.util.isEnterEvent(evt)) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function (evt) {
    closePopup(evt);
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (window.util.isEnterEvent(evt)) {
      closePopup(evt);
    }
  });

  // перетаскивание
  var dialogHandler = window.commonVar.setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.commonVar.setup.style.top = (window.commonVar.setup.offsetTop - shift.y) + 'px';
      window.commonVar.setup.style.left = (window.commonVar.setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // перетаскивание инвентаря
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  var artifactsElement = document.querySelector('.setup-artifacts');

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
