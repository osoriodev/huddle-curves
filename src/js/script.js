const field = document.getElementById('email');
const message = document.getElementById('error');
const btn = document.getElementById('submit');

const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;

const validateEmail = () => {
  let value = field.value;

  if (re.test(value)) {
    field.classList.remove('form__field--error');
    message.classList.remove('form__error--active');
    field.value = null;
  } else {
    field.classList.add('form__field--error');
    message.classList.add('form__error--active');
  }
}

btn.addEventListener('click', e => {
  e.preventDefault();
  validateEmail();
});
