//function can be defined using the following syntax:
//Function Declaration   //Hoisting Works (Described later)
function alpha() {
    return "A"
}
console.log(alpha())


//another way of defining function
//the problem of using let for defining function is if you call function before defining it, it will throw Reference error ; whereas in case of function() it is completely fine
//Function Expression   //Hoisting Works 
let gamma = function() {
    return "C"
}
console.log(gamma)    //it will print function code
console.log(gamma())  //it will print what gamma function returns


//JS follows a 2pass way i.e. interpreter will first go through the code and store all the function definitions and then second time will actually execute the code
//therefore if we call a function and define it later, it is totally fine
//This is called Hositing: It will act like all the function definition has been moved to the top of your code but actually the definition is just stored in the memory
//interpreter will execute and store all function/variable declaration in the memory whereas everything else like console.log is stored in a queue and at the end of the code this queue is executed
console.log(print_a())
function print_a() {
    return 'a'
}


function area(height, width) {
    return height * width
}
console.log('area(4,3)', area(4,3))
//console.log(area(4))  //giving one argument will give an internal error, it will not execute ; it will say 'not a number' (NaN)

//in order to make this execute with one argument, we can use POLYMORPHISM
//The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. 

function new_area(length, width){
    if(!width){
        return length * length  //area of square
    }
    return length * width       //area of rectangle
}
console.log('new_area(4,3)', new_area(4,3))
console.log('new_area(4)', new_area(4))


//we can use let or var to declare variables but let is preferred as var is an old way
let a = 123
let b = 'hello'
console.log(a)
console.log(b)

function hello(){
    return 'Hello World'
    // console.log("Hello World")
}
console.log(hello())

//if a function doesn't take any arguments and we want to pass arguments then we can use 'arguments' attribute followed by number of argument to print like argument[0] + argument[1] will print first two arguments passed inside function
function print_hi(){
    console.log("Hi" +  arguments[0] + arguments[1])
}
print_hi(2,3)
print_hi('shivansh', 'kush')


//A closure is a function having access to the parent scope, even after the parent function has closed.
//function inside a function
function outer(arg1){
    let var1 = 10;
    let x = 30;
    console.log(arguments[0]);          //arguments keyword is used to fetch any passed argument in the function ; here the argument will be param1
    function inner(arg2){
        let var2 = 20;
        let x = 40;
        console.log(arg1, var1, arg2, var2, x);    //inner x will be printed as it will shadow outer x
    }
    return inner;
}
let x = outer('param1');        //x is a variable which stores function with argument for outer function which will return inner
x('param2');                    //argument for inner function

//Note: All the scope that were available at the birthplace of the inner function are captured by the inner function and will be available inside the inner function till the inner function is available in memory
//Now as we have returned it and stored it in a variable therefore inner function will be stored in the memory
//This is called closure function ; it is nested ; all scopes are captured



