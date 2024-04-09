/**
    JS Expressions
        -- applications of JS Operators
 */

console.log(" -- Arithmetic Expression -- ");

let result = 5 + 3 * 2; //PEMDAS
console.log(result); // 11

console.log(" -- String Expression -- ");
// [ + ] --> string concatenation operator

console.log('Hi! This is ' + 'Alice!');

let str = "Hello" + ' ' + "Alice!";
console.log(str);

console.log(" -- Logical Expression -- ")
let  a = 7;
let b = 5;

console.log((a > 5) && (b > 10)); // (7 > 5) && (5 > 10) --> true && false


let isSunny = true;
let isWarm = false;

let picnicPlan = isSunny || isWarm;
console.log(picnicPlan);

// ===
console.log(" -- Assignment Expression -- ")
//Arithmetic + Setting a variable's value

let x = 10;
let y = 5;

x = x + y; //updates the value of x by adding y
console.log(x);

// ===
console.log(" -- Function Call Expression -- ");

//Function Definition
function greet(name) {
    return 'Hi! I am ' + name + "!";
}

//Function Call
let intro = greet('Joseph');
console.log(intro);