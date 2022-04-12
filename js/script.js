const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

let toDoData;
toDoData = JSON.parse(localStorage.getItem("toDoData"));
console.log(toDoData);

if (toDoData === null) {
  toDoData = [];
  const render = function () {
    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";

    toDoData.forEach(function (item, index) {
      const li = document.createElement("li");

      li.classList.add("todo-item");

      li.innerHTML =
        '<span class="text-todo">' +
        item.text +
        "</span>" +
        "<div class='todo-buttons'>" +
        "<button class='todo-remove'></button>" +
        "<button class='todo-complete'></button>" +
        "</div>";

      if (item.completed) {
        todoCompleted.append(li);
      } else {
        todoList.append(li);
      }

      li.querySelector(".todo-complete").addEventListener("click", function () {
        item.completed = !item.completed;
        localStorage.setItem("toDoData", JSON.stringify(toDoData));

        render();
      });

      li.querySelector(".todo-remove").addEventListener("click", function () {
        toDoData.splice(index, 1);
        localStorage.setItem("toDoData", JSON.stringify(toDoData));
        //localStorage.removeItem(toDoData[index]);

        render();
      });
    });
  };

  todoControl.addEventListener("submit", function (event) {
    event.preventDefault();

    if (headerInput.value.trim() === "") {
      alert("введи название");
    } else {
      const newToDo = {
        text: headerInput.value,
        completed: false,
      };
      console.log(newToDo);

      toDoData.push(newToDo);

      localStorage.setItem("toDoData", JSON.stringify(toDoData));

      headerInput.value = "";

      render();
    }
  });
} else {
  const render = function () {
    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";

    toDoData.forEach(function (item, index) {
      const li = document.createElement("li");

      li.classList.add("todo-item");

      li.innerHTML =
        '<span class="text-todo">' +
        item.text +
        "</span>" +
        "<div class='todo-buttons'>" +
        "<button class='todo-remove'></button>" +
        "<button class='todo-complete'></button>" +
        "</div>";

      if (item.completed) {
        todoCompleted.append(li);
      } else {
        todoList.append(li);
      }

      li.querySelector(".todo-complete").addEventListener("click", function () {
        item.completed = !item.completed;
        localStorage.setItem("toDoData", JSON.stringify(toDoData));

        render();
      });

      li.querySelector(".todo-remove").addEventListener("click", function () {
        toDoData.splice(index, 1);
        localStorage.setItem("toDoData", JSON.stringify(toDoData));
        //localStorage.removeItem(toDoData[index]);

        render();
      });
    });
  };

  todoControl.addEventListener("submit", function (event) {
    event.preventDefault();

    if (headerInput.value.trim() === "") {
      alert("введи название");
    } else {
      const newToDo = {
        text: headerInput.value,
        completed: false,
      };
      console.log(newToDo);

      toDoData.push(newToDo);
      console.log(" проверка ");

      localStorage.setItem("toDoData", JSON.stringify(toDoData));

      headerInput.value = "";

      render();
    }
  });
  render();
}
