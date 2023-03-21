const test = document.querySelectorAll('.item')

console.log(`Number of categories: ${test.length}`)

test.forEach(item => console.log(`
Category: ${item.querySelector('h2').textContent}\n
Elements: ${item.querySelectorAll('li').length}
`))