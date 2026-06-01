const STORAGE_KEY = "task-planner-items-v1";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const stats = document.querySelector("#task-stats");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedButton = document.querySelector("#clear-completed");

let tasks = loadTasks();
let filter = "all";

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now(),
  });

  input.value = "";
  saveAndRender();
});

list.addEventListener("click", (event) => {
  const target = event.target;
  const item = target.closest("[data-task-id]");
  if (!item) {
    return;
  }

  const taskId = item.dataset.taskId;
  const task = tasks.find((entry) => entry.id === taskId);
  if (!task) {
    return;
  }

  if (target.matches("input[type='checkbox']")) {
    task.completed = target.checked;
    saveAndRender();
    return;
  }

  if (target.matches(".delete-btn")) {
    tasks = tasks.filter((entry) => entry.id !== taskId);
    saveAndRender();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    render();
  });
});

clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveAndRender();
});

function render() {
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  list.innerHTML = "";
  visibleTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item${task.completed ? " completed" : ""}`;
    li.dataset.taskId = task.id;

    li.innerHTML = `
      <input type="checkbox" aria-label="Toggle task complete" ${task.completed ? "checked" : ""} />
      <span class="task-text"></span>
      <button type="button" class="delete-btn">Delete</button>
    `;

    li.querySelector(".task-text").textContent = task.text;
    list.appendChild(li);
  });

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  const completed = tasks.filter((task) => task.completed).length;
  stats.textContent = `${tasks.length} total, ${completed} completed`;
  emptyState.hidden = visibleTasks.length > 0;
}

function saveAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  render();
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter(
          (entry) =>
            typeof entry?.id === "string" &&
            typeof entry?.text === "string" &&
            typeof entry?.completed === "boolean"
        )
      : [];
  } catch (_error) {
    return [];
  }
}
