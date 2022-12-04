//setTimeout function is used to execute a function after a given time in  miliseconds
//setTimeout is really use when we are dealing with serbers as it takes some time to process requests
//setTimeout will not stop execution till that time

//First way
function setTimeout_example(){          //define a function
    console.log('Hello 1');
};
setTimeout(setTimeout_example, 1000);   //pass the function and time as an argument to setTimeout

//Second Way
setTimeout(function(){      //it is called an anonymous function as it does not have a name
    console.log('Hello 2');
},2000);                    //function gets executed after 2000 miliseconds

//Third way
setTimeout(() => {              //arrow function ; it is a simpler way of function definition
    console.log('Hello 3');
},3000);


//in JS functions are executed in a sequential manner
//But if we set greater timeout to first function than the second function then second will execute before first

setTimeout(() => {
    console.log('First Function');
},5000);
setTimeout(() => {
    console.log('Second Function');
},4000);
