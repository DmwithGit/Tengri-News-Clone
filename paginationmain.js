document.addEventListener("DOMContentLoaded", function() {
    const newsData2 = [
        {
            'userId': 1,
            'id': 1,
            'title': 'News1',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
        {
            'userId': 2,
            'id': 2,
            'title': 'News2',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
        {
            'userId': 1,
            'id': 1,
            'title': 'News1',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
        {
            'userId': 2,
            'id': 2,
            'title': 'News2',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
        {
            'userId': 3,
            'id': 3,
            'title': 'News3',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
        {
            'userId': 4,
            'id': 4,
            'title': 'News4',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
        {
            'userId': 5,
            'id': 5,
            'title': 'News5',
            'image': '',
            'text': 'Loremc ndbIEBIFB IHDIBDJFDVBJ DIFH',
        },
    ];

    let currentPage = 1;
    let rows = 1; // Изменено на 1 для демонстрации пагинации

    function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('.posts');
        if (!postsEl) return; // Проверка на наличие элемента
        postsEl.innerHTML = '';
        page--;

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginationedData = arrData.slice(start, end);

        paginationedData.forEach((el) => {
            const postEl = document.createElement('div');
            postEl.classList.add('post');
            postEl.innerHTML = `
                <h2 class="post__title">${el.title}</h2>
                <p class="post__text">${el.text}</p>
                <img class="post__image" src="${el.image}" alt="${el.title}">
            `;
            postsEl.appendChild(postEl);
        });
    }

    function clearPagination() {
        const paginationEl = document.querySelector('.pagination');
        if (paginationEl) {
            paginationEl.innerHTML = '';
        }
    }

    function clearActivePaginationItem() {
        const activeItem = document.querySelector('.pagination__item--active');
        if (activeItem) {
            activeItem.classList.remove('pagination__item--active');
        }
    }

    function displayPaginationBtn(page) {
        const liEl = document.createElement('li');
        liEl.classList.add('pagination__item');
        liEl.textContent = page;

        liEl.addEventListener('click', () => {
            clearActivePaginationItem(); // Удаляем активный класс с предыдущего элемента
            currentPage = page;
            displayList(newsData2, rows, currentPage);

            liEl.classList.add('pagination__item--active');
        });

        return liEl;
    }

    function displayPagination(arrData, rowPerPage) {
        clearPagination(); // Очищаем старые элементы пагинации
        const paginationEl = document.querySelector('.pagination');
        if (!paginationEl) return; // Проверка на наличие элемента
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement('ul');
        ulEl.classList.add('pagination__list');

        for (let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1);
            console.log('Creating pagination button for page:', i + 1); // Отладочный вывод
            ulEl.appendChild(liEl);
        }
        paginationEl.appendChild(ulEl);
    }

    displayList(newsData2, rows, currentPage);
    displayPagination(newsData2, rows);
});