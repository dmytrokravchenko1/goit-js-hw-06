// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onCheckInputLength);
input.addEventListener("focus", onInputFocus);

function onCheckInputLength() {
  input.value.length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
};

function onInputFocus() {
  input.classList.remove("valid", "invalid");
};