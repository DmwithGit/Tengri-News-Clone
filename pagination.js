// // async function getData() {
// //     const response = await fetch()
// //     const data = await response.json()
// //     return data
// // }

// newsDate = [
//     {
//         'userId': 1,
//         'id': 1,
//         'title': News1,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 2,
//         'id': 2,
//         'title': News2,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 3,
//         'id': 3,
//         'title': News3,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 4,
//         'id': 4,
//         'title': News1,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 1,
//         'id': 1,
//         'title': News1,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 1,
//         'id': 1,
//         'title': News1,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 1,
//         'id': 1,
//         'title': News1,
//         'image': '',
//         'text': '',
//     },
//     {
//         'userId': 1,
//         'id': 1,
//         'title': News1,
//         'image': '',
//         'text': '',
//     },
// ]

// async function main() {
//     const postsData = await getData();
//     let currentPage = 1;
//     let rows = 10

//     function displayList(arrData, rowPerPage, page) {            // arrData- массив данных, rowPerPage - кол-во страниц, page - текущая страница
//         const postsEl = document.querySelector('.posts');
//         postsEl.innerHTML = '';
//         page--;

//         const start = rowPerPage * page;
//         const end = start + rowPerPage;
//         const paginationedData = arrData.slice(start, end);


//         paginationedData.forEach((el) => {
//             const postEl = document.createElement('div');
//             postEl.classList.add('post');
//             postEl.innerText = `${el.title}`;       // из json file
//             postsEl.appendChild(postEl);
//         })


//     }
//     function displayPagination(arrData, rowPerPage) {
//         const paginationEl = document.querySelector('.pagination');
//         const pagesCount = Math.ceil(arrData.length / rowPerPage);       // для отображения кнопок на странице
//         const ulEl = document.createElement('ul');
//         ulEl.classList.add('pagination__list');

//         for (let i = 0; i < pagesCount; i++) {
//             const liEl = displayPaginationBtn(i + 1);       // увелич. страницы + 1
//             ulEl.appendChild(liEl);
//         }
//         paginationEl.appendChild(ulEl);
//     }// кнопки 
//     function displayPaginationBtn(page) {
//         const liEl = document.createElement('li');
//         liEl.classList.add('pagination__item');
//         liEl.innerText = page;

//         if (currentPage == page) liEl.classList.add('pagination__item--active')

//         liEl.addEventListener('click', () => {
//             currentPage = page
//             displayList(postsData, rows, currentPage)

//             let currentItemLi = document.querySelector('li.pagination')
//             currentItemLi.classList.remove('pagination__item--active') // удаляем клик кнопки

//             liEl.classList.add('pagination__item--active');
//         })
//         return liEl;
//     }

//     displayList(postsData, rows, currentPage);
//     displayPagination(postsData, rows)
// }

// main();