let studentName:String="Laura"
let age:number=21
let isEnrolled:boolean=true
let gpa:number=3.8
 

//ARRAYS
let scores: number[]=[45,23,56,74,51]
let names:Array<string> =["Alice","Bob","Shavia"]

const average=scores.reduce((sum,n)=> sum +n,0)/scores.length
console.log(`Average score:${average}`)

let id:number | string=101  //A variable can be more than one"
id="STU-101"

console.log(`StudentId:${id}`)

//INTERFACES
interface Student{
    id:number
    name:string
    course:string
    gpa:number
    email?:string //The ? makes this field optonal

}

const student1:Student= {
    id:1,
    name:"Daisy",
    course:"Computer Science",
    gpa:3.8,
    email:"shavialaura462@gmail.com"
}

const student2:Student={
    id:2,
    name:"Henny",
    course:"Medicine",
    gpa:4.1
}

console.log(`\nStudent 1:${student1.name}-${student1.course}`)
console.log(`\nStudent 2:${student2.name}-${student2.course}`)

//ALIASES
type Priority="high"|"medium"|"low"
type Status="active"|"inactive"|"suspended"

let taskPriority:Priority="high"

let accountStatus:Status="active"
console.log(`\nPriority:${taskPriority}|Status:${accountStatus}`)

//TYPED FUNCTIONS
function calculateGrade(score:number):string {
    if (score>=70)return "A"
    if(score>=60)return "B"
    if(score>=50)return "C"
    if(score>=40)return "D"
    return "E"
}
console.log(`\nGrade for 85:${calculateGrade(8)}`)
console.log(`Grade for 72:${calculateGrade(72)}`)
console.log(`Grade for 55:${calculateGrade(55)}`)


//GENERICS Works with any type Typescript infers the type automatically

function getFirst<T>(arr:T[]):T{
    return arr[0]
}

const firstScore=getFirst([45,76,89])
const firstName=getFirst(["Alice","Laura"])

console.log(`\nFirst Score :${firstScore}`)
console.log(`First Name: ${firstName}`)

//INTERFACES WITH METHODS
interface Course{
    id:number
    title:string
    credits:number
    getDescription():string
}

const pythonCourse:Course ={
    id:1,
    title:"Introduction to Python",
    credits:3,
    getDescription(){
        return `${this.title}(${this.credits}credits)`
    }
}

console.log(`\nCourse:${pythonCourse.getDescription()}`)

//COCKTAIL
interface Task{
    id:number
    text:string
    priority:Priority
    done:boolean,
    createdAt:Date
}

function createTask(text:string,priority:Priority):Task{
    return{
        id:Date.now(),
        text,
        priority,
        done:false,
        createdAt:new Date()
    }
}

function completeTask(task:Task):Task{
    return {...task,done:true}
}

function filterByPriority(tasks:Task[], priority:Priority):Task[]{
    return tasks.filter(task => task.priority === priority)
}
