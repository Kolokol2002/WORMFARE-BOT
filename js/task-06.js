const validatorInputEl = document.querySelector('input#validation-input')

validatorInputEl.addEventListener('blur', blurTarget)


function blurTarget(event) {
    const currentTagretLength = Number(event.currentTarget.value.length)
    const validTagretLenght = Number(validatorInputEl.dataset.length)

    if (currentTagretLength === validTagretLenght) {
        validatorInputEl.classList.remove('invalid')
        validatorInputEl.classList.add('valid')
    } else {
        validatorInputEl.classList.remove('valid')
        validatorInputEl.classList.add('invalid')
    }
}