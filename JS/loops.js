/**
    JS Loops
        -- allows us to repeat a set of instructions multiple times;
        -- used to repeatedly execute a block of code until a specific condition is met

 */


/**
    FOR Loop
    
    Syntax:
        for( [initialization] ; [condition] ; [arithmetic expression] ) {
            //code that will be executed as long as the condition is true
        }
 */
        console.log(' === FOR Loop === ');

        for(let x = 0; x < 5; x++) {
            console.log(x);
        }

        /**
    WHILE Loop

    Syntax:
        while(condition) {
            // code block 
        }
 */
console.log(' === WHILE Loop === ');

let count = 0;
while(count < 5) {
    count++;
    console.log(count);
}

/**
    DO-WHILE Loop

    Syntax:
        do {
            //code block/statement
        } while (condition) 
 */
        console.log(' === DO...WHILE Loop === ');

        let j = 1;
        
        do {
            console.log('Do-while: ', j);
            j++;
        } while ( j <= 5);