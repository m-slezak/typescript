/*<ul class="tasks">
<li>
  <label for="task-1">Wyrzucić śmieci</label>
  <input type="checkbox" id="task-1" />
</li>
</ul>*/
const inputElement = document.querySelector("#name");
const tasksContainer = document.querySelector(".tasks");
const addButton = document.querySelector("button");
const tasks = ["Wyrzucić śmieci", "nakarmić koty", "wyrzucić śmieci"];
const render = () => {
    tasksContainer.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainer.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(inputElement.value);
    render();
});
