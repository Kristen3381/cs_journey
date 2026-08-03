// ── STATE ─────────────────────────────────────────────
// All app data lives here
let tasks = []
let currentFilter = "all"

// ── LOCALSTORAGE ──────────────────────────────────────
// Save tasks to browser storage so they survive page refresh

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks() {
    const saved = localStorage.getItem("tasks")
    tasks = saved ? JSON.parse(saved) : []
}

// ── ADD TASK ──────────────────────────────────────────
function addTask() {
    const input = document.getElementById("taskInput")
    const prioritySelect = document.getElementById("prioritySelect")

    const text = input.value.trim()
    const priority = prioritySelect.value

    if (!text) {
        input.style.borderColor = "red"
        setTimeout(() => input.style.borderColor = "#e0e0e0", 1000)
        return
    }

    const task = {
        id: Date.now(),
        text,
        priority,
        done: false,
        createdAt: new Date().toLocaleDateString("en-KE", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        })
    }

    tasks.unshift(task)    // add to beginning, not end
    saveTasks()

    input.value = ""
    input.focus()          // keep cursor in input box

    render()
}

// ── TOGGLE DONE ───────────────────────────────────────
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
    )
    saveTasks()
    render()
}

// ── DELETE TASK ───────────────────────────────────────
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id)
    saveTasks()
    render()
}

// ── CLEAR COMPLETED ───────────────────────────────────
function clearCompleted() {
    const completedCount = tasks.filter(t => t.done).length
    if (completedCount === 0) {
        alert("No completed tasks to clear!")
        return
    }
    if (confirm(`Delete ${completedCount} completed task(s)?`)) {
        tasks = tasks.filter(task => !task.done)
        saveTasks()
        render()
    }
}

// ── FILTER ────────────────────────────────────────────
function setFilter(filter, btn) {
    currentFilter = filter

    // Update active button styling
    document.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.remove("active")
    })
    btn.classList.add("active")

    render()
}

function getFilteredTasks() {
    if (currentFilter === "active") return tasks.filter(t => !t.done)
    if (currentFilter === "done") return tasks.filter(t => t.done)
    return tasks
}

// ── UPDATE STATS ──────────────────────────────────────
function updateStats() {
    const total = tasks.length
    const done = tasks.filter(t => t.done).length
    const active = total - done

    document.getElementById("totalCount").textContent = total
    document.getElementById("activeCount").textContent = active
    document.getElementById("doneCount").textContent = done
}

// ── RENDER ────────────────────────────────────────────
function render() {
    const list = document.getElementById("taskList")
    const filtered = getFilteredTasks()

    updateStats()

    if (filtered.length === 0) {
        const messages = {
            all: { emoji: "🎉", text: "No tasks yet! Add one above." },
            active: { emoji: "✅", text: "All tasks completed!" },
            done: { emoji: "📋", text: "No completed tasks yet." }
        }
        const msg = messages[currentFilter]
        list.innerHTML = `
            <div class="empty-state">
                <div class="emoji">${msg.emoji}</div>
                <p>${msg.text}</p>
            </div>
        `
        return
    }

    list.innerHTML = filtered.map(task => `
        <div class="task-item ${task.done ? 'done' : ''}">
            <input 
                type="checkbox" 
                ${task.done ? 'checked' : ''}
                onchange="toggleTask(${task.id})"
            >
            <div style="flex:1">
                <div class="task-text">${task.text}</div>
                <div style="font-size:11px; color:#aaa; margin-top:2px">
                    ${task.createdAt}
                </div>
            </div>
            <span class="task-priority priority-${task.priority}">
                ${task.priority}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">
                ✕
            </button>
        </div>
    `).join("")
}

// ── ENTER KEY ─────────────────────────────────────────
document.getElementById("taskInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask()
})

// ── INIT ──────────────────────────────────────────────
// Run when page loads
loadTasks()
render()
