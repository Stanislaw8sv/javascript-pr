// Тут ваше решение
let h1 = document.querySelector('h1');
let button = document.querySelector('.btn');

button.addEventListener('click', function () {
    h1.textContent = 'Пока, мир';
});