document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background = "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "#000000";
    document.body.style.fontFamily = "'Poppins', sans-serif";
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskContainer = document.getElementById("task-list");
    const filterSelect = document.getElementById("filter");
    const searchInput = document.getElementById("search");
  
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  
    function renderTasks() {
      taskContainer.innerHTML = "";
      const filteredTasks = taskList.filter(task => {
        if (filterSelect.value === "all") return true;
        if (filterSelect.value === "completed") return task.completed;
        if (filterSelect.value === "upcoming") return !task.completed && new Date(task.dueDate) >= new Date();
        if (filterSelect.value === "overdue") return !task.completed && new Date(task.dueDate) < new Date();
        return true;
      }).filter(task => task.title.toLowerCase().includes(searchInput.value.toLowerCase()));
  
      filteredTasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.style.background = "rgba(0, 100, 255, 0.3)";
        taskItem.style.padding = "15px";
        taskItem.style.borderRadius = "10px";
        taskItem.style.margin = "10px 0";
        taskItem.style.color = "#fff";
        let priorityEmoji = task.priority === "High" ? "🔥" : task.priority === "Medium" ? "⚡" : "💡";
        let statusEmoji = task.completed ? "✅" : "🕒";
        
        taskItem.innerHTML = `
          <h3>${priorityEmoji} ${task.title} (${task.priority})</h3>
          <p>📝 ${task.description}</p>
          <p>📅 Due: ${task.dueDate}</p>
          <button class="complete-btn" onclick="toggleComplete(${task.id})" style="background:rgb(153, 255, 0); color: black; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">
            ${statusEmoji} ${task.completed ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
          <button class="delete-btn" onclick="deleteTask(${task.id})" style="background:rgb(216, 214, 206); color: black; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">
            ❌ Delete
          </button>
        `;
        taskContainer.appendChild(taskItem);
      });
    }
  
    document.getElementById("add-task-form").style.background = "rgba(0, 100, 255, 0.3)";
    document.getElementById("add-task-form").style.padding = "20px";
    document.getElementById("add-task-form").style.borderRadius = "10px";
  
    document.getElementById("add-task-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("due-date").value;
      const priority = document.getElementById("priority").value;
      
      const newTask = { id: Date.now(), title, description, dueDate, priority, completed: false };
      taskList.push(newTask);
      saveTasks();
      renderTasks();
      e.target.reset();
    });
  
    window.deleteTask = (id) => {
      const index = taskList.findIndex(task => task.id === id);
      if (index > -1) {
        taskList.splice(index, 1);
        saveTasks();
        renderTasks();
      }
    };
  
    window.toggleComplete = (id) => {
      const task = taskList.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
      }
    };
  
    searchInput.style.backgroundColor = "#fff";
    searchInput.style.color = "#000";
    searchInput.style.border = "2px solid #00ffff";
    searchInput.style.padding = "10px";
    searchInput.style.borderRadius = "8px";
    searchInput.style.fontSize = "16px";
    searchInput.style.fontWeight = "bold";
  
    filterSelect.style.backgroundColor = "#fff";
    filterSelect.style.color = "#000";
    filterSelect.style.border = "2px solid #00ffff";
    filterSelect.style.padding = "10px";
    filterSelect.style.borderRadius = "8px";
    filterSelect.style.fontSize = "16px";
    filterSelect.style.fontWeight = "bold";
  
    document.querySelectorAll("input, select, textarea").forEach(el => {
      el.style.backgroundColor = "#fff";
      el.style.color = "#000";
      el.style.border = "1px solid #888";
      el.style.padding = "10px";
      el.style.borderRadius = "5px";
      el.style.fontFamily = "'Poppins', sans-serif";
    });
  
    searchInput.addEventListener("input", renderTasks);
    filterSelect.addEventListener("change", renderTasks);
    renderTasks();
  });
  