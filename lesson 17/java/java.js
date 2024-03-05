// console.log(document.querySelector('div'));
// document.querySelector('div').innerText = 'NewText'
// document.querySelector('div').addEventListener('click',
// function () {
//     document.querySelector('div').innerText = 'NewText'
//     })

// const document1 = {
//     write: function (text) {
//         'выводи текст на страницу'
//     },
//     querySelector: function (selector) {
//         'найти селектор'
//     }
// }

// console.log(document1);

// let elem = document.querySelector('.last')

// elem.innerText = 'Hello, everybody'
// console.log(elem);


// const arrElem = document.querySelectorAll('a')

// for (let i = 0; i < arrElem.length; i++) {
//     arrElem[3].innerText = 'Ссылка'
    
// }
// console.log(arrElem[3]);

// const elem = document.querySelector('.last')
// elem.innerText = 'Erster Unterricht'
// console.log(elem);


// let color = prompt('schreiben Sie Color')
// const elemP = document.querySelector('.first')
// elemP.style.backqroundColor = color

const img = document.querySelector('img')

console.log(img.getAttribute('alt'));
img.setAttribute('src', 'https://th.bing.com/th/id/OIP.6dNWD8Z5pnw7x48SnkS26wHaEK?rs=1&pid=ImgDetMain')
img.setAttribute('width', '200px' )