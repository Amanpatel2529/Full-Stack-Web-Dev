//In JS, one function can be called inside another function
//a function which is passed as an parameter to another function is a callback function

//example of a callback function
function one(){             //creating a function
    console.log('World');
}

function two(callback){     //creating another function and calling first function inside it
    console.log('Hello');
    callback();
}

two(one);       //passing first function as an argument to second function


//another example

function three(){
    console.log('This is a callback function');
}

function four(three){
    setTimeout(() => {
        console.log('This is the main function');
        three();
    }, 1000);
}
four(three);


//another example

function five(callback){
    setTimeout(() => {
        let str = 'Good';
        callback(str);      //here callback function is called with a parameter which gets printed later 
    }, 2000);
}

 five(function(data){                //this 'function' passed inside five is actually our callback function
    console.log('I feel...');
    console.log(data);          //in function five this 'data' is replaced by 'str' and str gets printed
})


//another example
/*
 * Firstly we created a function 'fakedownload' which takes a callback function 'done' 
 * In function fakedownload we create a variable with string in it wich gets printed after 1sec (defined in callback function) 
 * Inside callback function we print another statement and also print variable that contains string to first print
 */

function fakedownload(done){
    setTimeout(function (){
        let downloadedData = 'Some Data...';      //it gets printed after a second
        done(downloadedData);       
    },3000)
}

fakedownload(function(data){
    console.log('We downloaded a file, which has this data --->');
    console.log(data);          //this data is replaced by downloadedData
})


//another example

function add(a,b){
    console.log(`${a} + ${b} =` ,a + b);    //created a simple add function
}

function calc(a,b,callback){
    setTimeout(() => {
        callback(a,b);      //created a calc function and passed callback add function inside it
    }, 4000);            
}   
calc(2,3,add);      //passed callback func as an argument with other arguments inside calc function