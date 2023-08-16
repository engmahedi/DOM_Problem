

// Change the text content of a button when it's clicked.

const myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function () {
  
  if (myButton.textContent == "Click Me") {
    myButton.textContent = "I am Clicked"
  } else {
    myButton.textContent = "Click Me"
  }
})

