let str = 'hello';
console.log(str.charAt(4));     //charAt function is used to find the position of a particular character in a string
console.log(typeof str.charAt);     //function

let str2 = 'world';
console.log(str.charAt == str2.charAt);     //true, as charAt function is not defined seperately for both strings

str.charAt = function() { return 'x' };     //it will work as before ; no change ; as we can't redefine it because of some JS properties


// Where is charAt function actually defined?
//let's find out:

console.log(str.charAt);                        //function
console.log(str.__proto__.charAt);              //function
console.log(str.__proto__.__proto__.charAt);    //undefined 

// therefore it is defined in str.__proto__.charAt 
// now as str.__proto__ is actually equal to String.prototype
console.log(str.__proto__.charAt == String.prototype.charAt);   
// therefore charAt function actually exists at String.prototype.charAt

// now as we have find where charAt exists, we can redefine this function there whichh will change that function for whole program
String.prototype.charAt = function() { return 'x' };
console.log(str.charAt(4));     //now it returns x

// Note: 
// String.prototype contains all default string functions like charAt, substr, indexOf, slice etc.
// Similarly Number.prototype & Boolean.prototype contains all default Number and Boolean functions respectively

let arr = [123,456,789,012];
console.log(arr.join('-'));        //join function joins the array and returns it as a string with mentioned seperation 


// ---- Redefine Join ----
// What if we have a good chunk of code and we have to find where did we perform 'join'? 
Array.prototype.joinOriginal = Array.prototype.join;

Array.prototype.join = function (){
    console.log('join done on', this);
    return this.joinOriginal(...arguments); /* The arguments object is useful for functions called with more arguments 
    than they are formally declared to accept. '...arguments' is useful for functions that can be passed a variable number of arguments */
}
console.log(arr.join());
//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function

/*
 * so what we did here is:
 * Array.prototype contains all array functions including join
 * inside Array.prototype, we created a new function joinOriginal 
 * copied all the properties of join to our self-made joinOriginal function
 * and redefined the join function
 * Now the join function will call joinOriginal (i.e. will perform it's original task)
 * but also it will give us the array we performed join on
*/




