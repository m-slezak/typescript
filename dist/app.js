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
    /*
  <li>
    <label for="task-1">Wyrzucić śmieci</label>
    <input type="checkbox" id="task-1" />
  </li>
  */
    tasksContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const labelElement = document.createElement("label");
        const id = `task-${index}`;
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
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
