"use strict";
// ── BASIC TYPES ───────────────────────────────────────
let studentName = "Laura";
let age = 21;
let isEnrolled = true;
let gpa = 3.8;
// TypeScript catches type mismatches immediately
// Try uncommenting this — you'll see an error:
// studentName = 42    // Error: Type 'number' is not assignable to type 'string'
console.log(`${studentName} | Age: ${age} | GPA: ${gpa}`);
// ── ARRAYS ────────────────────────────────────────────
// Two ways to type arrays
let scores = [85, 92, 78, 95, 88];
let names = ["Alice", "Bob", "Diana"];
// TypeScript prevents wrong types in arrays
// scores.push("ninety")   // Error: Argument of type 'string' is not assignable
const average = scores.reduce((sum, n) => sum + n, 0) / scores.length;
console.log(`Average score: ${average}`);
// ── UNION TYPES ───────────────────────────────────────
// A variable that can be more than one type
let id = 101;
id = "STU-101"; // also valid — it can be string OR number
// id = true      // Error: boolean not in the union
console.log(`Student ID: ${id}`);
// This works — matches the interface
const student1 = {
    id: 1,
    name: "Laura Shavia",
    course: "Computer Science",
    gpa: 3.8,
    email: "laura@techsavanna.com"
};
// This also works — email is optional
const student2 = {
    id: 2,
    name: "Alice Wanjiru",
    course: "Software Engineering",
    gpa: 3.5
};
// This would fail — missing required fields
// const student3: Student = {
//     id: 3,
//     name: "Bob"
//     // Error: missing 'course' and 'gpa'
// }
console.log(`\nStudent 1: ${student1.name} - ${student1.course}`);
console.log(`Student 2: ${student2.name} - ${student2.course}`);
let taskPriority = "high";
// taskPriority = "urgent"   // Error: not in the union
let accountStatus = "active";
console.log(`\nPriority: ${taskPriority} | Status: ${accountStatus}`);
// ── TYPED FUNCTIONS ───────────────────────────────────
// Specify types for parameters AND return value
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
// Return type is enforced too
// function broken(score: number): string {
//     return 42    // Error: number is not assignable to string
// }
console.log(`\nGrade for 85: ${calculateGrade(85)}`);
console.log(`Grade for 72: ${calculateGrade(72)}`);
console.log(`Grade for 55: ${calculateGrade(55)}`);
// ── GENERICS ──────────────────────────────────────────
// A generic function works with any type
// but stays type-safe
function getFirst(arr) {
    return arr[0];
}
// TypeScript infers the type automatically
const firstScore = getFirst([85, 92, 78]); // T = number
const firstName = getFirst(["Alice", "Bob"]); // T = string
console.log(`\nFirst score: ${firstScore}`); // 85
console.log(`First name: ${firstName}`); // Alice
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
// Build a typed task list
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
