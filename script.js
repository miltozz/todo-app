(function todo() {
  const addTasks = document.querySelector(".add-tasks");
  const tasksList = document.querySelector(".tasks");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function populate() {
    tasksList.innerHTML = tasks
      .map(task => {
        let status = task.done ? "done" : " ";
        return `
        <li>
        <label class=${status}>${task.text}</label>
        <span class="del">x</span>
        </li>`;
      })
      .join("");
  }

  function addTask(e) {
    e.preventDefault();
    const taskText = this.querySelector("[type=text]").value;
    const task = {
      text: taskText,
      done: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    populate();
    this.reset();
  }

  function handleClick(e) {
    if (!e.target.matches("span") && !e.target.matches("label")) {
      return;
    }

    if (e.target.classList.contains("del")) {
      let labelText = e.target.previousElementSibling.innerHTML;
      let index = false;

      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].text === labelText) {
          index = i;
        }
      }

      tasks.splice(index, 1);
      populate();
    }

    if (e.target.matches("label")) {
      e.target.classList.toggle("done");
      let labelText = e.target.innerHTML;

      tasks.forEach(task => {
        if (task.text === labelText) {
          task.done = !task.done;
        }
      });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function hideFooter(e) {
    if (!e.target.matches("footer")) {
      return;
    }

    e.target.style.display = "none";
  }

  addTasks.addEventListener("submit", addTask);
  tasksList.addEventListener("click", handleClick);
  document.querySelector(".footer").addEventListener("click", hideFooter);

  populate();
})();
