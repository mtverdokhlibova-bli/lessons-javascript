//1
// let age = prompt("What is your age?");
// if (age >= 18) {
//     console.log("дорослий")
// }
// else if (age > 12) {
//     console.log("підліток")
// }
// else {
//     console.log("дитина")
// }

//2
// const login = "admin";
// const password = "12345";
// let login_ = prompt("Enter login");
// let password_ = prompt("Enter password");
// if (login_ == login && password_ == password) {
//     alert("ok");
// } else {
//     alert("not logged in");
// }

//3
// let day = +prompt("Введи номер дня тижня")
// if (!(day <1 && day > 7)) {
//     switch(day) {
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("wednesday");
//             break;
//         case 4:
//             console.log("thursday");
//             break;
//         case 5:
//             console.log("friday");
//             break;
//         case 6:
//             console.log("saturday");
//             break;
//         case 7:
//             console.log("sunday");
//             break;
//     }
// }


//4
let productName = prompt("Назва товару");
let productPrice = +prompt("вартість товару");
let productCount = +prompt("кількість");
let discountCard = confirm("Чи є у тебе дисконтна карта?")
let deliveryType = prompt("Delivery: courier, post, pickup")

let totalPrice = productPrice * productCount;

// <2000 - 0%
// >2000 - 5%
// >5000 - 10%
// >10000 - 15%

let shopDiscount = 0;
if (totalPrice >= 10000) {
    shopDiscount = 15;
}
else if (totalPrice >= 5000) {
    shopDiscount = 10;
}
else if (totalPrice >= 2000) {
    shopDiscount = 5;
}

// <2000 - 5%
// >2000 - 10%
// >5000 - 12%
// >10000 - 15%

let shopDiscountCard 