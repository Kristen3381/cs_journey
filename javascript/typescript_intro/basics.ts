// ── BASIC TYPES ───────────────────────────────────────
let studentName: string = "Laura"
let age: number = 21
let isEnrolled: boolean = true
let gpa: number = 3.8

console.log(`${studentName} | Age: ${age} | GPA: ${gpa}`)


// ── ARRAYS ────────────────────────────────────────────
let scores: number[] = [85, 92, 78, 95, 88]
let names: Array<string> = ["Alice", "Bob", "Diana"]

const average = scores.reduce((sum, n) => sum + n, 0) / scores.length
console.log(`Average score: ${average}`)


// ── UNION TYPES ───────────────────────────────────────
let id: number | string = 101
id = "STU-101"
console.log(`Student ID: ${id}`)


// ── INTERFACES ────────────────────────────────────────
interface Student {
    id: number
    name: string
    course: string
    gpa: number
    email?: string
}

const student1: Student = {
    id: 1,
    name: "Laura Shavia",
    course: "Computer Science",
    gpa: 3.8,
    email: "laura@techsavanna.com"
}

const student2: Student = {
    id: 2,
    name: "Alice Wanjiru",
    course: "Software Engineering",
    gpa: 3.5
}

console.log(`\nStudent 1: ${student1.name} - ${student1.course}`)
console.log(`Student 2: ${student2.name} - ${student2.course}`)


// ── TYPE ALIASES ──────────────────────────────────────
type Priority = "high" | "medium" | "low"
type Status = "active" | "inactive" | "suspended"

let taskPriority: Priority = "high"
let accountStatus: Status = "active"
console.log(`\nPriority: ${taskPriority} | Status: ${accountStatus}`)


// ── TYPED FUNCTIONS ───────────────────────────────────
function calculateGrade(score: number): string {
    if (score >= 90) return "A"
    if (score >= 80) return "B"
    if (score >= 70) return "C"
    if (score >= 60) return "D"
    return "F"
}

console.log(`\nGrade for 85: ${calculateGrade(85)}`)
console.log(`Grade for 72: ${calculateGrade(72)}`)
console.log(`Grade for 55: ${calculateGrade(55)}`)


// ── GENERICS ──────────────────────────────────────────
function getFirst<T>(arr: T[]): T {
    return arr[0]
}

const firstScore = getFirst([85, 92, 78])
const firstName = getFirst(["Alice", "Bob"])

console.log(`\nFirst score: ${firstScore}`)
console.log(`First name: ${firstName}`)


// ── INTERFACES WITH METHODS ───────────────────────────
interface Course {
    id: number
    title: string
    credits: number
    getDescription(): string
}

const pythonCourse: Course = {
    id: 1,
    title: "Python Programming",
    credits: 3,
    getDescription() {
        return `${this.title} (${this.credits} credits)`
    }
}

console.log(`\nCourse: ${pythonCourse.getDescription()}`)


// ── PUTTING IT ALL TOGETHER ───────────────────────────
interface Task {
    id: number
    text: string
    priority: Priority
    done: boolean
    createdAt: Date
}

function createTask(text: string, priority: Priority): Task {
    return {
        id: Date.now(),
        text,
        priority,
        done: false,
        createdAt: new Date()
    }
}

function completeTask(task: Task): Task {
    return { ...task, done: true }
}

function filterByPriority(tasks: Task[], priority: Priority): Task[] {
    return tasks.filter(task => task.priority === priority)
}

let myTasks: Task[] = [
    createTask("Study TypeScript", "high"),
    createTask("Build React app", "high"),
    createTask("Review notes", "medium"),
    createTask("Take a walk", "low")
]

myTasks[0] = completeTask(myTasks[0])

const highPriorityTasks = filterByPriority(myTasks, "high")

console.log("\n--- Task Manager (TypeScript) ---")
myTasks.forEach(task => {
    const status = task.done ? "✓" : "○"
    console.log(`[${status}] ${task.text} | ${task.priority}`)
})

console.log(`\nHigh priority tasks: ${highPriorityTasks.length}`)
