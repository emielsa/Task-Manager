document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const toggleThemeButton = document.getElementById('toggle-theme');
    let isDarkMode = false;
  
    // Add Task
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskInput = document.getElementById('task-input').value;
      const priority = document.getElementById('priority').value;
  
      const taskItem = document.createElement('li');
      taskItem.className = `task ${priority}`;
      taskItem.innerHTML = `
        <span>${taskInput}</span>
        <button class="delete-task">❌</button>
      `;
      taskList.appendChild(taskItem);
  
      // Clear input field
      taskForm.reset();
    });
  
    // Delete Task
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) {
        e.target.parentElement.remove();
      }
    });
  
    // Toggle Theme
    toggleThemeButton.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      document.body.classList.toggle('dark-mode', isDarkMode);
      toggleThemeButton.textContent = isDarkMode ? '☀️' : '🌙';
    });
  });
  