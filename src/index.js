const title = document.getElementById("title");
const btnSave = document.getElementById("btn-save");
const descrition = document.getElementById("descrition");
const todoItems = document.getElementById("todo-items");

// btnSave.addEventListener("click", handleSubmit);

// function handleSubmit() {
//   let titleValue = title.value;
//   let descritionValue = descrition.value;
// }
const container = document.getElementById("container");

const todoData = [
  {
    title: "Practice sax ",
    status: "done",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "go to gym",
    status: "doing",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "go to chopping",
    status: "not started",
    date: new Date().toLocaleDateString(),
  },
];

function createtodoToTable() {
  const table = document.createElement("table");
  table.classList.add("table");
  const headerRow = document.createElement("tr");

  const keys = ["Todo", "Status", "Date", "Update", "Delete"];
  keys.forEach((key) => {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(key));

    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  todoData.forEach((todoObj) => {
    const row = document.createElement("tr");
    Object.values(todoObj).forEach((value) => {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(value));

      row.appendChild(td);
    });
    const tdbtn = document.createElement("td");
    const updateBtn = document.createElement("button");
    updateBtn.appendChild(document.createTextNode("Update"));
    updateBtn.classList.add("update-btn", "btn");

    tdbtn.appendChild(updateBtn);

    const tdBtnDelete = document.createElement("td");
    const deleteBnt = document.createElement("button");
    deleteBnt.innerText = "Delete";
    deleteBnt.classList.add("delete-btn", "btn");

    tdBtnDelete.appendChild(deleteBnt);

    row.append(tdbtn);
    row.append(tdBtnDelete);

    table.appendChild(row);
  });
  console.log(container);
  container.appendChild(table);
}

window.onload = function () {
  createtodoToTable();
};
