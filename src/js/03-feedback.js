const throttle = require('lodash.throttle');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
//on form load
if (localStorage.getItem('email')) email.value = localStorage.getItem('email');
if (localStorage.getItem('message')) message.value = localStorage.getItem('message');

//add event listeners
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
function onInput(e) {
  localStorage.setItem(e.target.name, e.target.value);
}
function onSubmit(e) {
  e.preventDefault();
  if (!(email.value && message.value)) {
    alert('Заполните все поля формы!!!');
    return;
  }
  console.log('email: ', localStorage.getItem('email'));
  console.log('message: ', localStorage.getItem('message'));
  localStorage.removeItem('email');
  localStorage.removeItem('message');
  email.value = '';
  message.value = '';
}
