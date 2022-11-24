//go to live server < inspect < console, to see the result
console.log(1738, typeof 1738)
console.log(17.38, typeof 17.38)
console.log('a', typeof 'a')
console.log("abcd", typeof "abcd")
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)

//Different datatypes
let a = 10;
console.log(a, typeof a);   //used to print anything

let b = 3.45;               
console.log(b, typeof b);   

let c = 'a';
console.log(c, typeof c);

let d = 'abcd';
console.log(d, typeof d);

let e = [1,2,3,4,5];         //array
console.log(e, typeof e);

let f = [1,2,3.5,'hello', false];   //heterogenous array
console.log(f, typeof f);

//function type
function a(){       //go to console and call a using a()
    return 1;
}
console.log(a, typeof a)        //in JS function can be treated as variable and datatype of function is function
console.log(a(), typeof a())   

let b = 1       //in JS we can let any variable without specifying datatype as in C we write int b = 1
console.log(b)
// console.log(b())    //runtime error ; b is not a function
//if an error is faced then further code is not executed in the same js file whereas if there are two js files link to one html page and if one is stuck on error then it will stop executing further but the second js file will be executed 


//Declaring Variables ; Three methods
// g = 20;         //global scope
// var h = 30;     //Function scope
// let i = 50;     //Block scope

//example for scope of different declarations:
function fun(){
    let g = 5;
    if(g===5){
        b = 3;                  //outside func value of b = 3.45        
        let a = 123;            //outside func value of a = 10
        c = 'b';                //outside func value of c = 'b'
        console.log("INSIDE", b);
        console.log("INSIDE", a);
        console.log("INSIDE", c);
    }
    console.log("OUTSIDE", b);      //value remains same (Global scope)
    console.log("OUTSIDE", a);      //value is changes (Function scope)
    console.log("OUTSIDE", c);      //value remains same (Block scope)
}
console.log(fun());

//Note: '='in JavaScript is used for assigning values to a variable
// '==' in JavaScript is used for comparing two variables, but it ignores the datatype of variable
// '===' is used for comparing two variables, but this operator also checks datatype and compares two values
