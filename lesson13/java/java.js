// const newArr = [34, 35, 23]
// newArr[2] = 'rttr'
// console.log(newArr);
// newArr[45] = 55555

// console.log(newArr);

// newArr.push('23',23)
// newArr.pop()
// console.log(newArr);


// Написать программу, в которой объявлен
// массив с 5 числовыми элементами. Программа
// должна заполнить новый пустой массив
// квадратами чисел из первого массива.
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 1, 9]

// const arr = [1, 4, 2, 5, 3]
// const newArr = []

// newArr.push(arr[0] ** 2)
// newArr.push(arr[1] ** 2)
// newArr.push(arr[2] ** 2)
// newArr.push(arr[3] ** 2)
// newArr.push(arr[4] ** 2)

// console.log(newArr);

// for (let i = 0; i < array.length; i ++) {
//    newArr.push (arr [i]**2)
// }
// console.log(newArr);


// for (let a = 2; a < 10; a= 2*2) {
//    console.log(a);
// }


// const myArr = [23, -4, 34, -55, 3, -3, 23 - 11]
// for (let i = 0; i < myArr.length; i++) {
//    if (myArr [i]>= 0) {
//       console.log(myArr[i]);
//    }
// }


// const myArr = [23, -4, 34, -55, 3, -3, 23 - 11, 1, 16, 4, 1, 9]
// for (let i = 0; i < myArr.length; i++) {
//    if (myArr [i] % 2 === 0 ) {
//       console.log(myArr[i]);
//    }
// }



// for (let i = 0; i < myArr.length; i++) {
//    if (i % 3 === 0) {
//       console.log(myArr[i])
//    }
// }

// let sum = 0
// for (let i = 0; i < myArr.length; i++) {
//    sum = sum + myArr[i]
//     console.log(sum);
// }


// let sum1 = 0
// for (let i = 0; i < myArr.length; i++) {
//    sum1 = sum1 + myArr[i]
//    if (sum1 > 0) {
//       console.log(sum1);
//    }
// }

const myArr1 = [23, -4, 34, -55, 3, -3, 23 - 11, 1, 16, 4, 1, 9]
// let sum2 = 0
// for (let i = 0; i < myArr1.length; i++) {
//   if (myArr1 [i] > 0) {
//      sum2 = sum2 + myArr1[i]
//      console.log(sum2);
//   }   
// }

// Задача: Найти сумму четных чисел и вывести в консоль.
let sum = 0
for (let i = 0; i < myArr1.length; i++) {
  if (myArr1 [i] % 2 == 0) {
    sum = sum + myArr1 [i];
  }
}
console.log(sum);


// Задача: Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
let sum2 = 0
for (let i = 0; i < myArr1.length; i++) {
  if (myArr1 [i] % 2 !== 0) {
    sum2 = sum2 + myArr1 [i];
  }
}
console.log(sum2);
let dif = 0
if (sum > sum2) {
  dif = sum- sum2
} else {
  dif = sum2 - sum
}
console.log(dif)