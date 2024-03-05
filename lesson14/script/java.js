// let arr = ['Vacho', 26, 170]
// console.log(arr[0]);

// let object = {
//     name: 'Vacho',
//     age: 26,
//     height: 170,
//     arrr:[25, 58, 1004],
// }
// console.log(object.name);
// console.log(object['height']);


// let cosmetics = {
//     name1: 'Ritual',
//     preis: 20,
//     quantity: 200,
// }
// console.log(cosmetics.preis);
// console.log(cosmetics ['quantity'] );

// let sum = 0
// const products = [
//     {
//         id:1,
//         type: 'food',
//         title: "Milk",
//         price: 24000,
//         discount:20,
//     },
//     {
//         id:2,
//         type: 'food',
//         title: "Chocolate",
//         price: 5,
//         discount:50,
//     },
//     {
//         id:3,
//         type: 'food',
//         title: "Coffee",
//         price: 1000,
//         discount:15,
//     },
//     {
//         id:4,
//         type: 'food',
//         title: "Marmelad",
//         price: 2000,
//         discount:90,
//     },
//     {
//         id: 1,
//         type: 'sport',
//         title: "Велосипед",
//         price: 45000,
//         discount: 20 ,
    
//     },
//     {
//         id: 2,
//         type: 'sport',
//         title: "Лыжи",
//         price: 25000,
//         discount:60,
//     },
//     {
//         id: 3,
//         type: 'sport',
//         title: "Ролики",
//         price: 17000,
//         discount:45,
//     },
// ]
// for (let i = 0; i < products.length; i++) {
//     // console.log(`nameProduct ${products[i].title} : preis ${products[i].price}`);
//     sum = sum + products[i].price
// }
// console.log(`Summ zusammen ${sum}`)
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 1500) {
//         console.log(products[i].title);
//     }
// }
// for (let i = 0; i < products.length; i++) {
//     let real_price = products[i].price / 100 * (100 - products[i].discount);
//     console.log(`${products[i].title} ${Math.round(real_price)}`);
// }

// let num = [12, 65, 34]
// // let n12 = num[0]
// // let n65 = num[1]
// // let n34 = num[2]

// // console.log(n65 + n34)


// let [n12, n65, n34] = num
// console.log(n12,n65, n34 );
// console.log(num[0], num[1], num[2]);

// for (let i = 0; i < products.length; i++) {
//     //
//     // let real_price = products[i].price - products[i].discount / 100 * products[i].price

//     let {id, type, title, price, discount } = products[i];
//     let real_price = price - discount /100 *price
//     console.log(`${id}, ${type} - ${title}: ${real_price}`);
// }


// for (let i = 0; i < products.length; i++) {
//     l
    
// }

let cosmetic = [
    {
    name: 'Ritual',
    preis: 20,
    quantity: 200,
    },
    {
    name: 'Gucci',
    preis: 100,
    quantity: 100,
    },
    {
    name: 'DM',
    preis: 500,
    quantity: 2100,
    },
    {
    name: 'Ja',
    preis: 10,
    quantity: 2000000,
    },
    {
    name: 'Achan',
    preis: 50,
    quantity: 200,
    },
]
for (let i = 0; i < cosmetic.length; i++) {
    let {price, name} = cosmetic[i]
    if (price < 100){
        newArr.push (cosmetic[i])
    }
}
console.log(newArr);