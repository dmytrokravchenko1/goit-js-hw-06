// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

function createLi(item) {
  const newLi = document.createElement('li');
  newLi.textContent = item;
  newLi.classList.add("item");
  return newLi;
}
const ingredientsList = ingredients.map((item) => createLi(item));
  
list.append(...ingredientsList);
