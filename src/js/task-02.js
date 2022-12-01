const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const listRef = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  const newElem = document.createElement('li');
  newElem.textContent = ingredient;
  newElem.classList.add('item');
  listRef.appendChild(newElem);
}

console.log(listRef);

