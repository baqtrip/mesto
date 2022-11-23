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




// Находим форму в DOM
let formElement = document.querySelector('.form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = form.querySelector('.profile__title'); // Воспользуйтесь инструментом .querySelector()
let jobInput = form.querySelector('.profile__subtitle'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    profile__title.textContent = nameInput.value // Получите значение полей jobInput и nameInput из свойства value

    profile__title.textContent = jobInput.value // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 





