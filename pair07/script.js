// function showMessage() {
//     console.log("hello world");
// }
// showMessage();
// showMessage();
// showMessage();


// function showProduct(name, price = "немає у наявності") {
//     console.log(`Товар ${name}: ${price} грн`);
// }
// showProduct("Notebook");

// параметр - змінна, аргумент - значення, яке передається


// function calculate(price, count) {
//     return price * count;
// }
// let total = calculate(1000, 4);
// console.log(total);


// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }
//     else {
//         return 0;
//     }
// }
// let discount1 = +prompt("Please enter a number");
// console.log(discount(discount1));


// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscount(total) {
//     if (total >= 10000){
//         return 0.15;
//     }
//     else if (total >=5000){
//         return 0.1;
//     }
//     else if (total >= 2000){
//         return 0.05;
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * percent;
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter product price");
// let productCount = +prompt("Enter product count");
//
// let productTotal = getProductTotal(productCount, productPrice);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productPrice} грн`);
// console.log(`Кількість ${productCount}`)
// console.log(`Сума: ${productTotal} грн`);
// console.log(`Знижка ${discount}%`);
// console.log(`Сума знижки ${productDiscountValue} грн`);
// console.log(`До сплати ${productFinalPrice} грн`);


//-------------------------------

// function calculateCost(quantity, distance, fuelPrice) {
//     let fuel = distance * quantity / 100;
//     return fuel * fuelPrice;
// }
// function calculateTotal(quantity, fuelPrice) {
//     return quantity * fuelPrice;
// }
//
// let startTown = prompt("Enter your start city");
// let endTown = prompt("Enter your end city");
// let distance = prompt("Enter your distance");
// let quantity = prompt("Enter fuel per 100km");
// let fuelPrice = +prompt("Enter fuel price per liter");
//
// let cost = calculateCost(quantity, distance, fuelPrice);
// let total = calculateTotal(quantity, fuelPrice);
//
// console.log(`Поїздка з міста ${startTown} до міста ${endTown} обійдеться в ${cost} грн, ${total} грн за 1 км`);



let saveLogin = "";
let savePassword = "";
let registeredUser = false;

function register() {
    let login = prompt("Enter your login");
    let password = prompt("Enter your password");
    saveLogin = login;
    savePassword = password;
    registeredUser = true;
    alert("Ви успішно зареєструвалися");
}

function loginUser() {
    if (registeredUser === false) {
        alert("Спочатку зареєструйся!");
        return;
    }
    let attempt = 3;
    while (attempt > 0) {
        let userLogin = prompt("Enter your login");
        let userPassword = prompt("Enter your password");
        if (userLogin === saveLogin && userPassword === savePassword) {
            alert("Вхід дозволено!")
            return;
        }
        else {
            attempt -= 1;

            if (attempt > 0) {
                alert("Неправильний логін або пароль, залишилось спроб: " + attempt);

            }
            else {
                alert("Вхід заблоковано");
            }
        }

    }
}
function menu() {
    let menuChoice;
    do {
        menuChoice = +prompt("Меню:\n" +
            "1 - Зареєструватися\n" +
            "2 - Увійти в акаунт\n"+
            "0 - Вийти");

        if (menuChoice === 1) {
            register();
        } else if (menuChoice === 2) {
            loginUser();
        } else if (menuChoice === 0) {
            alert("Ви вийшли з меню")
        } else {
            alert("Такого пункту немає");
        }
    } while (menuChoice !== 0);
}
menu();