const throttle = require('lodash.throttle');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

//on form load
if (localStorage.getItem('form-data')) {
  formData = JSON.parse(localStorage.getItem('form-data'));
  email.value = formData.email;
  message.value = formData.message;
}

//add event listeners
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
function onInput(e) {
  if (e.target.name == 'email') {
    formData.email = e.target.value;
  } else formData.message = e.target.value;
  localStorage.setItem('form-data', JSON.stringify(formData));
}
function onSubmit(e) {
  e.preventDefault();
  if (!(email.value && message.value)) {
    alert('Заполните все поля формы!!!');
    return;
  }

  console.log('email: ', email.value);
  console.log('message: ', message.value);
  localStorage.removeItem('form-data');
  email.value = '';
  message.value = '';
}
