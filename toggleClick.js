function toggleClick(buttons) {
    const button = document.querySelectorAll('.toppings__btn');
    button.forEach(function(btn) {
        btn.classList.remove('active');
    });     // удаляем цвет класс с цветом кнопки

    buttons.classList.add('active');
}

  