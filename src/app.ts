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
  /*
<li>
  <label for="task-1">Wyrzucić śmieci</label>
  <input type="checkbox" id="task-1" />
</li>
*/
  tasksContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    const labelElement: HTMLLabelElement = document.createElement("label");
    const id: string = `task-${index}`;
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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

const addTask = (task: string) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(inputElement.value);
  render();
});
