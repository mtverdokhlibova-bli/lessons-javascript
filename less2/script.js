// if(умова){
//     дії;
// }
// else if(){
//
// }

// true
// 1

// false
// 0
// 0n
// "" ''
// null
// undefined
// NaN

// let a = 10, b = 12;
// console.log(a == b); //нестрога рівність
// console.log(a === b); //строга рівність
// console.log(a != b);
// console.log(a !== b);
// > < >= <=


// let a = +prompt("Введи число: ");
// let b = +prompt("Введи число: ");
// let c;

// if (a > b) {
//     c = 'a > b'
// } else if (a < c) {
//     c = 'a < c'
// }
// else {
//     c = 'a == b'
// }
// alert(c);

// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a == b'

// let course = prompt("What is the name of the course?"), tittle;
// switch (course) {
//     case 'figma':
//         tittle = "Figma";
//         break;
//
//     case 'WEB':
//     case 'HTML':
//     case 'CSS':
//         tittle = "HTML + CSS";
//         break;
//
//     case 'Javascript':
//         tittle = "JavaScript основи програмування";
//         break;
//
//     default:
//         tittle = 'курсів не знайдено';
// }
// alert(tittle);



//_________________________

// let name = prompt("Введіть товар: ");
// let price = prompt('Ведіть кількусть товару: ');
// let count = prompt('Введіть вартість товару: ');
// let sum = price * count
// if (sum > 5000) {
//     sum = sum * 0.9;
//     alert('Знижка 10%! Потрібно сплатити: ' + sum);
// }
// else {
//     alert('Потрібно сплатити: ' + sum)
// }


// let delivery = prompt('Оберіть тип доставки '), price;
// switch (delivery) {
//     case "кур'єр":
//         price = '200 грн'
//         break;
//     case 'пошта':
//         price = '100 грн'
//         break;
//     case 'самовивіз':
//         price = 'безкоштовно'
//         break;
//     default:
//         price = "невідомий тип доставки"
// }
// alert(price);


// let a = true;
// console.log(!a);
//
// let a = 10, b = 12, c = 5;
// if(a > b && a > c) {
//     console.log(a);
// } else if (b > a || a > c){}