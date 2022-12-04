const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card'); //находим наш темплейт, а затем уточняем через контент
const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true) //клонируем наши новые карточки
  const name = newCard.querySelector('.card__title'); //пусть забирает значения из тайтла
  name.textContent = dataCard.name;
  const link = newCard.querySelector('.card__img'); //пусть забирает значения из фоток
  link.src = dataCard.link;
  return newCard; //что нам отдают на выходе
}
  
const cardContainer = document.querySelector('.cards')
const renderCard = (dataCard) => {
  cardContainer.append(generateCard(dataCard));
};
initialCards.forEach(function (card) {
  renderCard(card)
})


//Кнопки
const popupElementProfile = document.querySelector('.popup-profile');
const popupCloseButtonElements = document.querySelectorAll('.popup__close');
const popupElementCard = document.querySelector('.popup-card');
const popupOpenButtonCard = document.querySelector('.profile__add');
const popupOpenButtonProfile = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const cardElement = document.querySelector('.card')
const likeButton = document.querySelectorAll('.like')

let formElement = document.querySelector('.form');
let profileName = formElement.querySelector('#input-name');
let profileJob = formElement.querySelector('#input-job');

//Открыть попап карточки
function openPopupCard()  {
  popupElementCard.classList.add('popup_opened');
  console.log('открыть попап карточки')
}
popupOpenButtonCard.addEventListener('click', openPopupCard);
//Закрыть попап карточки
function closePopupCard() {
  popupElementCard.classList.remove('popup_opened');
  console.log('закрыть попап карточки')
}
popupCloseButtonElements.forEach (function(btn) {
  btn.addEventListener('click', function() {
    closePopupCard();
    closePopupProfile();
  })
})

likeButton.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("like_active");
    });
});


//Открыть попап профиля
function openPopupProfile() {
  popupElementProfile.classList.add('popup_opened');
  profileName.value = nameInput.textContent;
  profileJob.value = jobInput.textContent;
}
//Закрыть попап профиля
function closePopupProfile() {
  popupElementProfile.classList.remove('popup_opened');
}



function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  nameInput.textContent = profileName.value;
  jobInput.textContent = profileJob.value;
  
  closePopupProfile();
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonProfile.addEventListener('click', openPopupProfile);

//кнопка удаления карточки
// const handelDeleteCard = (event) => {
// event.target.closest('.card')
// }

// const deleteBtn = newCard.querySelector('.trash') /
// deleteBtn.addEventListener('click', handelDeleteCard)
//Добавление новых карточек
const formAddCard = document.querySelector('.form_sent')
formAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const cardTitle = document.querySelector('#input-card-name').value;
  const cardImgUrl = document.querySelector('#input-card-url').value;
  const card = {
    name: cardTitle,
    link: cardImgUrl
  }

  renderCard(card)
  closePopupCard()
})