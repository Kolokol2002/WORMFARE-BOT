const decrementEl = document.querySelector('[data-action="decrement"]')
const counterEl = document.querySelector('#value')
const incrementEl = document.querySelector('[data-action="increment"]')

let counterValue = 0
counterEl.textContent = counterValue

decrementEl.addEventListener('click', decrement)

incrementEl.addEventListener('click', increment)

function decrement() {
    counterValue -= 1
    counterEl.textContent = counterValue
}

function increment() {
    counterValue += 1
    counterEl.textContent = counterValue
}
