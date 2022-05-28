const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const showName = event => {
  output.textContent = input.value === '' ? 'Anonymous' : event.currentTarget.value;
};

input.addEventListener('input', showName);
