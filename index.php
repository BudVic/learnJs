<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie DB</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext" rel="stylesheet">
    <link rel="stylesheet" href="css/style.min.css">
</head>
<body>
    <header class="header">
        <div class="header__search">
            <form action="#">
                <input type="text" placeholder="Поиск">
            </form>
        </div>
        <div class="header__logo">
            <img src="icons/Logotype.svg" alt="logo">
        </div>
    </header>
    <main class="promo">
        <div class="promo__menu">
            <nav class="promo__menu-list">
                <ul>
                    <li><a class="promo__menu-item promo__menu-item_active" href="#">Фильмы</a></li>
                    <li><a class="promo__menu-item" href="#">Сериалы</a></li>
                    <li><a class="promo__menu-item" href="#">Мультфильмы</a></li>
                    <li><a class="promo__menu-item" href="#">Клипы</a></li>
                    <li><a class="promo__menu-item" href="#">Трейлеры</a></li>
                </ul>
            </nav>
        </div>
        <div class="promo__content">
            <div class="promo__bg">
                <div class="promo__genre">КОМЕДИЯ</div>
                <div class="promo__title">МАРСИАНИН</div>
                <div class="promo__descr">ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ</div>
                <div class="promo__ratings">
                    <span>IMDb: 8.0</span>
                    <span>Кинопоиск: 7.7</span>
                </div>
            </div>
            <div class="promo__interactive">
                <div>
                    <div class="promo__interactive-title">ПРОСМОТРЕННЫЕ ФИЛЬМЫ</div>
                    <ul class="promo__interactive-list">
                        <li class="promo__interactive-item">ЛОГАН
                            <div class="delete"></div>
                        </li>
                        <li class="promo__interactive-item">ЛИГА СПРАВЕДЛИВОСТИ
                            <div class="delete"></div>
                        </li>
                        <li class="promo__interactive-item">ЛА-ЛА ЛЭНД
                            <div class="delete"></div>
                        </li>
                        <li class="promo__interactive-item">ОДЕРЖИМОСТЬ
                            <div class="delete"></div>
                        </li>
                        <li class="promo__interactive-item">СКОТТ ПИЛИГРИМ ПРОТИВ...
                            <div class="delete"></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <form class="add">
                        <div class="promo__interactive-title">ДОБАВИТЬ НОВЫЙ ФИЛЬМ</div>
                        <span>Введите название фильма</span>
                        <input class="adding__input" type="text" placeholder="Что уже посмотрено...?">
                        <span>Сделать его любимым?</span>
                        <input type="checkbox">
                        <span class="yes">Да!</span>
                        <button>Подтвердить</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="promo__adv">
            <div class="promo__adv-title">Реклама от спонсоров</div>
            <img src="img/content_1.jpg" alt="some picture">
            <img src="img/content_2.jpg" alt="some picture">
            <img src="img/content_3.png" alt="some picture">
        </div>
    </main>

    <script src="js/script.js"></script>
</body>
</html>