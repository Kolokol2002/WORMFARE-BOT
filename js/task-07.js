const rangeEl = document.querySelector('#font-size-control')
const spanTextEl = document.querySelector('span#text')

rangeEl.addEventListener('input', onChangeFontTagret)


function onChangeFontTagret(event) {
    const value = event.currentTarget.value
    spanTextEl.style.fontSize = `${value}px`
}