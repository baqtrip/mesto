const editButton = profile.querySelector('.profile__edit');

function openPopup(popup) {
  popup.classList.add('popup_animated');
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}