// ── ENUMS ─────────────────────────────────────────────
// An enum is a set of named constants
// Better than plain strings for fixed sets of values

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}

let move: Direction = Direction.Up
console.log(`Moving: ${move}`)

let httpStatus: HttpStatus = HttpStatus.OK
console.log(`Status: ${httpStatus}`)

function handleResponse(status: HttpStatus): string {
    if (status === HttpStatus.OK) return "Success!"
    if (status === HttpStatus.NotFound) return "Page not found."
    if (status === HttpStatus.Unauthorized) return "Please log in."
    return "Something went wrong."
}

console.log(handleResponse(HttpStatus.OK))
console.log(handleResponse(HttpStatus.NotFound))
console.log(handleResponse(HttpStatus.Unauthorized))


// ── TYPE NARROWING ────────────────────────────────────
// TypeScript can figure out what type something is

// inside an if block — called "narrowing"

function processInput(input: string | number): string {
    if (typeof input === "string") {
        // TypeScript KNOWS input is a string here
        return `Text: ${input.toUpperCase()}`
    } else {
        // TypeScript KNOWS input is a number here
        return `Number: ${input.toFixed(2)}`
    }
}

console.log(`\n${processInput("hello")}`)
console.log(processInput(3.14159))


// ── UTILITY TYPES ─────────────────────────────────────
// TypeScript has built-in types that transform other types

interface User {
    id: number
    name: string
    email: string
    password: string
    role: "admin" | "user" | "guest"
}

// Partial<T> — makes ALL fields optional
// Useful for update operations where you only change some fields
type UserUpdate = Partial<User>

const update: UserUpdate = {
    name: "Laura Shavia Updated"
    // don't need to include id, email etc
}
console.log("\nPartial update:", update)


// Pick<T, Keys> — pick only specific fields
// Useful for API responses where you don't want to expose everything
type PublicUser = Pick<User, "id" | "name" | "role">

const publicProfile: PublicUser = {
    id: 1,
    name: "Laura",
    role: "admin"
    // no password or email exposed!
}
console.log("Public profile:", publicProfile)


// Omit<T, Keys> — remove specific fields
// Useful for removing sensitive data
type SafeUser = Omit<User, "password">

const safeUser: SafeUser = {
    id: 1,
    name: "Laura",
    email: "laura@techsavanna.com",
    role: "admin"
    // password field doesn't exist on this type
}
console.log("Safe user:", safeUser)


// Required<T> — makes ALL fields required (opposite of Partial)
interface Config {
    host?: string
    port?: number
    debug?: boolean
}

type StrictConfig = Required<Config>

const config: StrictConfig = {
    host: "localhost",
    port: 3000,
    debug: false
    // all three are now REQUIRED — TypeScript errors if any missing
}
console.log("Config:", config)


// ── CLASSES WITH TYPES ────────────────────────────────
class BankAccount {
    private balance: number      // only accessible inside this class
    public owner: string         // accessible anywhere
    readonly id: string          // can never be changed after creation

    constructor(owner: string, initialBalance: number) {
        this.owner = owner
        this.balance = initialBalance
        this.id = `ACC-${Date.now()}`
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Amount must be positive")
        this.balance += amount
        console.log(`Deposited ${amount}. Balance: ${this.balance}`)
    }

    withdraw(amount: number): void {
        if (amount > this.balance) throw new Error("Insufficient funds")
        this.balance -= amount
        console.log(`Withdrew ${amount}. Balance: ${this.balance}`)
    }

    getBalance(): number {
        return this.balance
    }
}

class SavingsAccount extends BankAccount {
    private interestRate: number

    constructor(owner: string, balance: number, interestRate: number) {
        super(owner, balance)
        this.interestRate = interestRate
    }

    addInterest(): void {
        const interest = this.getBalance() * this.interestRate
        this.deposit(interest)
        console.log(`Interest added: ${interest}`)
    }
}

console.log("\n--- Typed Bank Accounts ---")
const account = new BankAccount("Laura", 5000)
account.deposit(1000)
account.withdraw(500)
console.log(`Final balance: ${account.getBalance()}`)

const savings = new SavingsAccount("Laura", 10000, 0.05)
savings.addInterest()


// ── ASYNC WITH TYPES ──────────────────────────────────
interface ApiResponse<T> {
    data: T
    status: number
    message: string
}

interface WeatherData {
    city: string
    temperature: number
    humidity: number
    description: string
}

async function fetchWeather(city: string): Promise<ApiResponse<WeatherData>> {
    // Simulating an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    city,
                    temperature: 24,
                    humidity: 65,
                    description: "Partly cloudy"
                },
                status: 200,
                message: "Success"
            })
        }, 500)
    })
}

async function main() {
    console.log("\n--- Typed Async API Call ---")
    const response = await fetchWeather("Nairobi")
    console.log(`City: ${response.data.city}`)
    console.log(`Temperature: ${response.data.temperature}°C`)
    console.log(`Humidity: ${response.data.humidity}%`)
    console.log(`Conditions: ${response.data.description}`)
    console.log(`API Status: ${response.status}`)
}

main()
