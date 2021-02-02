/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против"
  ]
};

const adv = document.querySelectorAll('.promo__adv img'),
  bg = document.querySelector('.promo__bg'),
  genre = bg.querySelector('.promo__genre'),
  old_film_list = document.querySelector('.promo__interactive-list'),
  film_list = document.querySelector('.promo__interactive-list');
bg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
genre.textContent = 'ДРАМА';
adv.forEach(function(item) {
  item.remove();
});

const submit_button = document.querySelector('button');
const input = document.querySelector('.adding__input');
const checkbox = document.querySelector('input[type=checkbox]');
const refactorButtons = function() {
  const deleteButtons = film_list.querySelectorAll('.delete');
  deleteButtons.forEach((button, i) => {
    button.addEventListener('click', function(event) {
      removeButton(i);
    });
  });
}
const refactorList = function() {

  old_film_list.innerHTML = "";
  movieDB.movies.sort();
  movieDB.movies.forEach((film, i) => {
    if (film.length > 21) {
      film = film.substr(0, 21) + "...";
    }
    film_list.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
  });
  refactorButtons();

}

refactorList();

const newFilm = function(value) {
  movieDB.movies.push(value);
  input.value = "";
  refactorList();
}
const removeButton = function(id) {
  movieDB.movies.splice(id, 1);
  console.log(movieDB.movies);
  refactorList();
}

submit_button.addEventListener('click', function(event) {
  event.preventDefault();
  if (checkbox.checked) {
    console.log("Добавляем любимый фильм");
  }
  newFilm(input.value)
});