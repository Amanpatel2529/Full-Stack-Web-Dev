/*
 * JS classes introduced in ECMAScript2015, are primarily syntactical sugar over JS's existing prototype-based inheritance
 * The class does not introduce a new object-oriented inheritance model to JS
 * In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.
*/

//syntax of class
class person{
    constructor(name, age){     //constructor is used to define initial properties for the new object that will be creating through this class
        this.name = name;       //'this' is a keyword used for reference to the object that is executing this peice of code ; this points at runtime ; it is dynamic
        this.age = age;     //age property to an empty object (for now)
    }                       //creating function insude a class ; no need to declare a function 
    isAdult(){                      //syntax for a function inside a class
        return this.age >= 18;      //this function and constructor is stored in person.prototype
    }
}

let person2 = new person('John', 22);       //new keyword is used to create a new object of that class
let person3 = new person('Deff', 15);

console.log(person);
console.log(person2);
console.log(typeof person);     //it comes out to be function as there is not class datatype
console.log(typeof person2);    //object

console.log('Is', person2.name , 'an adult ? His age is', person2.age, ':' , person2.isAdult());     //true ; age greater than 18
console.log('Is', person3.name , 'an adult ? His age is', person3.age, ':' , person3.isAdult());     //false ; age less than 18


console.log('person2.__proto__ == person.prototype :', person2.__proto__ == person.prototype);     //true ; person2.__proto__ will inherit from person.prototype
console.log('person2.__proto__.__proto__ == Object.prototype :', person2.__proto__.__proto__ == Object.prototype);     //true ; person2.__proto__.__proto__ will inherit from Object.prototype



// extends keyword is used to create a subclass inside an existing class like Student inside Person here:

class student extends person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
}

let s1 = new student('Kendrick', 22, 'A');
console.log(s1);
let s2 = new student('Cole', 22, 'A');
console.log(s2);

//inheritance chain:
//* Object.prototype -> person.prototype -> student.prototype

console.log(s1.__proto__ == student.prototype);                     //true
console.log(s1.__proto__.__proto__ == person.prototype);             //true
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype);    //true
console.log('typeof Object : ', typeof Object);      //function
console.log('typeof person : ', typeof person);      //function
console.log('typeof student : ', typeof student);    //function
console.log('typeof s1 : ', typeof s1);              //object

