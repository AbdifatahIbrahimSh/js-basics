// Creating 
let numbers = [1, 2, 3, 4, 5];

// 1. Adding Elements 

// Beginning 
numbers.unshift(0);

// End 
numbers.push(7);

// Middle 
numbers.splice(3, 0, 'middle');

// 2. Finding Elments (primitive)   
numbers.indexOf(4);
numbers.lastIndexOf(2);
numbers.includes(4);

// 3. Finding elements (object)    
let found = numbers.find(function(element) {
    return element > 4;
})

// 4. Arrow Fucntions
let foundIndex = numbers.findIndex((element) => {
    element > 4
})

// 5. Removing Elements 

// End 
numbers.pop();

// Beginning 
numbers.shift();

// Middle 
numbers.splice(3, 1);


// 6. Empting an array

// Reassigning an array 
numbers = [];

// Making length to zero 
numbers.length = 0;

// using pop method 
while (numbers.length < 0) {
    numbers.pop();
}

// using slice method 
numbers.splice(0, numbers.length);

let first = ['red', 'green', 'blue', 'white', 'black'];
let second = ['pink', 'purple', 'orange', 'yellow'];

// 7. Combining Elements 
let combined = first.concat(second);
let combined2 = [...first, ...second];


// 8. Slicing Array
let sliced = combined.slice(0, 5);

// 9. Spread Operator - for copying arrays 
let slicedCopy = [...sliced];

// 10. Iterating Elemetns 

// for of loop 
for (let element of first) {
    //console.log(element);
}

// foreach loop 
first.forEach(function(value, index) {
    //console.log(index, value);
})

// 11. Joining Arrays
let names = ['Mohamed', 'Jama', 'Hoodo', 'Samia'];
let joined = names.join(' ');

// splitting string 
names = joined.split(' ');

// 12. Sorting Arrays (primitives)  nu
numbers = [1, 7, 3, 8, 5];
numbers.sort();
names.sort();

// Sorting of objects 
let users = [
    {username: 'mouse'},
    {username: 'hussein'},
    {username: 'ibrahim'},
    {username: 'coofle'} 
]
// callback function
users.sort(function(a, b) {
    if (a.username < b.username) return -1;
    if (a.username > b.username) return 1;
    return 0;
});


// 13. Testing elements of an array 

// every() - checks if every element in an array matches the condition
let mIncludedName = names.every(function(name) {
    return name.includes('m');
})

// some() - checks if at least one element in an arry matches the condition
let aIncludedName = names.some(function(name) {
    return name.includes('a');
})

// 14. Filtering Array 
let hIncludedNames = names.filter(function(name) {
    return name.toLowerCase().includes('h');
})

// 15. Mapping Array 

// map() - map each element in an array with something else 
let helloMappedNames = names.map(function(name) {
    return 'Hello, ' + name;
})

// 16. Reducing an array 

// reduce() - reduces all values in an array into a single value 
let reducedNames = names.reduce(function(accumulator, currentValue) {
    return accumulator + ' ' + currentValue;
}, '');

// find sum using reducing 
let sum = numbers.reduce(function(a, b) {
    return a + b;
    
}, 0);

// One beautiful exercise 
numbers = [1, 2, 2, 3, 4, 3, 4, 3, 5];

function except(array, excluded) {

    let newArray = [];
    for (let value of array) {
        if (!excluded.includes(value))
            newArray.push(value);
    }

    return newArray;
}













