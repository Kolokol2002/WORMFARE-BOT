const changeColorBtnEl = document.querySelector('.change-color')
const outputColotEl = document.querySelector('.color')
const bodyEl = document.body


changeColorBtnEl.addEventListener('click', onChangeBodyColor)


function onChangeBodyColor() {
  const color = getRandomHexColor()
  outputColotEl.textContent = color
  bodyEl.style.backgroundColor = color
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
