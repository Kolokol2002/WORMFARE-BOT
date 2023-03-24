const inputEl = document.querySelector('input#name-input')
const spanEl = document.querySelector('span#name-output')


inputEl.addEventListener('input', changeSpan)

function changeSpan(event) {
    if (event.currentTarget.value === '') {
        spanEl.textContent = 'Anonymous'
    } else {
        spanEl.textContent = event.currentTarget.value
    }
}