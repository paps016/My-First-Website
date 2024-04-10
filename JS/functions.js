/**
    FUNCTIONS
        -- written to perform specific task;
        -- can be reused whenever needed

    Syntax:
        'function' keyword <function_name> (parameter/s) {
            < code block >
        }
    
    to call a function: 
        <function_name> ( argument )

 */

        function greet() {
            console.log('Hello World!');
        }
        
        greet();
        
        //function parameters and arguments
        function greeting(name) {
            console.log('Hi I am ' + name);
        }
        
        greeting('Joseph');
        
        //return statement
        function add( num1, num2) {
            return num1 + num2;
        }
        
        let sum = add(3, 5);
        console.log(sum);
        
        function fullName(fName, lName) {
            console.log('Full Name: ' + fName + ' ' + lName);
        }
        
        fullName('John', 'Doe');

        //Function expression
let square = function(x) {
    return x * x;
}

console.log(square(4));
console.log(square(8));

// == VARIABLE SCOPE == //

/**
 * Global Scope -- variables are accessible anywhere in your code
 */

let globalVar = 'I am a global variable';

// function accessVar() {
//     console.log('Global Var: ', globalVar);
// }

// accessVar();

/**
 * Local Scope -- variables are only accessible within a function or block
 */


function accessVar() {
    let localVar = 'I am a local variable.';

    console.log('Local Var: ', localVar);
    console.log('Global Var: ', globalVar);
}

accessVar();

// console.log(localVar);
console.log(globalVar);

// == NESTED FUNCTIONS == //
function outerFunction () {
    let outerVar = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction();
}

outerFunction();

// == MODERN JS == //

//Arrow functions -- allow you to write JS functions w/ a shorter, more concise syntax 

const greetings = () => { 
    console.log('Nice to meet you!'); 
} 

//arrow function with 1 parameter
const sayHello = firstName => console.log('Hello' + firstName);
sayHello('Jane'); 

//arrow function w/ 2 parameters
const prod = (a,b) => a * b;

//arrow function with multiple lines of code nad has no parameter
const intro = () => {
    let name = 'Mary';
    let age = 25;

    return 'Hi! This is ' + name + ". I am " + age + " years old." 
}

console.log(intro());

//Template Literals -- allow for more readable and flexible string formatting
let fname = 'John'; 
let age = 30;

console.log('Hi! This is ' + fname + ". I am " + age + " years old.") ;
console.log(`Hi! This is ${fname}. I am ${age} years old.`);

//Multi-line string
const multiLine = ` 
    This is a multiline string.
    It allows you to break lines 
    without using concatenation.
` ;

console.log(multiLine);

//expression interpolation
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}`;

console.log(result);