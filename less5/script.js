// && або
// ||  і


// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// console.log(Number("hello"))


// let age = +prompt("Enter your age number");
// while (Number.isNaN(age) || age < 0 || age > 120) {
//     alert("Please enter your age");
//     age = +prompt("Enter your age number");
// }
// console.log(age);


// const correctPin = 1111
// // let pin = +prompt('Enter a valid pin');
// let tries = 1;

// while (pin !== correctPin && tries <= 3) {
//     pin = +prompt('Enter a valid pin');
//     tries ++;
// }
// if (pin === correctPin) {
//     alert('Доступ дозволено')
// }
// else {
//     console.log('Карту заблоковано');
// }


// while (tries <= 3) {
//     let pin = +prompt("Enter a valid pin");
//     if (pin === correctPin) {
//         console.log("Вхід дозволено");
//          break;
//     }
//     tries++
//     console.log("Неправильний пароль")
// }

// let menuChoice;
// do{
//     menuChoice = prompt("Оберіть дію:\n " +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n " +
//         "0 - Вихід")
//     if (menuChoice === 1){
//         console.log("Відкриваємо профіль")
//     }
//     else if (menuChoice === 2){
//         console.log("Налаштовуємо профіль")
//     }
//     else if (menuChoice === 0){
//         console.log("Вихід")
//     }
//     else {
//         console.log("Не зрозуміла команда")
//     }
//
// } while (menuChoice !== 0)

//
// let menuChoice;
// do{
//     menuChoice = prompt("Оберіть дію:\n " +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n " +
//         "3 - Відправити повідомлення\n " +
//         "4 - Переглянути інформацію\n " +
//         "5 - Видалити акаунт\n " +
//         "0 - Вихід")
//     switch(menuChoice){
//     }
// }


// let gradeSum = 0;
// let count = 0;
// let a;
// while(count < 5){
//     let num;
//     num = +prompt("Enter the grade");
//     if (Number.isNan(num) || num <= 0 || num > 12){
//         alert("Invalid grade");
//         continue;
//     }
//     gradeSum += num;
//     count++;
// }
// alert("Average grade is ${gradeSum/5})

//_________________________________________

let age = +prompt("Enter your age number");
while (Number.isNaN(age) || age < 12 || age > 90) {
    alert("Please enter your age");
}
alert("Your age is " + age);
const correctPin = 4321;
let attempts = 3;
let access = false;
while (attempts > 0 ) {
    let pin = +prompt("Enter your PIN:");
    if (pin === correctPin) {
        alert("PIN is correct");
        access = true;
        break;
    }
    else {
       attempts--;
       if (attempts > 0) {
           alert("try again");
       }
    }
}  
if (access) {
    let choice;
    do {
        choice = +prompt("МЕНЮ:\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід");

        switch (choice) {
            case 1:
                alert("Ви відкрили особистий кабінет");
                break;
            case 2:
                alert("Немає нових повідомлень");
                break;
            case 3:
                alert("Відкрито налаштування");
                break;
            case 0:
                alert("Вихід");
                break;
            default:
                alert("Такого пункту немає.");
        }
    } while (choice !== 0);
} else {
    alert("Доступ заборонено")
}
