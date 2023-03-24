const inputCountBoxesEl = document.querySelector('#controls input')
const buttonCreateEl = document.querySelector('[data-create]')
const buttonDestroyEl = document.querySelector('[data-destroy]')
const outputBoxesEl = document.querySelector('#boxes')


buttonCreateEl.addEventListener('click', onCreateBoxesTarget)
buttonDestroyEl.addEventListener('click', onDestruyBoxesTarget)


function onCreateBoxesTarget() {
  const countBox = Number(inputCountBoxesEl.value)

  let counter = 30

  for (let i = 0; i !== countBox; i++) {
    const createBox = `<div style="width: ${counter}px; height: ${counter}px; background-color: ${getRandomHexColor()};"></div>`
    outputBoxesEl.insertAdjacentHTML('beforeend', createBox)
    counter+=10
  }
  
}

function onDestruyBoxesTarget() {
  outputBoxesEl.innerHTML = ''
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
