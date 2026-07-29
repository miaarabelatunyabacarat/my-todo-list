const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const listCard = document.getElementById("list-card");

function addTask() {
       console.log("Button clicked!");
    const text = taskInput.value.trim();

    if (text === "") {
         alert("please add your task");
         return;
    }
    listCard.classList.add("show");

    const li = document.createElement("li");
    li.textContent = text;

    taskList.appendChild(li);


    requestAnimationFrame(() => {
        li.classList.add("show");
        console.log(listCard.className);
    });

    taskInput.value = "";
    taskInput.focus();
}

function clearAll(){
    taskList.innerHTML = "";


    listCard.classList.remove("show");
}

taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

document.getElementById("addBtn").addEventListener("click", addTask);