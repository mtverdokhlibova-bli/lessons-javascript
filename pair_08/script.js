// let languages = ["Python", "JavaScript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
//
// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// } //виведення всіх елементів списку через цикл


// function getSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// let numbers = [10, 15, 25, 47]
// console.log(getSum(numbers));


// let name = [];
// name.push("Ivan");
// name.push("Anton"); //додає елементи в кінець списку
// name.pop() //видаляє останній елемент із послідовності
// name.unshift("Anton2"); //додає елементи на початок
// name.shift() //видаляє елемент на початку списку
// console.log(name.slice(0, 1)) //робить зріз
//
// console.log(name);


// let color = ["red", "green", "blue", "yellow", "brown", "white", "black"];
// // color.splice(0, 1, "pink"); // перезаписуємо елемент
// let deleted = color.splice(4, 2)
// color.splice(2, 0, 'pink')
// console.log(color)



// function registerNames(name) {
//     if (name.trim() === "" ) {     //trim видаляє зліва і справа всі пробіли
//         alert("Please enter a name");
//         return
//     }
//     let duplicateName = false;
//     for (i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === name) {
//             duplicateName = true;
//         }
//     }
//     if (duplicateName){
//         alert("Учасник зареєстрований")
//     } else {
//         eventNames.push(name);
//         alert(`Учасник ${name} зареєстрований`)
//     }
// }
// function removeName(name){
//     let index = -1;  //такого імені нема
//     for (i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("Такого учасника немає")
//     } else {
//         eventNames.splice(index, 1);
//         alert(`Учасник ${name} видалений `)
//     }
// }
// function printCount(){
//     alert(`Всього учасників ${eventNames.length}`)
// }
// let eventNames = ["Ivan", "Olha", "Oleh", "Mariia", "Stepan", "Yehor"]
//
// registerNames("Olha")
// removeName("Olha")
// printCount()



let eventNames = ["Ivan", "Olha", "Oleh", "Mariia", "Stepan", "Yehor"]
// for(let i = 0; i < eventNames.length; i++){
//     console.log(`${eventNames[i]}`);
// }

// for (let name of eventNames) {
//     console.log(`${name}`);
// }

eventNames.forEach(function (name, index) {
    console.log(name);
    console.log(index);
}) //функція виконується над кожним елементом
