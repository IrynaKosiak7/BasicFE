// let str = 'Hello'
// let num = 123
// let flag = true
// let text = 'true'
// console.log(typeof (str));
// console.log(typeof (num));
// console.log(typeof (flag));
// console.log(typeof (text));


// let a1 = prompt()
// let a2 = prompt()
// console.log(a1 + a2);
// console.log(a1 - a2);
// console.log(a1 / a2);
// console.log(a1 * a2);


// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + '3'
// let a9 = '5' - 3
// let a10 = 75 + 'kg'
// console.log( a6, a7, a8, a9, a10)

// let m = prompt()
// let n
// if (m > 50) {
//      n = 'big'
// } else {
//     n = 'little'
// }
// console.log(n);
// for (let i = 34; i <= 72; i++) {
//     console.log(i)
// }

// function hello1() {
//     console.log('Hello, JavaScript');
// }
// hello1()

// let UserName
// function hello2(userName) {
//     if (userName != undefined) {
//         console.log(`Привет, ${userName}`);
//     } else if (userName == undefined) {
//         console.log(`Привет, Гость`);
//     }
// }
// hello2('Василий')
// hello2('Маша')
// hello2()


// function mul(n, m) {
//     console.log(n * m);
//     console.log(n / m);
//     console.log(n - m);
//     console.log(n + m);
// }
// mul(prompt(), prompt())
// function mul(n, m) {
//     let result = n * m
//     return result
// }

// let result = mul(prompt(), prompt())
// console.log(result);


// function avg(a, b, c, d, e) {
//     let res = (a, b, c, d, e) / 5
//     return res
// }
// console.log(avg( 12, 34, 23, 56, 45));

// let arr = [34, 23, 56, 'hi']
// arr[0] = 25
// console.log(typeof arr.push);
// // arr.push()
// console.log(arr[0]);
// console.log(arr);
// arr.push('newElem')
// arr.pop()
// arr.pop()
// console.log(arr);
 


// let obj = { userName: 'Vacho', gender: 'm', age: 26 }
// obj.userName = prompt()
// obj.favColor = 'Blue'
// console.log( obj);

// function Func(a, b) {
//     let arr = []
//     let start
//     let end
//     if (a>b) {
//         start = b
//         end = a
//     } else {
//         start = a
//         end = b
//     }

//     for (let i = start; i < end; i++) {
//         arr.push (i)
        
//     }
//     console.log(arr);
// }
// Func(3, 8)
// Func(-3, 8)
// Func(13, 8)


// function func1(a, b) {
//     let arr = []
//     let start
//     let end
//     if (a>b) {
//         start = b
//         end = a
//     } else {
//         start = a
//         end = b
//     }
//     for (let i = end; i > start; i--) {
//         arr.push(i)
//     }
//   console.log(arr);
// }
// func1(1, 13)
// func1(-3, 5)
// func1(13, 8)



let list = [23, 15, -10, 52, 30, 5, -2, 20, -42, -3]
let sum = 0

    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i]
}
console.log(sum);


let sum1 = 0
for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) {
        sum1 = sum1 + list[i]
    }
}
console.log(sum1);



let sum2 = 0
let dif = 0
for (let i = 0; i < list.length; i++) {
    if (list[i] < 0) { 
        sum2 = sum2 + list[i]   
    }  
    if (sum2 < sum1) {
        dif = sum1 -sum2
    } else {
        dif = sum2-sum1
    }
}
console.log(sum2);
console.log(dif);



function calcult(array) { 
    let max = array[0]
    let min = array[0]

    for (let i = 0; i < list.length; i++) {
        if (array[i] > max) {
            max = array [i]
        } else if (array[i]<min) {
            min = array[i]
        }{
            
        }
    }
    let avg = sum / array.length
    // console.log(avg);
    // console.log(max);
    // console.log(min);


    let obj = {
    min: min,
    max: max,
    avg: Math.round(avg) 
    }
    console.log(obj);
}
// console.log();

// console.log(obj);
calcult(list)
