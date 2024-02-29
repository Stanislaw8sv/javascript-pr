// Тут ваше решение
let input = document.querySelector('.color');
let button = document.querySelector('.btn');

button.addEventListener('click', function () {
  let color = input.value;
  document.body.style.backgroundColor = color;
});
