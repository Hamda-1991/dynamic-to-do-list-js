document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  // Get tasks from Local Storage or use an empty array if no tasks are found
        storedTasks.forEach(taskText => addTask(taskText, false));  // Add each stored task to the DOM without saving it again to Local Storage
    }

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        // Ensure the task text is not empty
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;  // Set the task text in the list item

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';  // Set button text
        removeButton.className = 'remove-btn';  // Add a class for styling

        // Add event listener to the remove button to delete the task
        removeButton.addEventListener('click', function() {
            removeTask(listItem, taskText);  // Call removeTask when button is clicked
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item (task) to the task list (ul)
        taskList.appendChild(listItem);

        // Save the task to Local Storage if the 'save' flag is true (when tasks are not being loaded from storage)
        if (save) {
            saveTask(taskText);
        }

        // Clear the task input field after adding the task
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  // Get the current tasks from Local Storage
        storedTasks.push(taskText);  // Add the new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks));  // Save the updated tasks array to Local Storage
    }

    // Function to remove a task from the DOM and Local Storage
    function removeTask(listItem, taskText) {
        taskList.removeChild(listItem);  // Remove the task from the DOM

        // Update the tasks array in Local Storage
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);  // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks));  // Save the updated array to Local Storage
    }

    // Add an event listener to the "Add Task" button to add tasks when clicked
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();  // Get the input value and trim it
        addTask(taskText);  // Add the task to the list and save it
    });

    // Allow users to add tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {  // Check if the "Enter" key was pressed
            const taskText = taskInput.value.trim();  // Get the input value and trim it
            addTask(taskText);  // Add the task to the list and save it
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
