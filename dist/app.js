const inputElement = document.querySelector("#name");
const tasksContainer = document.querySelector(".tasks");
const addButton = document.querySelector("button");
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "general",
    },
    { name: "nakarmić koty", done: true },
    { name: "pojsc na silke", done: false, category: "gym" },
];
const categories = ["general", "work", "gym", "hobby"];
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
    addTask({ name: inputElement.value, done: true });
    render();
});
render();
