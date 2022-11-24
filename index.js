const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');
const profileInputName = document.querySelector('#input-name');
const profileInputJob = document.querySelector('#input-job');


let formElement = document.querySelector('.form'); 

let nameInput = formElement.querySelector('.profile__title'); 
let jobInput = formElement.querySelector('.profile__subtitle'); 

const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
  profileInputName.value = nameInput.textContent; //при открытии попапа текст берется из профиля?
  profileInputJob.value = jobInput.textContent;
}

// function getPopupVisibility() {
//   profileInputName.value = nameInput.textContent;
//   profileInputJob.value = jobInput.textContent;
//   popupElement.classList.add('popup_is-opened');
// }

// function getPopupInvisibility() {
//   popupElement.classList.remove('popup_is-opened');
// }


const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');

}
 popupOpenButtonElement.addEventListener('click', openPopup);
 popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.  
  jobInput.textContent = profileInputName.value;   
  nameInput.textContent = profileInputJob.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
