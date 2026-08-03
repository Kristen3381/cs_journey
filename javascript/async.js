// ── PART 1: CALLBACKS (old way - avoid) ──────────────
// A callback is a function passed to another function
// to be called when async work is done

console.log("=== PART 1: Callbacks ===")

function fetchData(callback) {
    console.log("Fetching data...")
    setTimeout(() => {
        // setTimeout simulates waiting for a server response
        // after 1 second, call the callback with the result
        callback("Data received!")
    }, 1000)
}

fetchData((result) => {
    console.log(result)
})

console.log("This runs BEFORE the data arrives!")

// Output order:
// "Fetching data..."
// "This runs BEFORE the data arrives!"  ← JS didn't wait!
// "Data received!"  ← arrives 1 second later


// ── PART 2: PROMISES (better way) ────────────────────
console.log("\n=== PART 2: Promises ===")

// A Promise is an object that represents a future value
// It can be in one of three states:
// - pending   (still working)
// - fulfilled (success - .then() fires)
// - rejected  (error - .catch() fires)

function fetchStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = {
                1: { name: "Laura", gpa: 3.8 },
                2: { name: "Alice", gpa: 3.5 },
                3: { name: "Diana", gpa: 3.9 }
            }

            const student = students[id]

            if (student) {
                resolve(student)      // success!
            } else {
                reject(`Student ${id} not found`)   // failure!
            }
        }, 500)
    })
}

// Using the promise with .then() and .catch()
fetchStudent(1)
    .then(student => {
        console.log("Found student:", student)
        return fetchStudent(2)      // chain another promise
    })
    .then(student => {
        console.log("Found student:", student)
        return fetchStudent(99)     // this one will fail
    })
    .catch(error => {
        console.log("Error:", error)
    })


// ── PART 3: ASYNC/AWAIT (modern way - use this) ──────
console.log("\n=== PART 3: Async/Await ===")

// async/await is just cleaner syntax for promises
// Under the hood it's still promises - just easier to read

async function getStudents() {
    try {
        const student1 = await fetchStudent(1)
        console.log("Student 1:", student1)

        const student2 = await fetchStudent(2)
        console.log("Student 2:", student2)

        const student3 = await fetchStudent(99)   // will fail
        console.log("Student 3:", student3)

    } catch (error) {
        console.log("Caught error:", error)
    }
}

getStudents()


// ── PART 4: FETCH API (real world use) ───────────────
console.log("\n=== PART 4: Fetch API ===")

// fetch() is built into browsers to make HTTP requests
// In Node.js (terminal), it's available from Node 18+
// Let's call a real public API

async function getPublicData() {
    try {
        console.log("Calling public API...")

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        )

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        console.log("User from API:")
        console.log(`  Name: ${data.name}`)
        console.log(`  Email: ${data.email}`)
        console.log(`  City: ${data.address.city}`)
        console.log(`  Company: ${data.company.name}`)

    } catch (error) {
        console.log("Fetch failed:", error.message)
    }
}

getPublicData()