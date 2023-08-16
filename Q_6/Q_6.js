

// Remove the class "selected" from all list items within an unordered list when a button is clicked.

const listItem = document.getElementsByTagName("li");

for (let list of listItem) {
  list.classList.add("selected");
  
}

const removeClassBtn = document.getElementById("removeClassBtn");

for (let list of listItem) {
  
  removeClassBtn.addEventListener("click", function () {
    list.classList.remove("selected");
  })
  
}

