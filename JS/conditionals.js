/**
  Conditional Statements 
    -- allow us to make decisions based on certain conditions
 */

    console.log(' === Conditional Statements === ');

    console.log('//==  if...else ');
    // if..else --> allows you to create a program that runs only if a specific condition is met
    let age = 17;
    if (age >= 18) {
        console.log('You can now vote.');
    } else {
        console.log("You can't vote");
    }
    
    console.log('//==  nested if...else ');
    let temp = 19;
    
    if(temp < 0) {
        console.log("It is freezing.");
    } else if (temp >= 0 && temp < 20) {
        console.log("It is a cool day.");
    } else {
        console.log("It is a warm day.")
    }

    console.log('//==  Switch...Case');
/**
    Switch..case --> allows you to control the execution flow of your code

    3 keywords: 
        case : keyword for starting a case block
        break : keyword for stopping the switch statement from running the next code
        default : keyword for running a code when there's no matching case found
 */

    let day = 'Wednesday';
    
    switch(day) {
        case 'Monday' :
            console.log('It is the start of the week.');
            break;
        case 'Friday' :
            console.log('It is the end of the week.');
            break;
        default :
            console.log('It is a regular day.');
            break;
    }

    let num = 7;
    switch(num) {
        case 1:
            console.log('This is number one.');
            break;
        case 2:
            console.log('This is number two.');
            break;
        case 5:
            console.log('This is number five.');
            break;
        default:
            console.log('This is number seven.');
            break;
    }