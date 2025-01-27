const inputField = document.querySelector(".inputField");
const button = document.querySelector(".btn");
const ListItem = document.querySelector(".taskList");

// Function to add items
const addItems = () => {
  const inputValue = inputField.value;

  const taskSpan = document.createElement("span");
  taskSpan.textContent = inputValue;
  const li = document.createElement("li");
  li.appendChild(taskSpan);
  li.style.listStyleType = "none";
  ListItem.appendChild(li);
  inputField.value = "";

  //   To remove task
  const deleteButtton = document.createElement("button");
  deleteButtton.textContent = "Delete";
  deleteButtton.style.marginLeft = "10px";
  li.appendChild(deleteButtton);
  deleteButtton.onclick = function () {
    ListItem.removeChild(li);
  };
  // Edit task..
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.marginLeft = "5px";
  editButton.style.padding = "0px 10px";
  li.appendChild(editButton);
  editButton.onclick = function () {
    inputField.value = inputValue;
  };
  // To mark task completed
  const completedTaskButton = document.createElement("button");
  completedTaskButton.textContent = "Completed";
  completedTaskButton.style.margin = "0px 5px";
  li.appendChild(completedTaskButton);
  completedTaskButton.onclick = function () {
    completedTaskButton.style.backgroundColor = "green";
    completedTaskButton.style.color = "white";
  };
};

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItems();
  }
});
button.addEventListener("click", addItems);
