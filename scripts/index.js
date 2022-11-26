const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.form');
let profileName = formElement.querySelector('#input-name'); 
let profileJob = formElement.querySelector('#input-job'); 


function openPopup() {
  popupElement.classList.add('popup_opened');
  profileName.value = nameInput.textContent;
  profileJob.value = jobInput.textContent;
}


function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.  

  nameInput.textContent = profileName.value;   
  jobInput.textContent = profileJob.value;
  
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);  
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);