const itemEl = document.querySelectorAll('.item')

itemEl.forEach(item => console.log(`
Category: ${item.querySelector('h2').textContent}\n
Elements: ${item.querySelectorAll('li').length}
`))