// Получение поп-ап-окна с фото

// const popupCardWindow = document.querySelector(".popup-card__window");
const popupCardWindow = document.querySelector(".popup-contents-vissible");

// Кнопка закрытия поп-ап окна с фото

const popupClose = popupCardWindow.querySelector("button");

// Вешаем обработчик события на закрытие поп-ап окна с фото

popupClose.addEventListener("click", function () {
  popupCardWindow.classList.toggle("popup-contents-hidden");

});


//Кнопки
const popupElementProfile = document.querySelector('.popup-profile');  
// const popupCloseButtonElements = document.querySelectorAll('.popup__close');
const popupElementCard = document.querySelector('.popup-card');
const popupOpenButtonCard = document.querySelector('.profile__add');
const popupOpenButtonProfile = document.querySelector('.profile__edit');


const popupCloseButtonCard = popupElementCard.querySelector('.popup__close')
const popupCloseButtonProfile =  popupElementProfile.querySelector('.popup__close')

//Не кнопки
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const cardElement = document.querySelector('.card')
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card'); 
//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ НОВЫХ КАРТОЧЕК И РАБОТА С НИМИ
function addCard(evt) { 
  evt.preventDefault(); //сброс дефолт поведение
  const name = document.querySelector('#input-card-name').value;
  const link = document.querySelector('#input-card-url').value;
    renderCard({
      name, link  //если свойство === названию переменной, то : не нужна
  })
  closePopupCard()
}

function generateCard(dataCard) {
  const newCard = cardTemplate.cloneNode(true) //клонируем наши новые карточки
  const name = newCard.querySelector('.card__title'); //пусть забирает значения из тайтла
  name.textContent = dataCard.name;
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
    popupCardWindow.classList.remove("popup-contents-hidden");
    popupCardWindow.querySelector("img").src = dataCard.link;
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

//Открыть попап карточки
function openPopupCard() {

  popupElementCard.classList.add('popup_opened');
}
popupOpenButtonCard.addEventListener('click', openPopupCard);
//Закрыть попап карточки
function closePopupCard() {
  popupElementCard.classList.remove('popup_opened');

  console.log('closePopupCard')
}
popupCloseButtonCard.addEventListener('click', closePopupCard);

// popupCloseButtonElements.forEach (function(btn) {
//   btn.addEventListener('click', function() {
//     closePopupCard();
//     closePopupProfile();
//   })
// })

//Открыть попап профиля
function openPopupProfile() {
  popupElementProfile.classList.add('popup_opened');

  profileName.value = nameInput.textContent;
  profileJob.value = jobInput.textContent;
}
//Закрыть попап профиля
function closePopupProfile() {
  popupElementProfile.classList.remove('popup_opened');

  console.log('closePopupProfile')
}
popupCloseButtonProfile.addEventListener('click', closePopupProfile);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameInput.textContent = profileName.value;
  jobInput.textContent = profileJob.value;
    closePopupProfile();
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonProfile.addEventListener('click', openPopupProfile);




