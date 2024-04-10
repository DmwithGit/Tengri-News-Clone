# Tengri-News-Clone
Tengri News Clone file for nFactorial incubator
# Tengri-News-Clone Project

Представленный проект является новостным сайтом

В этом файле я критериально опишу, что удалось реализовать в этом проекте

---



## Release: 


* ``Соблюдалась семантической структуры сайта``
* ``Пагинация статей``
* ``Фильтрация статей по дате публикации``
* ``Slider``

---


## Подходы к работе:


* ``Waterfall model``
  +  Анализ требований
  +  Проектирование дизайна
  +  Разработка 
  +  Тестирование


## Ошибки и недочеты:


* Проблема со скриптом в файле [hideBar](hideBar.js)

```
document.querySelector('.show_menu').addEventListener('click', function() {
    document.getElementById('menu').classList.add('open');
    document.querySelector('.hide_menu').style.display = 'block';
    document.querySelector('.show_menu').style.display = 'none';
});

document.querySelector('.hide_menu').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('open');
    document.querySelector('.show_menu').style.display = 'block';
    document.querySelector('.hide_menu').style.display = 'none';
});
```

Не смог найти ошибку в этом скрипте, вероятно проблема, либо с ``классом open`` в файле [hero](hero.css), который работает, когда ``menu display: block``, если обращаться к open через id open, в этом случае меню и другие элементы пропадают, не успел пофиксить эту проблему, ``буду рад, если вы дадите совет``


## Еще один недочет:

Не успел реализовать открытие статьи для просмотра ее детальной информации


## Итоги:

* За время работы над проектом я получил колоссальное удовольствие,
зачастую при исправной работе кода.

* Получил опыт работы с дедлайном и ощутил атмосферу работы ночью

* Узнал много нового, чего еще не изучал

* Получил практический опыт написания новостных сайтов

## Author: Григорьев Дмитрий











