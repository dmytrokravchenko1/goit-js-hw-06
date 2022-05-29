// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color
// і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const body = document.querySelector("body");
const span = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  body.style.background = color;
  span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}