// let elem = document.querySelector('.first')
// elem.innerText = 'dfghjkl'
// elem.style.color = 'red'
// let div = document.querySelectorAll('div')
// console.log(div);
// for (let i = 0; i < div.length; i++) {
//     div[i].innerText =' 752016'
// }


// let img = document.querySelectorAll('img')

// for (let i = 0; i < img.length; i++) {
//     img[i].setAttribute('src', 'https://i.pinimg.com/236x/24/15/21/24152197af38deb718eb730992d441d0.jpg')
// }
  
// let img1 = document.querySelectorAll('.main img')
// // console.log(img1);
// for (let i = 0; i < 5 ; i++) {
//     img1[i].setAttribute('src', 'https://s1.1zoom.me/big0/763/Germany_Winter_Evening_Trees_Snow_600121_1280x719.jpg')
   
// }


// let img1 = document.querySelectorAll('.main')
// for (let i = 0; i < 5; i++) {
    
//         img1[i].setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');
    
//     }
// console.log(img1);
    // const img = document.querySelectorAll ('img')
// for (let i = 6; i < img.length; i++) {
  
// img[i].setAttribute ('src', 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg')}

// let arr = []
// let elem = document.querySelectorAll('*')
// for (let i = 0; i < elem.length; i++) {
//     if (elem[i].getAttribute('src') != null) {
//         arr.push(elem[i].getAttribute('src'))
//     }
// }
// console.log(arr);

let body = document.querySelector('body')
let elem = document.createElement('p')
elem.innerText = 'ich bin geboren'
document.body.append(elem)
console.log(document.body);
body.append(elem)
console.log(elem);

let divLast = document.querySelector('.last')
let elem1 = document.createElement('p')
elem1.innerText = 'ich bin geboren in der Ukraine'
divLast.prepend(elem1)

divLast.prepend(' prepend добавляет элемент внутри элемента в начел ')
divLast.append(' appendдобавляет элемент внутри элемента в конце ')


divLast.before(' before добавляет элемент перед ним  ')
divLast.after(' after добавляет элемент после него ')

let input = document.querySelector('input')
let btn = document.querySelector('button')


btn.addEventListener('click', function name() {
    
    let card = document.createElement('div')
    card.innerText = input.value
    card.style.border = '2px solid red'
    card.style.backgroundColor = 'blue'
    document.body.append(card)

})


for (let i = 0; i < 20; i++) {
    let elem1 = document.createElement('p')
    elem1.innerText = i
    document.body.append(elem1)
}