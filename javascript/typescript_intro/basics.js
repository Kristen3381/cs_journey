"use strict";
// ── BASIC TYPES ───────────────────────────────────────
let studentName = "Laura";
let age = 21;
let isEnrolled = true;
let gpa = 3.8;
console.log(`${studentName} | Age: ${age} | GPA: ${gpa}`);
// ── ARRAYS ────────────────────────────────────────────
let scores = [85, 92, 78, 95, 88];
let names = ["Alice", "Bob", "Diana"];
const average = scores.reduce((sum, n) => sum + n, 0) / scores.length;
console.log(`Average score: ${average}`);
// ── UNION TYPES ───────────────────────────────────────
let id = 101;
id = "STU-101";
console.log(`Student ID: ${id}`);
const student1 = {
    id: 1,
    name: "Laura Shavia",
    course: "Computer Science",
    gpa: 3.8,
    email: "laura@techsavanna.com"
};
const student2 = {
    id: 2,
    name: "Alice Wanjiru",
    course: "Software Engineering",
    gpa: 3.5
};
console.log(`\nStudent 1: ${student1.name} - ${student1.course}`);
console.log(`Student 2: ${student2.name} - ${student2.course}`);
let taskPriority = "high";
let accountStatus = "active";
console.log(`\nPriority: ${taskPriority} | Status: ${accountStatus}`);
// ── TYPED FUNCTIONS ───────────────────────────────────
function calculateGrade(score) {
    if (score >= 90)
        return "A";
    if (score >= 80)
        return "B";
    if (score >= 70)
        return "C";
    if (score >= 60)
        return "D";
    return "F";
}
console.log(`\nGrade for 85: ${calculateGrade(85)}`);
console.log(`Grade for 72: ${calculateGrade(72)}`);
console.log(`Grade for 55: ${calculateGrade(55)}`);
// ── GENERICS ──────────────────────────────────────────
function getFirst(arr) {
    return arr[0];
}
const firstScore = getFirst([85, 92, 78]);
const firstName = getFirst(["Alice", "Bob"]);
console.log(`\nFirst score: ${firstScore}`);
console.log(`First name: ${firstName}`);
const pythonCourse = {
    id: 1,
    title: "Python Programming",
    credits: 3,
    getDescription() {
        return `${this.title} (${this.credits} credits)`;
    }
};
console.log(`\nCourse: ${pythonCourse.getDescription()}`);
function createTask(text, priority) {
    return {
        id: Date.now(),
        text,
        priority,
        done: false,
        createdAt: new Date()
    };
}
function completeTask(task) {
    return { ...task, done: true };
}
function filterByPriority(tasks, priority) {
    return tasks.filter(task => task.priority === priority);
}
let myTasks = [
    createTask("Study TypeScript", "high"),
    createTask("Build React app", "high"),
    createTask("Review notes", "medium"),
    createTask("Take a walk", "low")
];
myTasks[0] = completeTask(myTasks[0]);
const highPriorityTasks = filterByPriority(myTasks, "high");
console.log("\n--- Task Manager (TypeScript) ---");
myTasks.forEach(task => {
    const status = task.done ? "✓" : "○";
    console.log(`[${status}] ${task.text} | ${task.priority}`);
});
console.log(`\nHigh priority tasks: ${highPriorityTasks.length}`);
