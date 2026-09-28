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
