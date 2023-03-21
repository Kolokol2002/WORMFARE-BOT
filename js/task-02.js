const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.className = 'item';
  ingredientEl.textContent = ingredient;
  listEl.appendChild(ingredientEl);
});
