const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.form');
// let popupSave = formElement.querySelector('.popup__save');
let profileName = formElement.querySelector('#input-name'); 
let profileJob = formElement.querySelector('#input-job'); 

const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
  profileName.value = nameInput.textContent; 
  profileJob.value = jobInput.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
  // popupSave.classList.remove('popup_is-opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.  
  nameInput.textContent = profileName.value;   
  jobInput.textContent = profileJob.value;

}

formElement.addEventListener('submit', formSubmitHandler); 
formElement.addEventListener('submit', closePopup); 
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);