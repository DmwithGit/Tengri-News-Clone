// function hideNews() {
//     const menu = document.querySelector('.menu-opened');
//     menu.classList.add('hide');
// }

// function showNews() {
//     const menu = document.querySelector('.menu-opened');
//     menu.classList.remove('hide');
// }


// document.getElementById('open-btn').addEventListener('click', function() {
//     document.getElementById('my-hero').classList.add('open');
// })

// document.getElementById('close-btn').addEventListener('click', function() {
//     document.getElementById('my-hero').classList.add('open');
// })

// function toggleMenu() {
//     var menu = document.getElementById('menu');
//     var closeBtn = document.getElementById('close-btn');
//     menu.classList.toggle('open');
//     closeBtn.style.display = (menu.classList.contains('open')) ? 'block' : 'none';
// }

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

