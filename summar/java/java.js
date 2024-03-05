// let p1 = document.querySelector('p')
// console.log(p1.innerText);
// console.log(p1.innerHTML);

// p1.innerHTML = "<span class ='red'>Text</span>"

// let paragraphs = document.querySelectorAll('p')
// console.log(paragraphs);
// console.log(paragraphs[2].innerText);

// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i].innerText);
    
// }

// let elem = document.querySelectorAll('p')
// for (let i = 0; i < elem.length; i++) {
//     elem[i].innerText =  prompt('Enter the Text')
// }

// for (let i = 0; i < elem.length; i++) {
//     if (i<3) {
//         elem[i].innerText =  prompt('Enter the Text')
//     }
// }
    
// let link = document.querySelector('a')
// link.innerText = 'Google';
// link.setAttribute('href', 'https://www.google.de')
// link.setAttribute('target', '_blank');

// let img1 = document.querySelectorAll('.main img')
// for (let i = 0; i < 5; i++) {
//     img1[i].setAttribute('src', 'https://2.bp.blogspot.com/-pTFusbv0hd4/US3gS01VtyI/AAAAAAAAAbE/EL0Imw6qQGA/s1600/Selena+Gomez-1.jpeg')
// }
// let link1 = document.querySelector('a')
// console.log(link1.getAttribute('href'));
// console.log(link1.hasAttribute('href'));
// console.log(link1.hasAttribute('target'));
// console.log(link1.removeAttribute('href'));


// let links_href = [];
// let elem = document.querySelectorAll('a')
// for (let i = 0; i < elem.length; i++) {
//    links_href.push(elem[i].getAttribute('href'))
    
// }
// console.log(links_href);

// let new_p = document.createElement('p')
// new_p.innerText = 'New paragraph'
// document.body.append(new_p)
// document.body.prepend(new_p)
// document.body.append(new_p)
// for (let i = 0; i < 3; i++) {
//     let new_p1 = document.createElement('p')
//     new_p1.innerText='New'
//     document.body.prepend(new_p1)
    
// }

// let elem = document.querySelector('#existingElement')
// let p1 = document.createElement('p')
// p1.innerText='Не бойтесь отказаться от устаревших идей в пользу более реалистичных и осуществимых планов.'
// elem.after(p1);

// elem.style.color = 'red'
// elem.style.fontSize = '20px'




// for(let i=0; i<=255; i+=10){
//     let block = document.createElement('div');
//     block.style.backgroundColor = `rgb(255, ${i}, 255)`;
//     block.style.width = '100%';
//     block.style.height = '50px';
//     document.body.append(block);
// }

// let p=document.querySelector('p')
// p.addEventListener('click', function () { console.log(p.innerText); })

// function clickMe() {
//     console.log(p.innerText);
// }
// p.addEventListener('click', clickMe)

// p.addEventListener('click', createBlock)
// function createBlock() {
//     let block = document.createElement('div')
//     block.innerText = "I am block"
//     block.style.border = '5px solid red'
//     document.body.append(block)
// }


// let button = document.querySelector('.click')
// let p =document.querySelector('p')

// function getSum() {
//     let sum = 0
//     for (let i = 0; i < 100; i++) {
//         sum += i
//     }
//     p.innerText = sum
// }
// button.addEventListener('click', getSum)

// let paragraphs = document.querySelectorAll('p')
// let button = document.querySelector('.click')
// function getParagraphs() {
//     for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].innerText=i+1
//     }
// }
// button.addEventListener('click', getParagraphs)

let p = document.querySelector('p');
let button = document.querySelector('button');
function getPar() { 
    p.innerText = Number(p.innerText) ** 2;
}
button.addEventListener('click', getPar);