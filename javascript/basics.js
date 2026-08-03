// Variables
var oldWay="Old way avoid this"
let age=21
const name="Laura"

console.log(name,age)

// Data Types
let number=22
let decimal=3.14
let text="Hello Ya'll"
let isStudent=true
let nothing=null
let notDefined=undefined

console.log(typeof number)
console.log(typeof decimal)
console.log(typeof text)
console.log(typeof isStudent)
console.log(typeof nothing)
console.log(typeof notDefined)

//template literals
const city="Nairobi"
const company="TechSavanna"
console.log(`I am studying at ${company} in ${city}`)

const message=`
Name: ${name}
Age: ${age}
City: ${city}
`
console.log(message)

// Arrow functions
     //Old Way
     function greetOld(name){
        return `Hello ${name}!`
     }

    // New way
    const greet=(name=>`Hello ${name}!`)

    const double=n=>n*2// One parameter brackets are optional

    const multiply=(a,b)=>{
        const result =a*b
        return result
    }

    console.log(greetOld("Alice"))
    console.log(greet("Bob"))
    console.log(double(9))
    console.log(multiply(7,8))


    //Array destructuring
    const colors=["Red","Pink","Purple"]
    const[first,second,third]=colors
    console.log(first,second,third)
    
    //Object destructuring
    const student={
        name:"Laura",
        age:21,
        course:"Computer Science"
    }
    const{name:studentName,age:studentAge,course}=student
    console.log(studentName,studentAge,course)

    //Expand an array or object
    const nums1=[1,2,3]
    const nums2=[4,5,6]
    const combined=[...nums1,...nums2]
    console.log(combined)

    //Spread with objects
    const baseStudent={name:"Laura",age:21}
    const fullStudent={...baseStudent,course:"CS",gpa:3.8}
    console.log(fullStudent)

    //Collect remaining arguments
    const sum=(...numbers)=>{
        return numbers.reduce ((total,n)=>total+n,0)
    }
    console.log(sum(1,2,3,4,5))
    console.log(sum(10,20))






