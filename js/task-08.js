const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmitTarget)


function onFormSubmitTarget(event) {
    event.preventDefault()
    const linkForm = event.currentTarget.elements
    
    if (linkForm.email.value === '' || linkForm.password.value === '') {
        alert('Заповніть всі поля!!!')
    } else {    
        const formData = new FormData(event.currentTarget)
        const result = {}
        formData.forEach((value, key) => result[key] = value)
        console.log("result", result)
        
    }

}
