let inputBox = document.querySelector(".input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Please Enter You Task");
    }
    else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.textContent);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

