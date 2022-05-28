function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  buttonChangeColor: document.querySelector('.change-color'),
  spanSlashColor: document.querySelector('.color'),
};

refs.buttonChangeColor.addEventListener('click', eventButtonChangeColor);

function eventButtonChangeColor(event) {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.spanSlashColor.textContent = randomColor;
}
