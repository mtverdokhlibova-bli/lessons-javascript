let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput");
let addButton = document.querySelector("#addButton");
let totalCounter = document.querySelector("#totalCounter");
let confirmedCounter = document.querySelector("#confirmedCounter");
let emptyText = document.querySelector("#emptyText");
let requestList = document.querySelector("#requestList");
let clearButton = document.querySelector("#clearButton");

function updateCounter(){
    let total = requestList.querySelectorAll("li").length;
    let confirmed = requestList.querySelectorAll("li.confirmed").length;
    totalCounter.textContent = total;
    confirmedCounter.textContent = confirmed;

    if (total === 0) {
        emptyText.style.display = "block";
    } else {
        emptyText.style.display = "none";
    }
}

function addRequest() {
    let name = nameInput.value.trim();
    let eventName = eventInput.value.trim();

    if (name === "" || eventName === "") {
        alert("Заповніть обидва поля");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("request");

    let info = document.createElement("div");
    info.classList.add("request-info");

    let nameText = document.createElement("strong");
    nameText.textContent = name;

    let eventText = document.createElement("p");
    eventText.textContent = eventName;

    let status = document.createElement("span");
    status.classList.add("status");
    status.textContent = "Очікує";

    info.append(nameText, eventText, status);

    let confirmButton = document.createElement("button");
    confirmButton.textContent = "Підтвердити";
    confirmButton.addEventListener("click", () => {
        li.classList.toggle("confirmed");
        if (li.classList.contains("confirmed")) {
            status.textContent = "Підтверджено";
        } else {
            status.textContent = "Очікує";
        }
        updateCounter();
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Видалити";
    deleteButton.addEventListener("click", () => {
        li.remove();
        updateCounter();
    });

    li.append(info, confirmButton, deleteButton);
    requestList.append(li);
    updateCounter();

    nameInput.value = "";
    eventInput.value = "";
}

function clearAll() {
    let answer = confirm("Очистити всі заявки?");
    if (answer) {
        requestList.textContent = "";
        updateCounter();
    }
}

addButton.addEventListener("click", addRequest);
clearButton.addEventListener("click", clearAll);
updateCounter();