// if else statements 
// let hour = 20;
// if (hour >= 6 && hour < 12)
//     console.log('Goood morning');
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon')
// else 
//     console.log('Good evening');

// switch and case 
// let role = 'guest';
// switch(role) {
//     case 'guest': 
//         console.log('guest user');
//         break;
    
//     case 'admin': 
//         console.log('admin user');
//         break;
    
//     default: 
//         console.log('anonymous user');
// }

// Loops 
/*
    - for loop 
    - while loop 
    - do-while loop
    - for in loop 
    - for of loop     
*/

// for loop 
// for (let i = 0; i < 10; i++) {
//     //if (i % 2 === 0)
//        // console.log(i);
// }

// while loop 
// let i = 0; 
// while (i < 10) {
//     if (i % 2 === 0)
//        // console.log(i);
//     i++;
// }

//do-while loop 
// let x = 0;
// do {
//     if (x % 2 === 0)
//         //console.log(x);
//     i++;
// }while(x < 10);

// for in loop - for iterating property names 
let person = {first: 'ahmed', second: 'hussein'};

// for (let propertyName in person) 
//     console.log(propertyName);


// for of loop - iterates iterable propery valvues 
let chances = ['good', 'lucky', 'beaury'];
// for (let propertyValue of chances) 
//     console.log(propertyValue);

// Exercies 

// 1. fizzBuzz function

function fizzBuzz(number) {

    if (typeof number === 'number') {
        if (number % 3 === 0 && number % 5 === 0)
            return 'fizzBuzz';
        else if (number % 5 == 0)
            return 'Buzz';
        else (number % 3 === 0)
            return 'fizz';
    }
    else 
        return 'not a number';
    
}

console.log(fizzBuzz(15));