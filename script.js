document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get the task text and trim any leading/trailing whitespace
        const taskText = taskInput.value.trim();

        // Check if the task text is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;  // Stop the function if the input is empty
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the task text in the list item

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.className = 'remove-btn'; // Add a class for styling

        // Add event listener to the remove button to delete the task
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem); // Remove the task when the button is clicked
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item (task) to the task list (ul)
        taskList.appendChild(listItem);

        // Clear the task input field after adding the task
        taskInput.value = '';
    }

    // Add an event listener to the "Add Task" button to add tasks when clicked
    addButton.addEventListener('click', addTask);

    // Allow users to add tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {  // Check if the "Enter" key was pressed
            addTask();  // Call the addTask function when "Enter" is pressed
        }
    });
});
