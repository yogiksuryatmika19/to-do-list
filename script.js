// membuat display function
function displayTasks() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html +=
            "<li>" +
            tasks[i] +
            "<button onclick='removeTask(" +
            i +
            ")'>x</button></li>";
    }
    document.getElementById("list").innerHTML = html;
}

// membuat function add task
function addTasks() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if (text === "") {
        return;
    }
    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

// membuat function remoove
function removeTask(i) {
    tasks.splice(i, 1);
    saveTask();
    displayTasks();
}

// membuat function save task
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// membuat function load task
function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        tasks = JSON.parse(saved);
    }
}
