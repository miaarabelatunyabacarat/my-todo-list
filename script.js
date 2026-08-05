const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const listCard = document.getElementById("list-card");
const clearBtn = document.getElementById("clearAll");
const addBtn = document.getElementById("addBtn");

function addTask() {
    //console.log("Button clicked!");
    const text = taskInput.value.trim();

    if (text === "") {
         alert("please add your task");
         return;
    }
    listCard.classList.add("show");

    const li = document.createElement("li");


    //checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("task-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times";
    deleteBtn.classList.add("delete-btn");

    checkbox.addEventListener("change", ()=> {
        if (checkbox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed")
        }
    });

    deleteBtn.addEventListener("click", ()=>{
        li.style.opacity = "0";
        li.style.transform = "translateX(30px)";

        setTimeout(() => {
            li.remove();

            if (taskList.children.length === 0) {
                listCard.classList.remove("show");
            }
        }, 250);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

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
document.getElementById("clearAll").addEventListener("click", clearAll);