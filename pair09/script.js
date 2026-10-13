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
//     let min = Number(prompt("Введіть мінімальну кількість місць"));
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
//         if (topics[i].toLowerCase() === name.toLowerCase()) {
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

let participants = [];
function manageParticipants() {
    let myName = prompt("Введіть ваше ім'я");
    if (!myName || myName.trim() === "") {
        myName = "Гість";
    }
    participants.push(myName);
    for (let i = 0; i < 4; i++) {
        let name = prompt(`Введіть ім'я учасника ${i + 2} із 5:`);
        if (name === 0) {
            alert("Скасовано");
            break;
        }
        while (name.trim() === "") {
            name = prompt("Введіть ще раз");
            if (name === null) break;
        }
        if (name === null) break;
        participants.push(name.trim());
    }

    let listMessage = "Список учасників:\n";
    for (let i = 0; i < participants.length; i++) {
        listMessage += (i + 1) + ". " + participants[i] + "\n";
    }
    alert(listMessage);

    let myNameLength = participants[0].length;
    let longerNamesCount = 0;
    for (let i = 0; i < participants.length; i++) {
        if (participants[i].length > myNameLength) {
            longerNamesCount++;
        }
    }
    alert("Кількість імен, які довші за ваше: " + longerNamesCount + "\nПерсональний поріг: " + myNameLength);

    let changeAnswer = confirm("Бажаєте змінити ім'я?");
    if (changeAnswer) {
        let indexInput = prompt("Введіть номер учасника");
        let index = Number(indexInput) - 1;
        if (index >= 0 && index < participants.length) {
            let newName = prompt("введіть нове ім'я");
            while (!newName || newName.trim() === "") {
                newName = prompt("Введіть нове ім'я");
            }
            participants[index] = newName.trim();
            let updatedMessage = "Оновлений список:\n";
            for (let i = 0; i < participants.length; i++) {
                updatedMessage += (i + 1) + participants[i] + "\n";
            }
            alert(updatedMessage);
        } else {
            alert("Невірний номер учасника");
        }
    }
}
manageParticipants()