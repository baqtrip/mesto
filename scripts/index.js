const errors = document.querySelectorAll('.error')
//поиск наних попапов
const popupElementWindow = document.querySelector('.popup-window'); 
const popupElementProfile = document.querySelector('.popup-profile'); 
const popupElementCard = document.querySelector('.popup-card'); 

//кнопки закрытия попапов
const popupCloseWindow = popupElementWindow.querySelector(".popup__close");
const popupCloseButtonProfile =  popupElementProfile.querySelector('.popup__close')
const popupCloseButtonCard = popupElementCard.querySelector('.popup__close')

//кнопки открытия попапов
const popupOpenButtonCard = document.querySelector('.profile__add');
const popupOpenButtonProfile = document.querySelector('.profile__edit');
const popupOpenButtonWindow = document.querySelectorAll('.card__img');
//Не кнопки
const popupElementCardNameInput = popupElementCard.querySelector('#input-card-name')
const popupElementCardLinkInput = popupElementCard.querySelector('#input-card-url')
const popupCardWindowImg = popupElementWindow.querySelector(".popup-contents__img")
const popupCardWindowTitle = popupElementWindow.querySelector(".popup-contents__title")
const profile = document.querySelector('.profile');
const nameInput = profile.querySelector('.profile__title');
const jobInput = profile.querySelector('.profile__subtitle');
const cardElement = document.querySelector('.card')
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card'); 
const formElementProfile = document.querySelector('.form_profile');
const profileName = formElementProfile.querySelector('#input-name');
const profileJob = formElementProfile.querySelector('#input-job');
const alt = popupElementCard.querySelector('#input-card-name').value;
// Функции открытия и закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  errors.forEach(error => {
    error.classList.remove('error_vissible')
  }) 
}

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ НОВЫХ КАРТОЧЕК И РАБОТА С НИМИ
function addCard(evt) { 
  evt.preventDefault(); //сброс дефолт поведение
  const name = popupElementCardNameInput.value;
  const link = popupElementCardLinkInput.value;

    renderCard({
      name, alt, link  //если свойство === названию переменной, то : не нужна
      
  })
  closePopup(popupElementCard);
  evt.target.reset() //очищаем форму
  return name 
}

function generateCard(dataCard) {
  const newCard = cardTemplate.cloneNode(true) //клонируем наши новые карточки
  const name = newCard.querySelector('.card__title'); //пусть забирает значения из тайтла
  name.textContent = dataCard.name;
  const cardImg = newCard.querySelector('.card__img');
  cardImg.alt = dataCard.name;
  const link = newCard.querySelector('.card__img'); //пусть забирает значения из фоток
  link.src = dataCard.link;
  const likeButton = newCard.querySelector('.like')
  const trash = newCard.querySelector('.trash')
  //Лайки
  likeButton.addEventListener('click', function(evt) {  
    evt.target.classList.toggle('like_active');
  });
  trash.addEventListener('click', function() { //Удаляем карточки
    newCard.remove();
    console.log('удалили карточку')
  });

    link.addEventListener("click", function (evt) {
    popupCardWindowImg.src = dataCard.link;
    popupCardWindowImg.alt = dataCard.name;
    popupCardWindowTitle.textContent = dataCard.name;
    openPopup(popupElementWindow);
    return name;
    
  });
  


      return newCard; //что нам отдают на выходе
}

//событие на закрытие попапа окна картинки
popupCloseWindow.addEventListener('click', () => {
  closePopup(popupElementWindow);
  });

const formAddCard = document.querySelector('.form_card')
formAddCard.addEventListener('submit', addCard)

const cardContainer = document.querySelector('.cards')
const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};
initialCards.forEach(function (card) {
  renderCard(card)
})

//ЗАКРЫТИЕ И ОТКРЫТИЕ ПОПАП ПРОФИЛЯ
popupOpenButtonProfile.addEventListener('click', () => {
  openPopup(popupElementProfile);

  profileName.value = nameInput.textContent;
  profileJob.value = jobInput.textContent;
});

popupCloseButtonProfile.addEventListener('click', () => {
  closePopup(popupElementProfile);
});

//ЗАКРЫТИЕ И ОТКРЫТИЕ ПОПАП КАРТОЧКИ
popupOpenButtonCard.addEventListener('click', () => {
  openPopup(popupElementCard);
})

popupCloseButtonCard.addEventListener('click', () => {
  closePopup(popupElementCard);
  popupElementCard.querySelector('form').reset()
})


//КАК МЫ МЕНЯЕМ ИМЯ И РАБОТУ ПРОФИЛЯ
function submitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameInput.textContent = profileName.value;
  jobInput.textContent = profileJob.value;
  closePopup(popupElementProfile);
  
}
formElementProfile.addEventListener('submit', submitHandler);


//Закрытие попапа по клику на оверлей
function closePopupByClickOnOverlay(event) {
  console.log(event.target, event.currentTarget)
  if (event.target === event.currentTarget) {
    closePopup(popupElementProfile)
    closePopup(popupElementCard)
    popupElementCard.querySelector('form').reset()
    closePopup(popupElementWindow)
  }
}
// popupElementProfile.addEventListener('click', closePopupByClickOnOverlay)
// popupElementCard.addEventListener('click', closePopupByClickOnOverlay)
// popupElementWindow.addEventListener('click', closePopupByClickOnOverlay)
[popupElementProfile, popupElementCard, popupElementWindow].forEach(el => el.addEventListener('click', closePopupByClickOnOverlay))

//Закрытие попапа при нажатии на ESC

function closePopupByPressOnEsc(event) {
  if (event.key === 'Escape') {
    console.log('Закрываем на esc')
    closePopup(popupElementProfile);
    closePopup(popupElementCard);
    popupElementCard.querySelector('form').reset()
    closePopup(popupElementWindow);
  }
 
}
window.addEventListener('keydown', closePopupByPressOnEsc)