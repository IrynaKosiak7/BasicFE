// const words = ['hello ', 'how ', 'are ', 'you ', 'i ', 'am ', 'fine'];
// for (let i= 0; i < words.length; i++) {
//  let p = document.createElement('p');
//  p.innerText = words[i];
//  document.body.append (p);
// }


// let div = document.createElement('div')
// let image = document.createElement('img')
// let elemLink = document.createElement('a')
    
// image.setAttribute('src', 'https://i.pinimg.com/originals/33/ef/4f/33ef4fae00a3027ac0c86721d9033cc3.jpg')
// elemLink.setAttribute('href', 'https://www.knivesandtools.de/de/ct/fenix-led-taschenlampen.htm?msclkid=c01dd4cda2811f817875b1520ed28381&utm_source=bing&utm_medium=cpc&utm_campaign=Merk-ZB&utm_term=fenix&utm_content=Merk-ZB%3A%20Fenix')
// elemLink.innerText = 'seite'


// div.style.border = '2px solid black'
// div.style.padding = '20px'
// div.style.display = 'flex'
// div.style.flexDirection = 'underline'
// image.style.width = '150px'


// header.append (image, elemLink)
// document.body.append(div)


// function func(img, link) {
//     let div = document.createElement('div')
//     let image = document.createElement('img')
//     let elemLink = document.createElement('a')
    
//     image.setAttribute('src', image)
//     elemLink.setAttribute('href', link)
//     elemLink.innerText = 'seite'

//     div.append (image, elemLink)
//     document.body.append(div)

// }


// // let image = ('https://i.pinimg.com/originals/33/ef/4f/33ef4fae00a3027ac0c86721d9033cc3.jpg')
// // let link =('https://www.knivesandtools.de/de/ct/fenix-led-taschenlampen.htm?msclkid=c01dd4cda2811f817875b1520ed28381&utm_source=bing&utm_medium=cpc&utm_campaign=Merk-ZB&utm_term=fenix&utm_content=Merk-ZB%3A%20Fenix')

// func(prompt('image'), prompt('link'))

const root = document.querySelector('#root')


// const arr = [
//     {link: 'https://www.apple.com/', title: 'Apple'},
//     {link: 'https://www.samsung.com/ru/', title: ' Samsung'},
//     {link: 'https://www.mi.com/ru/', title: ' Xiaomi'}
// ]
// for (let i = 0; i < arr.length; i++) {
//     let a = document.createElement('a')
//     a.innerText = arr[i].title
//     a.setAttribute('href', arr[i].link)
//     root.append(a)
// }

// callBack()

// function func(a, b, callback) {
//     let result = a + b
//     callback(result)

// }

// function displayResult(res) {
//     console.log('Результат:' + res);

// }
// func(3, 5, displayResult)

// function func(a, b, f) {
//    console.log('Выполняем вычисление...');
//     let result = a / b
//     return f(result)
// }




// let res = func(345, 7, Math.round)
// console.log(res);

// let res2 = func(345, 7, Math.ceil)
// console.log(res2);

// let res3 = func(345, 7, newFunc)
// console.log(res3); // 2429


// function newFunc(res) {
//      let newres = res ** 2
//     return Math.round(newres)
// }

// function sayHi() {
//     console.log('hello');
// }

// function func() {
//     alert('hello')
// }

// h1.addEvantListener('click', func)


const h1 = document.querySelector('h1')
h1.addEventListener('click', function () {
    console.log('hello');
})

// h1.onclick = function () {
//     console.log('hello')
// }

// function name(params) {
    
// }