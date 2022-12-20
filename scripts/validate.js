enableValidation({
  formSelector: '.form_card', 
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'error_border',
  errorClass: 'error_vissible'
})
enableValidation({
  formSelector: '.form_profile', 
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'error_border',
  errorClass: 'error_vissible'
})


function enableValidation(config) {
  const form = document.querySelector(config.formSelector)
  const inputs = form.querySelectorAll(config.inputSelector)
  const submitButton = form.querySelector(config.submitButtonSelector)
    submitButton.disabled = true

  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    submitButton.disabled = true
    submitButton.classList.add('button_inactive');
  })

  function isInValid(inputList) {
    return inputList.some(input => 
     !input.validity.valid)
  }

  function toggleButtonState(inputList, buttonElement) {
        if (isInValid(inputList)) {
       // сделай кнопку неактивной
      buttonElement.disabled = true
        buttonElement.classList.add('button_inactive');
     } else {
       // иначе сделай кнопку активной
      buttonElement.disabled = false;
        buttonElement.classList.remove('button_inactive');
     }
   }

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const error = form.querySelector(`.${input.id}-error`)
      console.log(input.validity)
      //проверим валидность импута
      if (input.validity.valid) {
        error.textContent = ''
        //убираем ошибку 
        input.classList.remove(config.inputErrorClass)
        error.classList.remove(config.errorClass)

      } else {
        //ставим ошибку 
        error.classList.add(config.errorClass)
        input.classList.add(config.inputErrorClass)
        error.textContent = input.validationMessage

      }
      console.log(Array.from(inputs))
      toggleButtonState(Array.from(inputs), submitButton);      
    })
  })
}