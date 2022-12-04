//IIFE - Immediately Invoked Function Expression

//calling a function
function sayhello() {
    console.log('Hello!');
}
sayhello();

//another way of calling a function - immediately
(function sayhello2() {
    console.log('Hello');
})();

//these type of functions are called immediately therefore they can be defined without a name
//Also known as Anonymous Function

(function() {
    console.log('Anonymous IIFE');
})();

//variables created inside these IIFE are not accessible globally
(function() {
    var a = 10;
    var b = 20;
    console.log(a + b);
})();

//console.log(a); //error : a is not defined

function doMath() {
    console.log("3^4 = " + Math.pow(3, 4));
    console.log("root(2) = " + Math.sqrt(2));
    console.log("Sin(10) = " + Math.sin(10));
}
doMath();

//we can do the same using IIFE which will make it shorter
(function(l, p, r, s) {
    l("3^4 = " + p(3, 4));
    l("root(2) = " + r(2));
    l("Sin(10) = " + s(10));
})(console.log, Math.pow, Math.sqrt, Math.sin);



//now in order to print first 10digits, we will do this:
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}
//but this won't work as for loop will execute and finish running in first 100miliseconds therefore it will keep printing 10

//here IIFE can be used to overcome this problem
for (var i = 0; i < 10; i++) {
    (function(j) {
        setTimeout(() => {
            console.log(j);
        }, 100);
    })(i);
}


//this problem can also be solved easily by changing var to let as let creates internal closure which gets bound to every iteration of function 
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

//or also by using signature of setTimeout function
for (let i = 0; i < 10; i++) {
    setTimeout(console.log, 100, i); //(callback function, timeout, argument)
}