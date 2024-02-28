document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const addButton = document.querySelector("button");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            listContainer.appendChild(listItem);

            
            const crossSymbol = document.createElement("span");
            crossSymbol.innerHTML = "\u00d7"; 
            crossSymbol.classList.add("cross-symbol");
            listItem.appendChild(crossSymbol);

            inputBox.value = "";
        } else {
            alert("Please enter a task!");
        }
    }

    addButton.addEventListener("click", addTask);

    inputBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    listContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        } else if (event.target.classList.contains("cross-symbol")) {
            event.target.parentElement.remove(); 
        }
    });
});