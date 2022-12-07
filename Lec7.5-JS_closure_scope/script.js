// When a function is defined inside another function then the inside function gets the scope of the outer function i.e. it can access variable defined in outer function
// This scope is known as Closure Scope 
// And this inside function is known as Closure Function

function count() {
    var initial = 1;
    function plus() {
        console.log(++initial);
    }
    return plus;
}
count(); // nothing happens as it is returning function not calling it
var c = count();
c();  // 2 gets printed
c();  // 3 gets printed

// Closure can be really helpful for creating something like a counter

function counter(val1, val2) {
    return {
        up() {
            val1 += val2;
            console.log(val1);
        },
        down() {
            val1 -= val2;
            console.log(val1);
        }
    }
}

var createcounter = counter(10, 2);
createcounter.up();
createcounter.down();
