// ── COUNTER ───────────────────────────────────────────
let count = 0

function changeCount(amount) {
    count += amount
    const counterEl = document.getElementById("counter")
    counterEl.textContent = count

    if (count > 0) counterEl.style.color = "green"
    else if (count < 0) counterEl.style.color = "red"
    else counterEl.style.color = "black"
}

function resetCount() {
    count = 0
    const counterEl = document.getElementById("counter")
    counterEl.textContent = 0
    counterEl.style.color = "black"
}


// ── CHARACTER COUNTER ─────────────────────────────────
function countChars() {
    const input = document.getElementById("textInput")
    const display = document.getElementById("charCount")
    const length = input.value.length

    display.textContent = `${length} / 100 characters`

    if (length > 80) display.style.color = "red"
    else if (length > 60) display.style.color = "orange"
    else display.style.color = "#888"
}


// ── TASK LIST ─────────────────────────────────────────
let tasks = []

function addTask() {
    const input = document.getElementById("taskInput")
    const text = input.value.trim()

    if (!text) {
        alert("Please enter a task!")
        return
    }

    tasks.push({ id: Date.now(), text, done: false })
    input.value = ""
    renderTasks()
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
    )
    renderTasks()
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id)
    renderTasks()
}

function renderTasks() {
    const list = document.getElementById("taskList")

    if (tasks.length === 0) {
        list.innerHTML = "<p style='color:#aaa'>No tasks yet!</p>"
        return
    }

    list.innerHTML = tasks.map(task => `
        <div class="task-item">
            <span 
                class="${task.done ? 'done' : ''}"
                onclick="toggleTask(${task.id})"
                style="cursor:pointer; flex:1"
            >
                ${task.text}
            </span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `).join("")
}

document.getElementById("taskInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask()
})
