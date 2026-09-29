let event;
let price = 0;

while (price === 0){
    event = prompt("Тип події:\n" +
        "1 — Кіно\n" +
        "2 — Театр\n" +
        "3 — Концерт");
    switch (event) {
        case "1":
            price = 150;
            break;
        case "2":
            price = 220;
            break;
        case "3":
            price = 350;
            break;
        default:
            alert("Такої події немає");
    }
}
let day = 0;
while (day !== 1 && day !== 2) {
    day = +prompt("Тип дня:\n" +
        "1 — Будній\n" +
        "2 — Вихідний")
}
if (day === 2) {
    price = price * 1.15;
}

let processedTickets = 0;
let freeTickets = 0;
let discount = 0;
let fullPrice = 0;
let total = 0;
let tickets = 0;

while (tickets < 1 || tickets > 6 || Number.isNaN(tickets)) {
    tickets = +(prompt("Введіть кількість квитків"));
}

for (let i = 1; i <= tickets; i++) {
    let age = -2;
    while (age < -1 || age > 100 || Number.isNaN(age)) {
        age = +prompt("Вкажіть свій вік")
    }
    if (age === -1) {
        break;
    }
}

processedTickets++;
let ticketPrice = price;
if (age >= 60) {
    ticketPrice = price * 0.75;
} else if (age >= 18 && age <= 59) {
    ticketPrice = price;
} else if (age >= 13 && age <= 17) {
    ticketPrice = price * 0.8;
} else if (age >= 6 && age <= 12) {
    ticketPrice = price * 0.5;
} else if (age >= 0 && age <= 5) {
    ticketPrice = 0;
    freeTickets++;
}

if (age >= 18 && age <= 25) {
     discount = +prompt("Чи є студентський квиток?\n" +
         "1 — Так\n" +
         "2 — Ні")
     if (discount === 1) {
         ticketPrice = price * 0.9;
     }
}
if (ticketPrice < price) {
    discount++;
} else {
    fullPrice++;
}
total += ticketPrice;

if (total > 1000) {
    total = total * 0.95;
    console.log("Додаткова знижка 5%");
}

console.log("Подія:" + event);
console.log("Оброблено квитків:" + processedTickets);
console.log("Безкоштовні квитки:" + freeTickets);
console.log("Квитки зі знижкою: " + discount);
console.log("квитки за повною сумою: " + fullPrice);
console.log("Загальна сума:" + total);
