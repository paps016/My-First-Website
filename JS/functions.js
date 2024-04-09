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