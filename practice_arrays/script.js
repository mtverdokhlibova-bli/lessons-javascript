//1______________________

// let topics = ['JavaScript', 'HTML', 'CSS', 'Git', 'WebStorm', 'Vue'];
// let seats = [12, 8, 15, 0, 6, 10];
//
// function showWebinar() {
//     let name = prompt("Введіть ваше ім'я:");
//     if (!name || name.trim() === "") {
//         alert("Please enter a name");
//         return;
//     }
//     let day = +prompt("Введіть день народження");
//     if (isNaN(day) || day < 1 || day > 31) {
//         alert("Невірний день народження!");
//         return;
//     }
//     let month = +prompt("Введіть місяць народження");
//     if (isNaN(month) || month < 1 || month > 12) {
//         alert("Невірний місяць народження!");
//         return;
//     }
//     let personalNumber = (name.length + day + month) % topics.length;
//     alert(`Рекомендований вебінар: ${topics[personalNumber]}`);
// }
//
// function showCatalog() {
//     let message = "Каталог вебінарів:\n";
//     for (let i = 0; i < topics.length; i++) {
//         let status;
//         if (seats[i] > 0) {
//             status = "Набір відкрито";
//         } else {
//             status = "Місць немає";
//         }
//         message += (i + 1) + topics[i] + " - місць: " + seats[i] + " (" + status + ")\n";
//     }
//     alert(message);
// }
//
// function filterWebinars() {
//     let min = +(prompt("Введіть мінімальну кількість місць"));
//     let message = "Знайдені вебінари:\n";
//     let found = false;
//
//     for (let i = 0; i < topics.length; i++) {
//         if (seats[i] >= min) {
//             message += topics[i] + " (місць: " + seats[i] + ")\n";
//             found = true;
//         }
//     }
//     if (found) {
//         alert(message);
//     } else {
//         alert("Збігів немає");
//     }
// }
// showWebinar()
// showCatalog()
// filterWebinars()


//2_______________

// let topics = ['JavaScript', 'HTML', 'CSS', 'Git', 'WebStorm', 'Vue'];
// let seats = [12, 8, 15, 0, 6, 10];
//
// function register() {
//     let name = prompt("Введіть назву вебінару:");
//     if (name === 0) {
//         alert("Пошук відмінено");
//         return;
//     }
//     let index = -1;
//     for (let i = 0; i < topics.length; i++) {
//         if (topics[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("Невідома назва вебінару");
//     } else if (seats[index] <= 0) {
//         alert("Місць немає");
//     } else {
//         let answer = confirm("Вебінар знайдено. Вільних місць: " + seats[index] +  "Вас записати?");
//         if (answer) {
//             seats[index] = seats[index] - 1;
//             alert("Оновлена кількість місць: " + seats[index]);
//         } else {
//             alert("Запис скасовано");
//         }
//     }
// }
// register();


//3_________________

// let participants = [];
// function manageParticipants() {
//     let myName = prompt("Введіть ваше ім'я");
//     if (!myName || myName.trim() === "") {
//         myName = "Гість";
//     }
//     participants.push(myName);
//     for (let i = 0; i < 4; i++) {
//         let name = prompt(`Введіть ім'я учасника ${i + 2} із 5:`);
//         if (name === 0) {
//             alert("Скасовано");
//             break;
//         }
//         while (name.trim() === "") {
//             name = prompt("Введіть ще раз");
//             if (name === 0) break;
//         }
//         if (name === 0) break;
//         participants.push(name.trim());
//     }

//     let listMessage = "Список учасників:\n";
//     for (let i = 0; i < participants.length; i++) {
//         listMessage += (i + 1) + ". " + participants[i] + "\n";
//     }
//     alert(listMessage);

//     let myNameLength = participants[0].length;
//     let longerNamesCount = 0;
//     for (let i = 0; i < participants.length; i++) {
//         if (participants[i].length > myNameLength) {
//             longerNamesCount++;
//         }
//     }
//     alert("Кількість імен, які довші за ваше: " + longerNamesCount + "\nПерсональний поріг: " + myNameLength);

//     let changeAnswer = confirm("Бажаєте змінити ім'я?");
//     if (changeAnswer) {
//         let indexInput = prompt("Введіть номер учасника");
//         let index = Number(indexInput) - 1;
//         if (index >= 0 && index < participants.length) {
//             let newName = prompt("введіть нове ім'я");
//             while (!newName || newName.trim() === "") {
//                 newName = prompt("Введіть нове ім'я");
//             }
//             participants[index] = newName.trim();
//             let updatedMessage = "Оновлений список:\n";
//             for (let i = 0; i < participants.length; i++) {
//                 updatedMessage += (i + 1) + participants[i] + "\n";
//             }
//             alert(updatedMessage);
//         } else {
//             alert("Невірний номер учасника");
//         }
//     }
// }
// manageParticipants()

//4________________________

// let visits = [24, 18, 32, 0, 15, 27, 9, 21];
// let day = 13;
// let month = 10;
// let bonus = (day + month) % 7;
// let personalVisits = [];
// for (let i = 0; i < visits.length; i++) {
//     personalVisits.push(visits[i] + bonus);
// }
//
// function getVisitStats(values) {
//     let suma = 0;
//     let max = values[0];
//     let min = values[0];
//
//     for (let i = 0; i < values.length; i++) {
//         suma = suma + values[i];
//         if (values[i] > max) {
//             max = values[i];
//         }
//         if (values[i] < min) {
//             min = values[i];
//         }
//     }
//     let average = suma / values.length;
//     return [suma, average, max, min];
// }
//
// let stats = getVisitStats(personalVisits);
// let thresholdInput = prompt("Введіть поріг відвідуваності");
// while (thresholdInput === 0 || thresholdInput.trim() === "" || isNaN(Number(thresholdInput))) {
//     thresholdInput = prompt("Введіть поріг ще раз");
// }
// let threshold = Number(thresholdInput);
// let thresholdCount = 0;
// let thresholdIndex = [];
// for (let i = 0; i < personalVisits.length; i++) {
//     if (personalVisits[i] >= threshold) {
//         thresholdCount++;
//         thresholdIndex.push(i + 1);
//     }
// }
// alert(
//     "Бонус: " + bonus + "\n" +
//     "Сума: " + stats[0] + "\n" +
//     "Середнє: " + stats[1] + "\n" +
//     "Максимум: " + stats[2] + "\n" +
//     "Мінімум: " + stats[3] + "\n" +
//     "Кількість значень, не менших за поріг (" + threshold + "): " + thresholdCount
// );
//
// let showThreshold = confirm("показати номери вебінарів?")
// if (showThreshold === true) {
//     alert("Номери: " + (thresholdIndex.length > 0 ? thresholdIndex.join(", ") : "немає таких"));
// }


//5________________

// let topics = ['JavaScript', 'HTML', 'CSS', 'Git', 'WebStorm', 'Vue'];
// let seats = [12, 8, 15, 0, 6, 10];
//
// function showList() {
//     let text = "Список вебінарів:\n";
//     for (let i = 0; i < topics.length; i++) {
//         text += (i + 1) + ". " + topics[i] + " (місць: " + seats[i] + ")\n";
//     }
//     alert(text);
// }
// function findWebinar() {
//     let word = prompt("Введіть назву для пошуку");
//     if (word === null || word.trim() === "") {
//         alert("Порожній запит");
//         return;
//     }
//     word = word.trim();
//     let result = "";
//     for (let i = 0; i < topics.length; i++) {
//         if (topics[i].includes(word)) {
//             result += (i + 1) + ". " + topics[i] + " (місць: " + seats[i] + ")\n";
//         }
//     }
//     if (result === "") {
//         alert("Нічого не знайдено");
//     } else {
//         alert("Знайдено:\n" + result);
//     }
// }
// function menu() {
//     let choice;
//     do {
//         choice = prompt(
//             "меню\n" +
//             "1 - показати вебінари\n" +
//             "2 - додати вебінар\n" +
//             "3 - перейменувати за номером\n" +
//             "4 - знайти вебінар\n" +
//             "5 - видалити останній вебінар\n" +
//             "0 - вихід"
//         );
//         if (choice === 0) break;
//         switch (choice) {
//             case "1":
//                 showList();
//                 break;
//             case "2":
//                 let newTopic = prompt("Введіть новий вебінар");
//                 if (newTopic && newTopic.trim() !== "") {
//                     let newSeats = +(prompt("Введіть кількість місць"));
//                     topics.push(newTopic.trim());
//                     seats.push(newSeats);
//                     alert("Вебінар додано");
//                 } else {
//                     alert("Введіть ще раз");
//                 }
//                 break;
//             case "3":
//                 let num = +(prompt("Введіть номер вебінару"));
//                 if (isNaN(num) || num < 1 || num > topics.length) {
//                     alert("Такого номера немає");
//                     break;
//                 }
//                 let renamed = prompt("Введіть нову назву");
//                 if (renamed === 0 || renamed.trim() === "") {
//                     alert("Нема назви");
//                     break;
//                 }
//                 topics[num - 1] = renamed.trim();
//                 alert("Назву змінено");
//                 break;
//             case "4":
//                 findWebinar();
//                 break;
//             case "5":
//                 let del = confirm("Видалити останній вебінар?");
//                 if (del === true) {
//                     topics.pop();
//                     seats.pop();
//                     alert("Видалено");
//                 }
//                 break;
//             case "0":
//                 let exit = confirm("Ви справді хочете вийти?");
//                 if (exit === true) {
//                     alert("Вихід з програми");
//                     choice = "0";
//                 } else {
//                     choice = "continue";
//                 }
//                 break;
//             default:
//                 alert("Невірний вибір");
//         }
//     } while (choice !== "0");
// }
// menu();


//6________________________

// requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
// let day = 19;
// let month = 9;
// let name = "Masha";
// let personalScore = (day * month + name.length) % 101;
// requestScores.push(personalScore);

// while (confirm("Додати новий бал?")) {
//     let score = +(prompt("Введіть бал"));
//     if (score === null) {
//         break;
//     }
//     let n = Number(score);
//     if (score.trim() === "" || isNaN(n) || n < 0 || n > 100) {
//             alert("Некоректне значення, бал не додано");
//     } else {
//             requestScores.push(n);
//     }
// }
// function distributeRequests(scores) {
//     let high = [];
//     let medium = [];
//     let low = [];

//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] >= 85) {
//             high.push(scores[i]);
//         } else if (scores[i] >= 50) {
//             medium.push(scores[i]);
//         } else {
//             low.push(scores[i]);
//         }
//     }
//     return [high, medium, low];
// }
// function average(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// let groups = distributeRequests(requestScores);
// let names = ["Високі", "Середні", "Низькі"];

// let max = 0;
// for (let i = 0; i < 3; i++) {
//     if (groups[i].length > max) {
//         max = groups[i].length;
//     }
// }
// let biggest = "";
// for (let i = 0; i < 3; i++) {
//     alert(names[i] + ": " + groups[i].join(", ") +
//         "\nКількість: " + groups[i].length +
//         "\nСередній бал: " + average(groups[i]));
//     if (groups[i].length === max) {
//         biggest += names[i] + " ";
//     }
// }

// alert("Найбільша група: " + biggest);

// let myGroup = names[2];
// if (personalScore >= 85) {
//     myGroup = names[0];
// }
// else if (personalScore >= 50) {
//     myGroup = names[1];
// }

// alert("Ваш бал: " + personalScore + "\nГрупа: " + myGroup);
