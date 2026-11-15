let confirmBtn =document.querySelector("#confirmBtn");
let status = document.querySelector("#status");

confirmBtn.addEventListener("click", function(){
    status.textContent = "Ви зареєструвалися!";
    confirmBtn.textContent = "Профіль налаштовано";
    status.classList.add("success");
})
let userName = document.querySelector("#userName");
let welcome = document.querySelector("#welcome");

userName.addEventListener("input", function() {
    let name = userName.value.trim();
    if (name === "") {
        welcome.textContent = "Привіт, користувачу!";
    } else {
        welcome.textContent = "Привіт, " + name + "!";
    }
});
confirmBtn.addEventListener("click", function(){
    let name = userName.value.trim();
    if (name === "") {
        status.textContent = "Будь ласка, введіть ім'я!";
        status.classList.remove("success");
    }
    else {
        status.textContent = "Ім'я успішно підтверджено!";
        status.classList.add("success");
        confirm.textContent = "Підтверджено";
    }
});


let theme = document.querySelector("#themeSelect");
let card = document.querySelector("#card");
theme.addEventListener("change", function() {
    if (theme.value === "dark") {
        card.classList.add("dark");
    }
    else {
        card.classList.toggle("dark");
    }
});

let detailsBtn = document.querySelector("#detailsBtn");
let details = document.querySelector("#details");
detailsBtn.addEventListener("click", function(){
    details.classList.toggle("hidden");
    if(details.classList.contains("hidden")){
        detailsBtn.textContent = "Показати додаткову інформацію"
    }
    else{
        detailsBtn.textContent = "Приховати додаткову інформацію";
    }
})
