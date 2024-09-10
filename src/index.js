let container;

// const todoData = [
//   {
//     title: "Practice sax ",
//     descrition: "p",
//     status: "done",
//     date: new Date().toLocaleDateString(),
//   },
//   {
//     title: "go to gym",
//     descrition: "p",
//     status: "doing",
//     date: new Date().toLocaleDateString(),
//   },
//   {
//     title: "go to chopping",
//     descrition: "p",
//     status: "not started",
//     date: new Date().toLocaleDateString(),
//   },
// ];

export function createtodoToTable(todoData) {
  console.log(todoData);
  const container = document.getElementById("container");

  const table = document.createElement("table");
  table.classList.add("table");
  const headerRow = document.createElement("tr");

  const keys = ["Todo", "Description", "Status", "Date", "Update", "Delete"];
  keys.forEach((key) => {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(key));

    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  todoData.forEach((todoObj) => {
    const keys = ["title", "description", "status", "date"];
    const row = document.createElement("tr");
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(todoObj[key]));

      row.appendChild(td);
    });
    const tdbtn = document.createElement("td");
    const updateBtn = document.createElement("button");
    updateBtn.appendChild(document.createTextNode("Update"));
    updateBtn.classList.add("update-btn", "btn");
    updateBtn.addEventListener("click", (event) =>
      updateTodo(event, todoObj.id, todoData)
    );

    tdbtn.appendChild(updateBtn);

    const tdBtnDelete = document.createElement("td");
    const deleteBnt = document.createElement("button");
    deleteBnt.innerText = "Delete";
    deleteBnt.classList.add("delete-btn", "btn");

    tdBtnDelete.appendChild(deleteBnt);

    deleteBnt.addEventListener("click", (event) =>
      deleteTodo(event, todoObj.id, todoData)
    );

    row.append(tdbtn);
    row.append(tdBtnDelete);

    table.appendChild(row);
  });
  console.log("stevenson", container);
  container.appendChild(table);
}

window.addEventListener("DOMContentLoaded", () => {
  // container = document.getElementById("container");
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  createtodoToTable(todos);
});

function updateTodo(event, id, todoArray) {
  const row = event.target.parentNode.parentNode;
  const container = row.parentNode.parentNode.parentNode;
  container.classList.add("hide");

  const containerUpdate = document.getElementById("container-update");
  containerUpdate.style.display = "flex";

  const singleTodo = todoArray.find((todo) => todo.id == id);

  document.getElementById("update-title").value = singleTodo.title;
  document.getElementById("update-descrition").value = singleTodo.description;
  document.getElementById("status-update").value = singleTodo.status;

  const btn = document.getElementById("btn-save-update");
  btn.addEventListener("click", () => saveUpdate(singleTodo, todoArray, row));
}
function saveUpdate(singleTodo, todoArray, target) {
  const title = document.getElementById("update-title").value;
  const desctiption = document.getElementById("update-descrition").value;
  const status = document.getElementById("status-update").value;

  if (title == "" || desctiption == "" || status == "") {
    return;
  }

  singleTodo.title = title;
  singleTodo.description = desctiption;
  singleTodo.status = status;

  target.cells[0].innerHTML = title;
  target.cells[1].innerHTML = desctiption;
  target.cells[2].innerHTML = status;

  const container = target.parentElement.parentElement.parentElement;
  container.classList.remove("hide");

  localStorage.setItem("todos", JSON.stringify(todoArray));

  const containerUpdate = document.getElementById("container-update");
  containerUpdate.style.display = "none";
}

function deleteTodo(event, id, todoArray) {
  const row = event.target.parentElement.parentElement;
  row.parentNode.removeChild(row);

  const filteredArray = todoArray.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(filteredArray));
}
