

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
const forms = document.querySelectorAll('.form') //ищем формы
// const redInputs = forms.querySelector('.form__input')

function enableValidation(config) {
  const form = document.querySelector(config.formSelector)
  const inputs = document.querySelectorAll(config.inputSelector)
  const submitButton = form.querySelector(config.submitButtonSelector)
  // const errors = form.querySelectorAll(config.errorClass)
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
      })
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      console.log(input.id)
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
      //прячем кнопку
      const IsformValid = input.validity.valid
      if (IsformValid) {
        console.log('Валидно, можно сохранять')
        
        submitButton.disabled = false
        submitButton.classList.remove('button_inactive')
      } else {
        console.log('Не валидно, нельзя сохранять')
        
        submitButton.disabled = true
        submitButton.classList.add('button_inactive')
      }
      
    })
  })
}
enableValidation({
  formSelector: '.form_profile',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'error_border',
  errorClass: 'error_vissible'

})
// forms.forEach(form => { 
//   // const inputs = form.querySelectorAll('.form__input');
//   // const submitButton = form.querySelector('.form__save') 
 
  
// })


