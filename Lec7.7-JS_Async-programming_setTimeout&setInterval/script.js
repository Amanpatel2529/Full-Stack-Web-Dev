// setTimeout function executes function (first argument) only once after specified number of miliseconds (second argument) 
function sayHello()
{
    console.log("Hello");
}
console.log("Waiting...");
setTimeout(sayHello, 1000);
setTimeout(sayHello, 1000);


// setInterval function keeps executing function (first argument) after specified number of miliseconds (second argument)
function sayBye()
{
    console.log("Bye");
}
//setInterval(sayBye, 1000);  //one way
setInterval(() => {     //another way ; using anonymous function
    sayBye();
}, 2000);


//clearInterval function
function sayHi()
{
    console.log("Hi");
}
let timeoutID = setTimeout(sayHi, 1000);
clearInterval(timeoutID);   // it is used to clear any existing interval ; it won't let anything print


// running count loop till specified loop number with clearInterval function
var timeoutID;
var runCount = 0;
function greet()
{
    runCount++;
    if (runCount >= 5) {    // now function will only execute 5 times then clearINterval will stop it
        clearInterval(timeoutID);
    }
    console.log("Hi! How're you?");
}
timeoutID = setInterval(greet, 1000);
