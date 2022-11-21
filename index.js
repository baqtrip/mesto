// const popupElement = document.querySelector('.popup');
// const popupCloseButtonElement = document.querySelector('.popup_close');
// const popupOpenButtonElement = document.querySelector('.profile__edit');


// const togglePopupVisibilty = function () {
//   popupElement.classList.toggle('popup_is-opened');
// }

// togglePopupVisibilty();


// popupOpenButtonElement.addEventListener('click', togglePopupVisibilty);

// const closePopup = function() {
//   popupElement.classList.remove('popup_is-opened');
// }

// popupCloseButtonElement.addEventListener('click', closePopup);



const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');

const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);





