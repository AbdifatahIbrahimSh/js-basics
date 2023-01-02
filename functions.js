// Hoisting : is the process of moving fucntion declartions to the top of the page
//compute(3, 5);

// Fucntion Declaration 
function compute(a, b) {
    console.log(a + b);
}

// Calling a fucntion 
//compute(1, 3, 4);

// Anonmyous Fucntion Expression
let fn = function(a, b) {
    console.log(a + b);
}

// Named Fucntion Expression 
let fcn = function compute(a, b) {
    console.log(a + b);
}

// Arguments - Each function in js has an object called arguments 
function calculateSum() {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
    }
    
    console.log(total, arguments);

}

// Rest Operator - for creating variable length argument list in js
function sum(...args) {
    let sum = 0;
    for (let value in args) {
        sum += args[value];
    }

    console.log(sum); // you can also return it
}

// Default Parameters 
function getUserName(name = 'Mohamed') {
    //let name = name || 'Mohamed' // old way of using default parameters 
    console.log('Welcome, ', name);
}

// Getters and Setters 
var person = {
    firstname: 'Mohamed', 
    lastname: 'Nour',

    // readonly method
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    },
    // Setter 
    set fullName(value) {
        if (value.length > 5) {
            let parts = value.split(' ');
            this.firstname = parts[0];
            this.lastname = parts[1];
        }  
    }
}

// Try Catch block
function divide(a, b) {
    if (b === 0)
        throw Error('Zero cannot be divided by a number');
    return a / b;
}

try {
    //console.log(divide(1, 0));
}
catch(e) {
    //console.log(e.message);
    //alert(e.message);
}

// Local vs Global Variables 
/* 
    let and const - are block scope 
    var - has fucntion scope 

    Global variables : variables that are defined outsie of fucntion are called global variables

    let vs var 
        - var has a fucntion scope while let has a block scope 
        - global variables defined by a var are attached to the global object (window);
*/

// This 
    /* 
        this: references the object that is exectuting the current fucntion

        we can change this in three ways 
            1. using self
            2. using bind method 
            3. using arrow fucntions 
    */

function greet(name, email) {
    return this;
}

greet.call({name: 'mohamed'}, 'Jama', 'email@gmail.com');
greet.apply({name: 'ahmed'}, ['Nour', 'nour@gmail.com']);
greet.bind({name: 'Hamda'}, 'Hamda', 'hamda@gmail.com')() ;

let circle = {
    radius: 1,

    area() {
        console.log(this);
    }
}

// Immediately Invoked Function Expresssions  (IIFE)
let welcome = (function getMyName() {
    console.log('Hi, Welcome to open hands.');
}());
