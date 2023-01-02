// creating variables 
let firstName = 'abdifatah', lastName = 'Mohamaed'

// constants 
const name = 'hamda';

/*  
    Primitive types 
        - string 
        - number 
        - boolean 
        - undefined 
        - null
*/
let fullname = 'Mohamed';
let age = 20;
let isApproved = false;
let lastname = undefined;
let selectedColor = null

/* 
    Reference types 
        - objects 
        - arrays
        - functions
*/

// Dynamic typing 
let test = 'test';
typeof test;
test = 2;
typeof test;

// Objects 
let person = {first: 'ahmed', second: 'mouse'}

// access object properties 
// 1. Dot Notation
person.first

// 2. Bracket Notation
person['first']
person['second']


// Arrays 
let color = ['green', 'white', 'blue', 'red', 2, 2.0, true, false, undefined];
color[0]

// Funcitons
function greet(name) {
    console.log('Hello World!', name);
}
//greet('Mohaemd');

// return values functions
function square(n) {
    return n * n;   
}
square(4);


// Operators 
/*
    - Arithmetic 
    - Assingment
    - Comparison
        - Relational 
        - Equality Operator 
            - Strict Equality operator 
            - Lose equality operator 
    - Logical
    - Ternary
    - Bitwise 
*/

// ternary
let points = 100;
let type = points > 50 ? 'Gold' : 'Silver';

// Truthy and Falsy Values 
/*  
    Falsy Values 
        - undefined 
        - null
        - false 
        - 0
        - ''/empty strign 
        - NaN
 */

// Short-Circuting 
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

// Exercise: Swapping variables 
let a = 'blue';
let b = 'green'; 

let c = a;
a = b;
b = c;





