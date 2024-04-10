//object person
let person = {

    //add properties to the object
    firstName : 'Joseph',
    lastName : 'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

    //add method to the object
    greet: function() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    }

}

//Accessing object properties
console.log(person.firstName);
console.log(person.age);
console.log(person['lastName']);

//Modify object properties
person.lastName = 'Smith';
console.log(person.lastName);

//access the object method
person.greet();

//Add a new property to the object
person.nationality = 'American';
console.log(person.nationality);

//Add a new method to the object
person.introduce = function() {
    console.log(`I am ${this.firstName}. I am ${this.age} years old.`)
}

person.introduce();

console.log(person);