document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskTextSpan.className = 'task-text';
        taskItem.appendChild(taskTextSpan);

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '✓';
        completeBtn.addEventListener('click', () => {
            taskTextSpan.classList.toggle('completed');
        });
        taskActions.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '✎';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskTextSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskTextSpan.textContent = newTaskText.trim();
            }
        });
        taskActions.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✗';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskActions.appendChild(deleteBtn);

        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}