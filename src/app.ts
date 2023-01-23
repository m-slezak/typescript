const inputElement: HTMLInputElement = document.querySelector("#name");
const tasksContainer: HTMLElement = document.querySelector(".tasks");
const addButton: HTMLButtonElement = document.querySelector("button");


type Category =  "work" | "gym" | "hobby" | "general"
interface Task {
  name: string;
  done: boolean;
  category?: Category;
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

  tasksContainer.innerHTML = "";
  tasks.forEach((task, index) => {

    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
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
  const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked)
    const selectedCategory: string = selectedRadioElement.value
  addTask({ name: inputElement.value, done: true, category: selectedCategory });
  render();
});

render();
