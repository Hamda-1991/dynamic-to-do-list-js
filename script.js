document.addEventListener('DOMContentLoaded', function() {
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get the task text and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the task text

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Button text
        removeButton.className = 'remove-btn'; // Add a class for styling

        // Add event listener to remove task when button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the list item
        };

        // Append the button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
