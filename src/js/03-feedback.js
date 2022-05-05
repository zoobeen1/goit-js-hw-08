//vars
const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const localStorageKey = 'form-data';
const storage = localStorage.getItem(localStorageKey);
let formData = JSON.parse(storage) ?? {};

//functions
function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}
function onSubmit(e) {
  e.preventDefault();
  const formInputNames = Object.keys(e.currentTarget.elements).filter(item => isNaN(item));
  if (!formInputNames.every(item => e.currentTarget.elements[item].value)) {
    alert('Заполните все поля формы!!!');
    return;
  }
  //required on task
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  e.currentTarget.reset();
}

//on form load
Object.keys(formData).forEach(item => {
  form.elements[item].value = formData[item];
});

//add event listeners
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
