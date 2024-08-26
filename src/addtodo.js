import { createtodoToTable } from "./index";

window.addEventListener("load", function () {
  const title = document.getElementById("title");
  const btnSave = document.getElementById("btn-save");
  const descrition = document.getElementById("descrition");
  btnSave.addEventListener("click", handleSubmit, false);

  //   createtodoToTable();
});

function handleSubmit(event) {
  event.preventDefault();
  let todos = [];
  let titleValue = title.value;
  let descritionValue = descrition.value;
  let todoObj = {
    title: titleValue,
    description: descritionValue,
    status: "not started",
    date: new Date().toLocaleDateString(),
  };
  todos.push(todoObj);

  createtodoToTable(todos);
  window.location.href = "/index.html";

  console.log(titleValue);
}
