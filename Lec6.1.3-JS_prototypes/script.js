/* 
All JavaScript objects inherit properties and methods from a prototype:

-> Date objects inherit from Date.prototype
-> Array objects inherit from Array.prototype
-> Person objects inherit from Person.prototype

The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype
*/


let str = "abcd";        //proto 3 levels from null
let num = 123;           //proto 3 levels from null
let bool = true;         //proto 3 levels from null
function fun() {  console.log('this is a function')  };   //proto 3 levels from null
let arr = [1,2,3,4];     //proto 3 levels from null
let obj = {              //proto 2 levels from null
    a:100,
    b:200,
    color:"red",
}

// if x and y are not primitive
// x == y : true <- what does this mean?
// this means that they are reference to the same object in memory
 
console.log("========== types ==========");

console.log('typeof String :', typeof String);     //function that can create strings;
//String('abc') -> 'abc' ; String(234) -> "234"
console.log('typeof Boolean :', typeof Boolean);   //function that can create Boolean;
//Boolean() -> false ; Boolean(0) -> false ; Boolean(1) -> true ; even true odd false
console.log('typeof Number :', typeof Number);     //function that can create Number;
//Number('abc') -> NaN ; Number('123') -> 123
console.log('typeof Array :', typeof Array);       //function that can create Array;
//Array() -> [] ; Array(1,2,3) -> [1,2,3] ; Array(5) -> Empty Array with length 5
console.log('typeof Object :', typeof Object);     //function that can create Object;
//Object() -> object created ; Object('x', 'y') ->  String {"x"} 
console.log('typeof Function :', typeof Function); //function that can create Function;
//Function() -> anonymous function created ; Function('s') -> No effect of parameters ; let f = Function() -> f is now a function

console.log("========== proto chain ==========");

console.log('str.__proto__.__proto__ == obj.__proto__ :', str.__proto__.__proto__ == obj.__proto__);
console.log('num.__proto__.__proto__ == obj.__proto__ :', num.__proto__.__proto__ == obj.__proto__);
console.log('bool.__proto__.__proto__ == obj.__proto__ :', bool.__proto__.__proto__ == obj.__proto__);
console.log('fun.__proto__.__proto__ == obj.__proto__ :', fun.__proto__.__proto__ == obj.__proto__);
console.log('arr.__proto__.__proto__ == obj.__proto__ :', arr.__proto__.__proto__ == obj.__proto__);
// everything indirectly inherits from the same thing that obj is inherited from
// i.e in Javascript, everything is essentially an Object
// obj.__proto__.__proto__ is inherited from null therefore this is the origin of inheritance

console.log("========== prototypes ==========");

//proto is hidden whereas Prototype is not an hidden field
//__proto__ is a hidden pointer which point to the predefined prototypes in JS ; These prototypes are predefined in JS and everything is inherited from it
//These functions are special as every proto is inherited from this special function prototypes
console.log(obj.__proto__  ==  Object.prototype);     //true
console.log(obj.__proto__  ==  Object.prototype);     //true
console.log(str.__proto__  ==  String.prototype);     //true
console.log(num.__proto__  ==  Number.prototype);     //true
console.log(bool.__proto__ ==  Boolean.prototype);   //true
console.log(arr.__proto__  ==  Array.prototype);      //true
console.log(fun.__proto__  ==  Function.prototype);   //true

console.log('typeof Object.create(Boolean.prototype):', typeof Object.create(Boolean.prototype));
let x = Object.create(Boolean.prototype);
console.log('bool.__proto__ == x.__proto__:', bool.__proto__ == x.__proto__);
//they both are inherited from Boolean.prototype but this is not necessary that they will be of same type
console.log('typeof x == typeof bool :', typeof x == typeof bool);       //false
console.log('typeof x: ', typeof x);
console.log('typeof bool: ', typeof bool);

