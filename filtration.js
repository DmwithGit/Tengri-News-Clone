document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('news-list');
    const pagination = document.getElementById('pagination2');
    const itemsPerPage = 5;
    let currentPage = 1;
    let filter = null;


    const newsData = [
        { id: 1, title: "News 1", date: "2024-04-06", image: "path_to_image_1.jpg",  text: 'Поселок близ Астаны под угрозой затопления' },
        { id: 2, title: "News 2", date: "2024-04-05", image: "path_to_image_1.jpg", text: 'Новые праздничные даты появятся в Казахстане' },
        { id: 3, title: "News 3", date: "2024-04-03", image: "path_to_image_1.jpg", text: 'Папа Римский выразилсочувствие Казахстану' },
        { id: 4, title: "News 4", date: "2024-04-01", image: "path_to_image_1.jpg", text: 'Паводок в Костонайской области идет на спад' },
        { id: 5, title: "News 5", date: "2024-04-30", image: "path_to_image_1.jpg", text: 'Густой черный дым встревожил жителей Каскелена' },
        { id: 6, title: "News 6", date: "2024-03-29", image: "path_to_image_1.jpg", text: 'Токаев обратился к блогерам из Москвы' },
        { id: 7, title: "News 7", date: "2024-03-25", image: "path_to_image_1.jpg", text: 'Терроризм в Крокус сити' },
        { id: 8, title: "News 8", date: "2024-03-20", image: "path_to_image_1.jpg", text: 'Российский депутат обратился к Казахстану' },
        { id: 9, title: "News 9", date: "2024-03-15", image: "path_to_image_1.jpg", text: 'В Казахстане создадут свою версию ChatGPT' },
        { id: 10, title: "News 10", date: "2024-03-10", image: "path_to_image_1.jpg", text: 'Казахстанцев  предупредили о звонках из КНБ' },
        { id: 11, title: "News 11", date: "2024-03-05", image: "path_to_image_1.jpg", text: 'Олжас Бектенов: Государство никого не оставит без крыши над головой'},
        { id: 12, title: "News 12", date: "2024-03-01", image: "path_to_image_1.jpg", text: 'Курс доллара в Казахстане продолжает падать' }
      ];

    // function fetchData(page) {
    //     fetch('news.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             let filteredData = data;
    //             if (filter === 'recent') {
    //                 filteredData = filterByRecent(data);
    //             } else if (filter === '5days') {
    //                 filteredData = filterByDaysAgo(data, 5);
    //             } else {
    //                 filteredData = filterByMonthsAgo(data, 1);
    //             }
    //             displayData(filteredData, page);
    //             displayPagination(filteredData.length);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }

    function fetchData(page) {
        let filteredData = newsData;
        if (filter === 'recent') {
          filteredData = filterByRecent(newsData);
        } else if (filter === '5days') {
          filteredData = filterByDaysAgo(newsData, 5);
        } else if (filter === 'month') {
          filteredData = filterByMonthsAgo(newsData, 1);
        }
        displayData(filteredData, page);
        displayPagination(filteredData.length);
    }

    function filterByRecent(data) {
        return data.slice(-itemsPerPage);
    }

    function filterByDaysAgo(data, days) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        return data.filter(item => new Date(item.date) >= cutoffDate);
    }

    function filterByMonthsAgo(data, months) {
        const cutoffDate = new Date();
        cutoffDate.setMonth(cutoffDate.getMonth() - months);
        return data.filter(item => new Date(item.date) >= cutoffDate);
    }

    function displayData(data, page) {
        newsList.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;   // вычисляет начальный индекс
        const endIndex = startIndex + itemsPerPage;     // вычисляет конечный индекс
        const itemsToShow = data.slice(startIndex, endIndex);
        // Используя индексы начального и конечного элементов, 
        // мы определяем какие новостные статьи попадают на текущую страницу, 
        // а затем используем метод slice() для извлечения только этих элементов из массива данных

        itemsToShow.forEach(item => {
            const article = document.createElement('article');
            article.classList.add('news-card');
            article.id = `news-${item.id}`;

            const image = document.createElement('img');
            image.classList.add('news-card__image');
            image.src = item.image;
            image.alt = item.title;

            const content = document.createElement('div');
            content.classList.add('news-card__content');

            const title = document.createElement('h2');
            title.classList.add('news-card__title');
            title.textContent = item.title;

            const date = document.createElement('p');
            date.classList.add('news-card__date');
            date.textContent = item.date;

            const text = document.createElement('p');
            text.classList.add('news-card__text');
            text.textContent = item.text;

            content.appendChild(title);
            content.appendChild(date);
            content.appendChild(text);

            article.appendChild(image);
            article.appendChild(content);

            newsList.appendChild(article);
        });
    }

    function displayPagination(totalItems) {
        pagination.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.classList.add('pagination-btn');
            if (i === currentPage) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', function() {
                currentPage = i;
                fetchData(currentPage);
                updatePaginationButtons();
            });
            pagination.appendChild(btn);
        }
    }

    function updatePaginationButtons() {
        const buttons = document.querySelectorAll('.pagination-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.textContent) === currentPage) {
                btn.classList.add('active');
            }
        });
    }

    document.getElementById('recent-btn').addEventListener('click', function() {
        filter = 'recent';
        fetchData(currentPage);
    });

    document.getElementById('5days-btn').addEventListener('click', function() {
        filter = '5days';
        fetchData(currentPage);
    });

    document.getElementById('month-btn').addEventListener('click', function() {
        filter = 'month';
        fetchData(currentPage);
    });

    fetchData(currentPage);
});