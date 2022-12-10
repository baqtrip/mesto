// Получение поп-ап-окна с фото

const popupCardWindow = document.querySelector(".popup-window");

// Кнопка закрытия поп-ап окна с фото

const popupCloseWindow = popupCardWindow.querySelector(".popup__close");

// Вешаем обработчик события на закрытие поп-ап окна с фото

popupCloseWindow.addEventListener("click", function () {
  popupCardWindow.classList.add("popup_opened");
  popupCardWindow.classList.remove("popup_opened");
});

// Функция открытия и закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


//Кнопки
const popupElementProfile = document.querySelector('.popup-profile');  

const popupElementCard = document.querySelector('.popup-card');
const popupOpenButtonCard = document.querySelector('.profile__add');
const popupOpenButtonProfile = document.querySelector('.profile__edit');

const popupCloseButtonCard = popupElementCard.querySelector('.popup__close')
const popupCloseButtonProfile =  popupElementProfile.querySelector('.popup__close')

//Не кнопки
const profile = document.querySelector('.profile');
const nameInput = profile.querySelector('.profile__title');
const jobInput = profile.querySelector('.profile__subtitle');
const cardElement = document.querySelector('.card')
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card'); 
//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ НОВЫХ КАРТОЧЕК И РАБОТА С НИМИ
function addCard(evt) { 
  evt.preventDefault(); //сброс дефолт поведение
  const name = popupElementCard.querySelector('#input-card-name').value;
  const alt = popupElementCard.querySelector('#input-card-name').value;
  const link = popupElementCard.querySelector('#input-card-url').value;
    renderCard({
      name, alt, link  //если свойство === названию переменной, то : не нужна
  })
  closePopup(popupElementCard);
}

function generateCard(dataCard) {
  const newCard = cardTemplate.cloneNode(true) //клонируем наши новые карточки
  const name = newCard.querySelector('.card__title'); //пусть забирает значения из тайтла
  name.textContent = dataCard.name;
  const alt = newCard.querySelector('.card__img');
  alt.link = dataCard.name;
  const link = newCard.querySelector('.card__img'); //пусть забирает значения из фоток
  link.src = dataCard.link;
  const likeButton = newCard.querySelector('.like')
  const trash = newCard.querySelector('.trash')
  
  likeButton.addEventListener('click', function(evt) {  //ЛАЙКИ
    evt.target.classList.toggle('like_active');
    console.log('поставили лайк')
  });
  trash.addEventListener('click', function() { //Удаляем карточки
    newCard.remove();
    console.log('удалили карточку')
  });

  link.addEventListener("click", function (evt) {
    popupCardWindow.classList.add("popup_opened");
    popupCardWindow.querySelector(".popup-contents__img").src = dataCard.link;
    popupCardWindow.querySelector(".popup-contents__img").alt = dataCard.name;
    popupCardWindow.querySelector(".popup-contents__title").textContent = dataCard.name;
  });

      return newCard; //что нам отдают на выходе
}
const formAddCard = document.querySelector('.form_sent')
formAddCard.addEventListener('submit', addCard)
  
const cardContainer = document.querySelector('.cards')
const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};
initialCards.forEach(function (card) {
  renderCard(card)
})

const formElement = document.querySelector('.form');
const profileName = formElement.querySelector('#input-name');
const profileJob = formElement.querySelector('#input-job');



//ЗАКРЫТИЕ И ОТКРЫТИЕ ПОПАП ПРОФИЛЯ
popupOpenButtonProfile.addEventListener('click', () => {
  openPopup(popupElementProfile);

  profileName.value = nameInput.textContent;
  profileJob.value = jobInput.textContent;
});

popupCloseButtonProfile.addEventListener('click', () => {
  closePopup(popupElementProfile);
});


//КАК МЫ МЕНЯЕМ ИМЯ И РАБОТУ ПРОФИЛЯ
function SubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameInput.textContent = profileName.value;
  jobInput.textContent = profileJob.value;
  closePopup(popupElementProfile);
}

//ЗАКРЫТИЕ И ОТКРЫТИЕ ПОПАП КАРТОЧКИ
popupOpenButtonCard.addEventListener('click', () => {
  openPopup(popupElementCard);
})

popupCloseButtonCard.addEventListener('click', () => {
  closePopup(popupElementCard);
})


//
formElement.addEventListener('submit', SubmitHandler);
popupOpenButtonProfile.addEventListener('click', openPopupProfile);


