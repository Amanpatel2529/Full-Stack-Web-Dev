/** Primitive and Non-Primitive
 ** Data types that are known as primitive values in JavaScript are numbers, strings, booleans, null, undefined. 
 ** Non-primitive values are mutable data types. The value of an object can be changed after it gets created. Such as Objects like functions and arrays 
*/

//Pass by Value  &  Pass by Reference
/**
 ** Pass by Value:  When we pass a value to a function, a copy of the value is made inside the function and any changes made won't be reflected to the Original value
 ** Pass by Reference:  We pass the pointer to the array which points to the original variables, and any changes made will be reflected to the original variables
*/


//Example
var mainWinner = "A";
function changeWinner(Winner){
    Winner = "B";
}
console.log("The winner is " + mainWinner);

changeWinner(mainWinner);
console.log("Now the winner is " + mainWinner);


//Pass by value
//Here we have a new copy of Winner2 in the changeWinner2 function
//Changes are made to the Copy
var mainWinner2 = "A";
function changeWinner2(Winner2){
    console.log("Original Winner " + Winner2);
    Winner2 = "B";
    console.log("Changed Winner " + Winner2);
}
changeWinner2(mainWinner2)
console.log("The winner is " + mainWinner2);
// console.log("Changed Winner " + Winner2);  // error


//Changes are made to the Original Variable
//This looks like Pass by reference but JavaScript always passes data by Value
//This is Pass by Value as mainWinners refer to "X" and this "X" refers to the data i.e. array.  (only for non-primitive)
//Now when we pass X to the function we are actually passing the Array as it refers to X, therefore it is pass by value
var mainWinners = ["A", "B", "C"];
function changeWinners(winners){
    winners[0] = "D"; 
    winners[1] = "E";
    winners[2] = "F";
}

console.log("Original Winners: " + mainWinners);

changeWinners(mainWinners);
console.log("Changed Winners: "+ mainWinners);