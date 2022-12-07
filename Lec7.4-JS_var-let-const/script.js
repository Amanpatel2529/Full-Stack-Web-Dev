/**
 ** var declarations are globally scoped or function scoped
 ** let and const are block scoped
 ** var variables can be updated and re-declared within its scope
 ** let variables can be updated but not re-declared
 ** const variables can neither be updated nor re-declared
*/

var a = 5;
a++;
console.log(a); //value of a get incremented and a gets printed

let b = 6;
b++;
console.log(b); //value of a get incremented and a gets printed

//in case of const, value can't be changed
// const c = 7;
// c++;
// console.log(c); //error

// creating object using const
const obj = {
    p1: "Blue",
    p2: 123,
}
console.log(obj.p1);    //blue
obj.p1 = "Black";       
console.log(obj.p1);    //value gets changed
obj.p3 = false;
console.log(obj.p3);    //value gets added to the object
delete obj.p2;
console.log(obj.p2);    //value is deleted therefore undefined

//const does not make the whole variable immutable but we cannot assign that variable to some other object
//i.e. that const variable cannot be put in the LHS of a assignment operator

const arr = [1, 2, 3];
arr.push(4);    //4 is added to the array
console.log(arr);



//var declarations are globally scoped or function scoped
var myVar = 10;
function printvar() {
    var myVar = 12;
    if (true) {
        var myVar = 14;
        console.log(myVar);
    }
    console.log(myVar);
}
//here 14 will be printed in both cases as value of var is changed globally inside function
printvar();
console.log(myVar); //globally outside function value is 10


//let and const are block scoped
let myVar2 = 20;
function printvar2() {
    let myVar2 = 22;
    if (true) {
        let myVar2 = 24;
        console.log(myVar2);
    }
    console.log(myVar2);
}
// here inside if condition value of variable will be 24 whereas globally insie function it will be 22 and outside function 20
printvar2();
console.log(myVar2);


// const has also the same result as let
const myVar3 = 30;
function printvar3() {
    const myVar3 = 32;
    if (true) {
        const myVar3 = 34;
        console.log(myVar3);
    }
    console.log(myVar3);
}
printvar3();
console.log(myVar3);
