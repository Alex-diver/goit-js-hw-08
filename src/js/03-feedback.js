import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const FORM_KEY = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const storedState = localStorage.getItem(FORM_KEY);
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageInput.value = message;
  }
});

const updateLocalStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(FORM_KEY, JSON.stringify(state));
}, 500);

form.addEventListener('input', updateLocalStorage);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!emailInput.value || !messageInput.value) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  localStorage.removeItem(FORM_KEY);
  form.reset();
});
