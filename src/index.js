const title = document.getElementById("title");
const btnSave = document.getElementById("btn-save");
const descrition = document.getElementById("descrition");
const todoItems = document.getElementById("todo-items");

// btnSave.addEventListener("click", handleSubmit);

// function handleSubmit() {
//   let titleValue = title.value;
//   let descritionValue = descrition.value;
// }

function addtoToTable() {
  const todos = ` 
          <tr>
            <th>Todo</th>
            <th>Status</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>

          <tr>
            <td>practice saxohone</td>
            <td><span class="status">done</span></td>
            <td>12/08/2024</td>
            <td><button class="update-btn btn">Update</button></td>
            <td><button class="delete-btn btn">Delete</button></td>
          </tr>
          <tr>
            <td>practice saxohone</td>
            <td>done</td>
            <td>12/08/2024</td>
            <td>update button</td>
            <td>Delete</td>
          </tr>`;

  const tableElement = document.getElementById("table");

  tableElement.innerHTML = todos;
  console.log(tableElement);
}

window.onload = function () {
  addtoToTable();
};
