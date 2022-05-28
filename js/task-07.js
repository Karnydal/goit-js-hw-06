let fontBar = document.getElementById('font-size-control');

let text = document.getElementById('text');

fontBar.oninput = function () {
  text.style.fontSize = fontBar.value + 'px';
};
