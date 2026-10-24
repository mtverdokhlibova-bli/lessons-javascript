// let book = {
//     title: "Кобзар", //ключі, значення
//     author: "Тарас Шевченко",
//     price: 500,
//     available: true,
// }
// console.log(book)
// console.log(book.title);
// console.log(book["author"]);
// book.price = 550;
// console.log(book.price);
//
// for (let key in book) {
//     console.log(`${key}: ${book[key]}`);
// }

// let books = [
//     {id: 1, title: "Кобзар", author: "Тарас Шевченко", price: 500, available: true,},
//     {id: 2, title: "Лісова Пісня", author: "Леся Українка", price: 820, available: false,},
//     {id: 3, title: "Тигролови", author: "Іван Багряний", price: 400, available: true,},
//     {id: 4, title: "Енеїда", author: "Іван Котляревський", price: 730, available: false,}
// ]
// // console.log(books);
// books.push({id:5, title: "Захар Беркут", author: "Іван Франко", price: 600, available: false});
// // console.log(books);
//
// for (let book of books) {
//     console.log(`${book.title} - ${book.author}`);
// }
// books.forEach(function (book){
//     console.log(`${book.title} - ${book.author}`)
// })
// console.log(books);
//
// // let total = books.filter(function(book){
// //     return book.available === true;
// // });
//
// let total = books.filter(book => book.available === true);
// console.log(total);
//
// let foundBooks = books.find(book => book.id === 3);
// console.log(foundBooks);
//
// let searchUserBook = prompt("Enter book title");
// let searchBook = books.find(book => book.title === searchUserBook);
// if (searchBook !== undefined) {
//     alert(searchBook);
// }else {
//     alert("Такої книги не має")
// }
//
// let titles = books.map(book => book.title);
// console.log(titles);
//
// let booksSale = books.map(book => {
//     return {
//         id: book.id,
//         title: book.title,
//         author: book.author,
//         price: Math.round(book.price * 0.9),
//         available: book.available,
//     }
// });
// console.log(booksSale);
//
// let sortedByPrice = books.slice().sort((a,b) => b.price - a.price); //перетворює стрінговий формат в числовий
// console.log(sortedByPrice);


//_____________________

let games = [
    {id: 1, title: "Minecraft", genre: "Sandbox", price: 600, rating: 7.9, available: true},
    {id: 2, title: "Genshin Impact", genre: "Action-RPG", price: 200, rating: 6.7, available: true},
    {id: 3, title: "The Witcher 3", genre: "Action-RPG", price: 1000, rating: 9.5, available: true},
    {id: 4, title: "Detroit: Become Human", genre: "Adventure", price: 700, rating: 9.3, available: false},
    {id: 5, title: "Cyberpunk 2077", genre: "Action-RPG", price: 1500, rating: 7.8, available: true},
    {id: 6, title: "The Sims 4", genre: "Life Simulation", price: 300, rating: 8.2, available: false}
]
for (let game of games) {
    console.log(`${game.title} - ${game.genre} - ${game.price} грн - рейтинг: ${game.rating} - наявність: ${game.available}`);
}
console.log(`Загальна кількість ігор: ${games.length}`);

let newTitle = prompt("Введіть назву нової гри");
let newGenre = prompt("Введіть жанр");
let newPrice = +prompt("Введіть ціну");
let newRating = +prompt("Введіть рейтинг гри від 1 до 10");

let newGame = {
    id: games.length + 1,
    title: newTitle,
    genre: newGenre,
    price: newPrice,
    rating: newRating,
    available: true
};
games.push(newGame);
console.log(newGame);

if (confirm("Бажаєте видалити останню гру?")) {
    let removedGame = games.pop();
    console.log("Видалено гру:", removedGame);
}
console.log(games);

let searchUserGame = prompt("Вкажіть назву гри для пошуку");
let searchGame = games.find(game => game.title === searchUserGame);
if (searchGame !== undefined) {
    alert(`Знайдено гру: ${searchGame.title}, жанр: ${searchGame.genre}, ціна: ${searchGame.price} грн`);
} else {
    alert("Такої гри немає");
}

let maxPrice = +prompt("Введіть максимальну ціну для фільтрації:");
let filterGames = games.filter(game => game.price <= maxPrice);
console.log(filterGames);

let topGames = games.filter(game => game.rating >= 8);
console.log(topGames);

let titles = games.map(game => game.title);
console.log(titles);

let gamesSale = games.map(game => {
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: Math.round(game.price * 0.85),
        rating: game.rating,
        available: game.available,
    }
});
console.log(gamesSale);

let sortedByPrice = games.slice().sort((a, b) => a.price - b.price);
console.log(sortedByPrice);

const myName = "Masha Tverdokhlibova";
let nameLength = myName.length;
let budget = nameLength * 100;
console.log(`ваш бюджет ${budget} грн`);

let availableGames = games.filter(game => game.available === true);
let totalCost = 0;
availableGames.forEach(game => {
    totalCost += game.price;
});
console.log("Доступні ігри:", availableGames);
console.log(`Загальна вартість доступних ігор: ${totalCost} грн`);

if (totalCost > budget) {
    alert("Загальна вартість перевищує ваш бюджет")
} else {
    let remaining = budget - totalCost;
    alert(`Залищок коштів: ${remaining}`)
}
