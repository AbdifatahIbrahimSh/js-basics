// object literal syntax 
let user = {
    firstNmae: 'abdifatah',
    lastName: 'ibrahim', 
    userName: 'coofle', 
    passwords: ['coofle coofle', 'hoodo hoodo'],
    login: function() {
        console.log('login');
    }, 
    logout: function() {
        console.log('logout');
    }
};

user.constructor // Object

// access its properties 
user.userName;
//user.logout();

// Factory Function
function createUser(userName, password) {
   return {
        userName, 
        password,
        login() {
            console.log('login');
        }, 
        logout() {
            console.log('logout');
        },
    };
}

// creating an object 
let user1 = createUser('coofle', 'coofle coofle');
user1.constructor // Object 

// Constructor Function
function CreateUser(userName, password) {

    this.username = userName, 
    this.password = password,
    this.login = function() {
        console.log('login');
    }, 
    this.logout = function() {
        console.log('logout');
    }
}

let user2 = new CreateUser('coofle', 'coofle coofle');
user2.login();

// Dynamic nature of objects 
user2.firstName = 'abdifatah';
user2.signUp = function() {
    console.log('sign up');
}

user2.signUp();
console.log(user2.firstName);

// Functions are objects 
createUser.name;
createUser.length;
createUser.constructor;

// Value types and Reference Types 

/* 
    Value types 
        - number 
        - string 
        - boolean 
        - symbol
        - undefined 
        - null
 */

// Value types : are copied by thier values 
// Reference types : are copies by thier references

// Value types 
let x = 20;
let y = x;
x = 10;

// Reference types 
let m = {value: 20};
let n = m;
n.value = 44;

// Enumerating properties of an object 

// for in loop 
for (let key in user) {
    console.log(key, user[key]);
}

// for of loop 
for (let key of Object.keys(user)) {
    console.log(key, user[key]);
}

// checking if a property is in a an object 
if ('userName' in user) console.log('yes');

// Cloning an object 

// 1. Copy all properties 
let anotherUser = {};

for (let key in user) {
    anotherUser[key] = user[key];
}

// 2. Using assign method in Object
let customUser = Object.assign({}, user);

// 3. Using Spread Operator 
let clonedUser = { ...user};


// Math Class
let ran = Math.floor(Math.random() * 8 + 1);
console.log(ran);

// String Class 

// 1. String primitive 
let message = 'hi';

// 2. String Object 
let oMessage = new String('hi');

// Template Literals 
let guest = 'John';
let email = `
Hi ${guest}, 

Please come to us tomorrow, we'are having a dinner.

Regards,
Mosh`;
console.log(email);

// Date Class 
let date = new Date();





