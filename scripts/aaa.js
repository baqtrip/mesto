// // Кнопки
// const profile = document.querySelector('.profile');
// const editButton = profile.querySelector('.profile__edit');
// const addButton = profile.querySelector('.profile__add');

// const popupEdit = document.querySelector('.popup-profile');
// const popupAdd = document.querySelector('.popup-card');
// const popupImage = document.querySelector('.popup-image');
// const popupEditClose = popupEdit.querySelector('.popup__close');
// const popupAddClose = popupAdd.querySelector('.popup__close');
// const popupImageClose = popupImage.querySelector('.popup__close');

// // Формы

// const formProfile = popupEdit.querySelector('.form');
// const userNameInput = formProfile.querySelector('#input-name');
// const userJobInput = formProfile.querySelector('#input-job');

// const formCard = popupAdd.querySelector('.form');
// const placeNameInput = formCard.querySelector('#place-name');
// const placeImgInput = formCard.querySelector('#place-img');

// // Профиль

// const profileTitle = profile.querySelector('.profile__title');
// const profileSubtitle = profile.querySelector('.profile__subtitle');

// // Карточки

// const cardsList = document.querySelector('.cards');
// const cardTemplate = document.querySelector('.card-template');  //в конце убрали .content

// // Открытая картинка


// const imageElement = popupImage.querySelector('.popup-contents__img');
// const imageCaption = popupImage.querySelector('.popup-contents__title');


// // Открытие и закрытие модальных окон

// function openPopup(popup) {
//     popup.classList.add('popup_transition');
//   popup.classList.add('popup_opened');
//   console.log('open popup')
// }

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
// }


// // Открытие и закрытие модального окна с картинкой

// function handlePreviewImage(popupImageData) {
//     openPopup(popupImage);

//     imageElement.src = popupImageData.link;
//     imageElement.alt = popupImageData.name;
//     imageCaption.textContent = popupImageData.name;
// }

// // popupImageClose.addEventListener('click', () => {
// //     closePopup(popupImage);
// // });


// // Функции создания и добавления карточек

// function createCard(cardData) {
//     const cardElement = cardTemplate.cloneNode(true);
//     const elementImage = cardElement.querySelector('.card__img');
//     const elementTitle = cardElement.querySelector('.card__title');
//     const likeButton = cardElement.querySelector('.like');
//     const trashButton = cardElement.querySelector('.trash');

//     elementImage.src = cardData.link;
//     elementImage.alt = cardData.name;
//     elementTitle.textContent = cardData.name;

//     likeButton.addEventListener('click', evt => {
//         evt.target.classList.toggle('like_active');
//     });

//     trashButton.addEventListener('click', evt => {
//         evt.target.closest('.card').remove();
//     });

//     elementImage.addEventListener('click', evt => {
//         const targetImage = evt.target;

//         const cardData = {
//             name: targetImage.alt,
//             link: targetImage.src
//         };

//         handlePreviewImage(cardData);
//     });

//     return cardElement;
// }

// function addCard(cardData, cardContainer, newCard) {
//     const card = createCard(cardData);

//     if (newCard) {
//         cardContainer.prepend(card);
//     } else {
//         cardContainer.append(card);
//     }
// }


// // Карточки из коробки

// initialCards.forEach(item => {
//     addCard(item, cardsList, false);
// });


// // Модальное окно редактирования профиля

// editButton.addEventListener('click', () => {
//     openPopup(popupEdit);

//     userNameInput.value = profileTitle.textContent;
//     userJobInput.value = profileSubtitle.textContent;
// });

// popupEditClose.addEventListener('click', () => {
//     closePopup(popupEdit);
// });

// // Отправка формы редактирования профиля

// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();

//     profileTitle.textContent = userNameInput.value;
//     profileSubtitle.textContent = userJobInput.value;

//     closePopup(popupEdit);
// }

// formProfile.addEventListener('submit', handleProfileFormSubmit);


// // Модальное окно добавления карточки

// addButton.addEventListener('click', () => {
//     openPopup(popupAdd);
// });

// popupAddClose.addEventListener('click', () => {
//     closePopup(popupAdd);
// });

// // Отправка формы добавления карточки

// function handleCardFormSubmit(evt) {
//     evt.preventDefault();

//     addCard({
//         name: placeNameInput.value,
//         link: placeImgInput.value
//     }, cardsList, true);

//     closePopup(popupAdd);

//     formCard.reset();
// }

// formCard.addEventListener('submit', handleCardFormSubmit);

// alert('sdad')
// // console.log();
// // debugger;