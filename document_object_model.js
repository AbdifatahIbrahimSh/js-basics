 /* 
    DOCUMENT OBJECT MDOEL(DOM): is a model(collection of object) creates by the browser whenever it loads a webpage 
    
    Dom consists of 
        - Document Node
        - Element Node 
        - Text Node 
        - Attribute Node 
*/

// 1. Accessing Dom tree
// Indivitual elements 
document.getElementById('id');
document.querySelector('class');

// Multiple
document.getElementsByClassName('class');
document.getElementsByTagName('h1');
document.querySelectorAll('class');

// Traversing the Dom
document.getElementById('id').parentNode;
document.getElementById('id').previousSibling;
document.getElementById('id').nextSibling;
document.getElementById('id').firstChild;
document.getElementById('id').lastChild;

// 2. Access and Update text nodes 
//document.getElementById('id').firstChild.nodeValue = 'Huda';

// Catching queries 
let found = document.getElementById('id').firstChild.nodeValue;

// Accessing multiple elements 
let classElements = document.getElementsByClassName('class');

let selectedElement = classElements[0] || classElements.items(0);

for (let element of classElements)
    document.write(element);

 // live nodelists vs static nodelists 
    // The methods beginning getEl ementsBy_ return live node list
    // the methods begining query_ return static nodelist


// Updating and modify dom tree 

/*
    - nodeValue - for text only
    - innerText - for text only
    - innerHTML
    - textContent - for text only
*/

let createdElement = document.createElement('h1');
let createdText = document.createTextNode('Welocme');
createdElement.appendChild(createdText);

document.querySelector('body').appendChild(createdElement);


