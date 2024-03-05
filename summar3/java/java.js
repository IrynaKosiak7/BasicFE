// let user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 26
// }
// console.log(user.firstName);
// console.log(user['lastName']);

// user.gender = 'Male';
// user.firstName = 'Bob';
// user['is admin'] = true;
// console.log(user);

// let key = prompt('Enter the key');
// console.log(user.key); //undefined
// console.log(user[key]); // значенние

// for (const key in user) {
//     if (user.hasOwnProperty.call(user, key)) {
//         const element = user[key];
        
//     }
//     console.log(user[key]);
//     console.log(key);
// }

// let country = {
//     name: 'Germany',
//     language: 'German',
//     capital: {
//         name: 'Berlin',
//         population: 4000000,
//         year: 1237,
//         date: {
//             day: 12,
//             month: 'Januar'
//         }
//     }
// };
// console.log(country);
// console.log(country.capital);
// console.log(country.capital.name);
// console.log(country.capital.population);
// console.log(country.capital['date'] );
// console.log(`The country is ${country.name} and the capital is ${country.capital.name}`);


// let users = {
//     firstName: ['John', 'Tom', 'Lily', 'Bob'],
//     lastName: ['Smith', 'Hardy', 'Brown', 'Daniels']
// };

// console.log(users.firstName);
// console.log(users.lastName);
// console.log(users.firstName[1]);
// console.log(users.lastName[1]);


// let products = [
//     {
//         name: 'Iphone 12 pro',
//         price: 1000
//     },
//     {
//         name: 'Iphone 13 pro',
//         price: 2000
//     },
//     {
//         name: 'Iphone 12 pro max',
//         price: 1500
//     }
// ]
// console.log(products);
// console.log(products[1]);
// console.log(products[1].price);
// console.log(products[1]['name']);


// function calcSum(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// let result = calcSum(3, 2);

// console.log(result);

// console.log(calcSum(4, 8));


// console.log(getSum(1, 2));

// function getSum(num1, num2){
//     return num1 + num2;
// }
// console.log(getSum(1, 2));


// let detSum = function name(num1, num2) { return num1 + num2 };

// console.log(getSum(2, 3));

// let value1 = +prompt('количество учеников');
// let value2 = +prompt('количество стульев');
//  if (value1 <= value2) {
//      console.log('стульев хватает')
//  }
//  else if (value1 > value2) {
//     console.log('стульев не хватает');
// }
// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }
// for (let i = 10; i < 100; i++) {
//     if (i % 5 ===0) {
//         console.log(i);
//     }
// }
// for (let i = 10; i < 100; i+=5) {
//         console.log(i);
// }


// for (let i = 100; i <1000; i++) {
//     if (i %3 ===0 && i % 5 ===0) {
//         console.log(i);
//     }
// }

// let numbers = [0, 13, -2, 5, 20, 23, 67, -56, 18, 0.25, -39, 37, 120]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers [i] % 2 !==0) {
//     console.log(numbers[i]);
//     }
// }

// let numbersSqrt = []
// for (let i = 0; i < numbers.length; i++) {
//     numbersSqrt.push(numbers[i]**2)
// }
// console.log(numbers);
// console.log(numbersSqrt);

// let user = {}
// user.name = 'John',
// user.surname = 'Smith',
// user.name = 'Pete'
// delete user.name
// console.log(user);

// let user = {
//     name: "John",
//     age: 30,
// }
// console.log('age' in user);

// let arr = [
//             {
//             id: 1,
//             title: "bicycle",
//             price: 45000,
//             discount: 10
//             },
//             {
//             id: 2,
//             title: "roller-skates",
//             price: 15000,
//             discount: 5
//             },
//             {
//             id: 3,
//             title: "Kick scooter",
//             price: 10000,
//             discount: 30
//             },
//             {
//             id: 4,
//             title: "skis",
//             price: 25000,
//             discount: 20
//             },
//             {
//             id: 5,
//             title: "skate",
//             price: 10000,
//             discount: 0
//         }
// ];
// for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(arr[i].title);
    // console.log(`${arr[i].title} (${arr[i].price})`);

    // let discounted_price =arr[i].price - (arr[i].price * arr[i].discount /100) 
//     console.log(`${arr[i].title} (${arr[i].price- (arr[i].price*arr[i].discount/100)})`);
// }
function checkNumber(num1, num2) {
    if (num1 %2 ===0 && num2 %2 ===0) {
        return num1 * num2;
    } else if (num1 %2 !==0 && num2 %2 !==0) {
        return num1 + num2
    } else {
        if(num1 %2 ===0){
            return num2
        }
        else {
        return num1
        }
    }
}
console.log(checkNumber(prompt(),prompt()));
