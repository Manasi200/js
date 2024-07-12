//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// symbols are mostly used in react

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
// all of these are of OBJECT data type.

const heros = ["superman", "batman", "spiderman"];
let myObj = {
    name: "manasi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3