/**
    Arrays 
        -- can hold more than one value at a time
        -- enclosed in [ ], separated by commas

        index -- where each item[element] is stored
            -- always starts at index 0
 */

            let fruits = ['Apple' , 'Banana' , 'Orange'];

            //empty array
            let emptyArray = [ ];
            
            //array of mixed values
            let mixedArray = ['Bird' , true, 12, 3.5];
            
            console.log(fruits);
            console.log(mixedArray);
            
            console.log(fruits[0], fruits[1]);

    // == Modifying Array elements ==//

//updating index
fruits[1] = 'Grapes';
console.log('Updated index[1]: ', fruits[1]);

//push() -- add one or more elements at the end of an array
fruits.push('Lemon');
console.log('using push(): ', fruits);

//pop() -- removed the last element of an array
fruits.pop();
console.log('using pop(): ', fruits);

//shift() -- removed the first element of an array
fruits.shift();
console.log('using shift(): ', fruits);

//unshift() -- add items in front of an array
fruits.unshift('Corn');
console.log('using unshift(): ', fruits);

//length -- used to get the size of an array
let numberOfFruits = fruits.length;
console.log('Fruits array length: ', numberOfFruits);

console.log('Fruits array length: ', fruits.length);

//indexOf -- used to find and return the index of an item in an array
let indexx = fruits.indexOf('Grapes');
console.log('Grapes is at index: ', indexx);

//looping thru array

let fruits2 = ['Coconut', 'Strawberry', 'Blueberry', 'Raspberry'];

//for loop
for (let i = 0; i < fruits2.length; i++ ) {
    console.log('for loop: ', fruits2[i]);
}

//forEach
fruits.forEach(function(fruit2) {
    console.log('forEach loop: ', fruits2);
})