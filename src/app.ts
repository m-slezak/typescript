/*<ul class="tasks">
<li>
  <label for="task-1">Wyrzucić śmieci</label>
  <input type="checkbox" id="task-1" />
</li>
</ul>*/

const inputElement: HTMLInputElement = document.querySelector("#name");
const tasksContainer: HTMLElement = document.querySelector(".tasks");
const addButton: HTMLButtonElement = document.querySelector("button");

const tasks: {
  name: string;
  done: boolean;
}[] = [
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
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task.name;
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
