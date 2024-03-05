const obj = {
    user: 'Vacho',
    age: 26
}

function sayHi() {
    console.log('hello world');
}
sayHi()

// function func() {
//     let num1 = prompt()
//     let num2 = prompt()
//     console.log(num1 + num2);
//     console.log(num1 - num2);
//     console.log(num1 * num2);
//     console.log(num1 / num2);
//     console.log(Math.round(num1 / num2));
    
// }
// func()


// function oddEven() {
//     let num =prompt()
//     if (num  %2 == 0) {
//         console.log('yes');
//     } else  if(num %2 !==0){
//         console.log('no');
//     }
// }
// oddEven()



// function func(a, b) {
//     if (a > b) {
//         console.log(a);
//     } else  if (b > a) {
//         console.log(b);
//     } else {
//         console.log('they are same');
//     }
// }
// func(prompt(), prompt())

// function func1(c,d) {
//     let res = c * d
//     return res
// }
// let newRes = func1(prompt(), prompt())

// if (newRes > 0) {
//     console.log('Задача выполнена');
// } else {
//     console.log ('error')
// }

// function power(a, b) {
//     const hypotenuse = Math.sqrt(a * a + b * b)
//     return hypotenuse
// }
// let side1 = 3
// let side2 = 2

// let resul = power(side1 + side2)
// console.log(resul);


// function trueFalse(num) {
    
//     if (num %2 ===0) {
//         return true
//     } else {
//         return false
//     }
// }
 
// let resul = trueFalse (prompt())
// console.log(resul);

function arrFunc(maxNum) {
    let arr = []
    for (let i = 2; i <= maxNum; i++) {
        arr.push(i)
    }
    return arr
}
console.log(arrFunc(5));

