/*<ul class="tasks">
<li>
  <label for="task-1">Wyrzucić śmieci</label>
  <input type="checkbox" id="task-1" />
</li>
</ul>*/
const inputElement = document.querySelector("#name");
const tasksContainer = document.querySelector(".tasks");
const addButton = document.querySelector("button");
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
    },
    { name: "nakarmić koty", done: true },
    { name: "wyrzucić śmieci", done: false },
];
const render = () => {
    tasksContainer.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
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
