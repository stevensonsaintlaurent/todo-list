const title = document.getElementById("title");
const btnSave = document.getElementById("btn-save");
const descrition = document.getElementById("descrition");
const todoItems = document.getElementById("todo-items");
console.log(todoItems);

btnSave.addEventListener("click", handleSubmit);

function handleSubmit() {
  let titleValue = title.value;
  let descritionValue = descrition.value;

  //   addtoToTable();
}

const todos = ` 
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

todoItems.outerHTML = todos;
