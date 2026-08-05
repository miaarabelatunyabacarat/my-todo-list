const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const listCard = document.getElementById("list-card");
const clearBtn = document.getElementById("clearAll");
const addBtn = document.getElementById("addBtn");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
    alert("todo list saved!");
}
function renderTodos() {
    console.log(todos);
    taskList.innerHTML = "";

    if (todos.length > 0) {
        listCard.classList.add("show");
    } else {
        listCard.classList.remove("show");
    }

    todos.forEach((todo, index) => {
        console.log(todo);
            listCard.classList.add("show");

        const li = document.createElement("li");

        //checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.classList.add("task-text");

        if (todos.completed){
            span.classList.add("completed");
        }

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

        checkbox.addEventListener("change", ()=> {
            todos[index].completed = checkbox.checked;
            saveTodos();
            renderTodos();
        })
        deleteBtn.addEventListener("click", ()=>{
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
    });

        li.append(checkbox, span, deleteBtn);
        taskList.appendChild(li);


        requestAnimationFrame(() => {
            li.classList.add("show");
            
        });

        
        });
}
function addTask() {
    //console.log("Button clicked!");
    const text = taskInput.value.trim();

    
    if (text === "") {
         alert("please add your task");
         return;
    }

    todos.push({
    text: text,
    completed: false
    });

    saveTodos();
    renderTodos();
    taskInput.value = "";
    taskInput.focus();


}

function clearAll(){
    todos = [];
    saveTodos();
    renderTodos();

    listCard.classList.remove("show");
}

taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("clearAll").addEventListener("click", clearAll);
renderTodos();