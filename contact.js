const validYear = /^20((1[1-9])|([2-9][0-9]))$/i;
const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const form = document.querySelector('form');
const inputArr = document.querySelectorAll('input');

const formData = {};
const handleBlur = (e) => {
  formData[e.target.name] = e.target.value;

  const isEmailInput = e.target.type === 'email' && e.target.value !== '';
  const isYearInput = e.target.name === 'year' && e.target.value !== '';
  if (isYearInput && !e.target.value.match(validYear)) {
    formData.year = 'error';
  }
  if (isEmailInput && !e.target.value.match(validEmail)) {
    formData.email = 'error';
  }

  validate();
};

const handleChange = (e) => {
  const inputWrapper = e.target.closest('.input-wrapper');
  inputWrapper.classList.remove('show');
};

inputArr.forEach((input) => input.addEventListener('input', handleChange));

inputArr.forEach((input) => input.addEventListener('blur', handleBlur));

const validate = () => {
  const emailContainer = document.querySelector('.email-container');
  const yearContainer = document.querySelector('.year-container');

  if (formData.email === 'error') {
    emailContainer.classList.add('show');
  }

  if (formData.year === 'error') {
    yearContainer.classList.add('show');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
});
