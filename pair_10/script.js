// let student = {
//     name: "John Smith",
//     role: "student",
// }
// // DOM
// console.log(student.name);
// console.log(document.body);

// let heading = document.getElementsByTagName('h1'); //зберігають масив
// let headingId = document.getElementById('profile-name'); //звертаються конкретно до одного елемента
// let skills = document.getElementsByClassName('skills'); //зберігають масив

// let skills2 =document.querySelector('.skills'); //звертаються конкретно до одного елемента, кладуть в змінну один елемент
// let skills =document.querySelectorAll('.skills'); //зберігає масив, вибирає одразу всі значення
// for (let skill of skills) {
//     console.log(skill)
// }

let student = {
    name: "Dima Komarov",
    role: "Ведучий світ на виворіт",
    city: "Kyiv",
    portfolio: "https://github.com",
}


let nameElement = document.querySelector("#profile-name");
// nameElement.textContent = "Komarov Ivan"; //замніює текст всередині елемента
let roleElement = document.querySelector(".profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-link");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;

roleElement.innerHTML = '<strong>' + student.role + '</strong>';

portfolioElement.setAttribute('href', student.portfolio);
let skillsElement = document.querySelectorAll(".skills");

let skillsArray = ['HTML', 'CSS', 'Javascript'];
// skillsElement[0].textContent = "HTML";
// skillsElement[1].textContent = "CSS";
// skillsElement[2].textContent = "Javascript";

for (let i = 0; i < skillsArray.length; i++) {
    skillsElement[i].textContent = skillsArray[i];
}
