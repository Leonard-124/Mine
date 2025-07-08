
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}
