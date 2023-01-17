const inputElement: HTMLInputElement = document.querySelector("#name");
const tasksContainer: HTMLElement = document.querySelector(".tasks");
const addButton: HTMLButtonElement = document.querySelector("button");

interface Task {
  name: string;
  done: boolean;
  category?: string;
}
const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: false,
    category: "general",
  },
  { name: "nakarmić koty", done: true },
  { name: "pojsc na silke", done: false, category: "gym" },
];
const categories: string[] = ["general", "work", "gym", "hobby"];

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

const addTask = (task: Task) => {
  tasks.push(task);
};

addButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ name: inputElement.value, done: true });
  render();
});

render();
