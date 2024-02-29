// Тут ваше решение
let form = document.querySelector("form");
let namex = document.getElementById("name");
let email = document.getElementById("email");

form.addEventListener("submit", function () {
  if (namex.value == "" || email.value == "") {
    alert("Ошибка валидации");
  } else {
    form.submit();
  }
});