// If one programming language allows you:
//to pass one function as an argument into another function 
// or
// return a function from another function
// then such a language supports Higher Order Functions 
// First order functions are those functions which are defined in global scope and can be called directly
// Higher order functions are those functions that are passed into another function and are called inside that function ; like second order, third order functions etc.

function greeter(greeting){
    function greet(name){
        console.log(greeting, name)
    }
    return greet('shivansh')
}
greeter('Good Morning')

// function greeter(greeting){
//     function greet(name){
//         console.log(greeting, name)
//     }
//     return greet
// }
// let g1 = greeter('Good Morning')
// g1('shivansh')


//another example
function hello(greet){
    function to(name){
        function surname(second_name){
            console.log(greet, name, second_name);
        }
        return surname('kush');
    }
    return to('shivansh');
}
hello('Hi');



