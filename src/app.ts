/*<ul class="tasks">
<li>
  <label for="task-1">Wyrzucić śmieci</label>
  <input type="checkbox" id="task-1" />
</li>
</ul>*/

const inputElement: HTMLInputElement = document.querySelector("#name");
const tasksContainer: HTMLElement = document.querySelector(".tasks");
const addButton: HTMLButtonElement = document.querySelector("button");

const tasks: string[] = ["Wyrzucić śmieci", "nakarmić koty", "wyrzucić śmieci"];

const render = () => {
  tasksContainer.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainer.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(inputElement.value);
  render();
});
