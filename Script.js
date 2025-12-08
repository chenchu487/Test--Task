// To - Do App : 


const todoInput = document.querySelector('.To-do-Input');
const todoAddButton = document.querySelector('.To-do-Add-Button');
const todoList = document.querySelector('.To-do-List');

// Add Task

function addTask() {
    if (todoInput.value === "") {
        alert("You have To add task first!")

    } else {
        let taskText = document.createElement('li');
        taskText.classList.add("To-do-Item");
        taskText.innerHTML = `${todoInput.value} <span class="delete-btn">×</span>`;


        taskText.addEventListener("click", () => {
            taskText.classList.toggle("Checked");


        });

        taskText.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            taskText.remove();
        });



        todoList.appendChild(taskText);
        todoInput.value = "";

    }

}

todoAddButton.addEventListener("click", () => {
    addTask();
});


// Clear Tasks 

function clearAllTasks() {

    if (todoList.innerHTML === "") {
        alert("The list is already empty!");
        return;
    }

    let getUser = confirm("Are you sure you want to clear all tasks?");

    if (getUser) {
        todoList.innerHTML = "";
    }
}


clearButton.addEventListener("click", clearAllTasks);