/**
 * JS OPERATORS
 *      -- enables us to perform various actions, calculations and comparisons
 */


/**
    Arithmetic Operator
        ( + ), ( - ), ( * ), ( / ), ( % )
 */

        console.log(" -- Arithmetic Operators -- ");

        let num1 = 21;
        let num2 = 10;
        
        //Addition
        let sum = num1 + num2;
        console.log('Sum is: ', sum);
        
        //Subtraction
        let diff = num1 - num2;
        console.log('Difference is: ', diff);
        
        //Multiplication
        let product = num1 * num2;
        console.log('Product is: ', product);
        
        //Division
        let quotient = num1 / num2;
        console.log('Quotient is: ', quotient);
        
        //Modulo
        let mod = num1 % num2;
        console.log('Remainder is: ', mod);
        
        //Exponent
        let exp = 5 ** 5;
        console.log('Exponent : ', exp); // 5^5 = 3125

        /*
    Assignment Operators
        ( = ), ( += ), ( -= ), ( *= ), ( /* )
*/

console.log(" -- Assignment Operators -- ");

//Equals [ = ]
let equals = 'this value';
console.log(equals);

let a = 5;

//Addition Assignment ( += )
a += 5; // a = a + 5 --> a = 5 + 5 --> a = 10
console.log(a); //10

//Subtraction Assignment ( -= )
a -= 5; // a = a - 5 --> a = 10 - 5 --> a = 5
console.log(a); //5

//Multiplication Assignment ( *= )
a *= 5; 
console.log(a); //25

//Division Assignment ( /= )
a /= 5; 
console.log(a); //5

/**
    Comparison Operators
        -- returns Boolean Values ( True or False)

        Greater than ( > )
        Less than ( < )
        Greater than or equal to ( >= )
        Less than or equal to ( <= )
        Equal to ( == ) --> loose equality; checks if 2 values are equal, regardless of data type
        Strict Equal ( === ) --> checks not just the value, but also the data type
        Not Equal to ( != )
 */

        console.log(" -- Comparison Operators -- ");

        console.log( 9 < 10); //t
        console.log( 10 > 20); //f
        console.log( 15 <= 30); //t
        console.log( 15 >= 30); //f
        console.log( '5' == 5); //t
        console.log( '5' === 5); //f
        console.log( 9 != 20); //t


        /**
    Logical Operators 
        -- combine boolean values and logical operators to evaluate conditions

        AND [ && ] --> returns true of both conditions are true 
        OR [ || ] --> returns true if at least one of the conditions is true
        NOT [ ! ] --> reverses the boolean value
 */

console.log(" -- Logical Operators -- ");  

//AND [ && ]
console.log('AND [ && ]: ', true && true);

//OR [ || ]
console.log('OR [ || ]: ', true || false);

//NOT [ ! ]
console.log('NOT [ ! ]: ', !false);


/*
    Unary Operator
        increment ( ++ )
        decrement ( -- )
*/

console.log(" -- Unary Operators -- ");  

let x = 10;

x++; //x + 1 --> 10 + 1 --> x = 11
console.log(x);

x--;// x - 1 --> 11 - 1 --> x = 10
console.log(x);

/**
    Ternary Operator
        -- takes 3 operands, and returns a value based on a condition
        -- shorthand version of if-else statement

    Syntax: 
        condition ? expressionIfTrue : expressionIfFalse;
 */
        console.log(" -- Ternary Operators -- ");  

        let age = 20;
        
        let message = 
            (age >= 20) ? 'You are of legal age.' : 'You are a minor.' ;
        
        console.log(message);