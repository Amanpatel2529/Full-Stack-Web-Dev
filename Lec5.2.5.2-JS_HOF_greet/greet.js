//First Way
function create_greet(greeting) {      //create a greeting function
    function greet(name) {             //here we treat name as it is a string
        console.log(greeting, name)
    }
    return greet
}

let g1 = create_greet('Good Morning')   //assign a variable to greeting function so many other greeting functions can be made
let g2 = create_greet('Good Evening')

function getname() {
    return document.getElementById('namebox').value     //go to document and search element with ID namebox and take the value from there 
}

//Second Way
function please_sayhi(say) {             //create a function
    function hi(enter_name) {            //here we treat name as a function 
        console.log(say, enter_name())          //instead of passing the value, pass the getname function and call it inside the func
    }
    return hi
}
let h1 = please_sayhi('Hi!')


function gethibox() {
    return document.getElementById("hi_box").value
}