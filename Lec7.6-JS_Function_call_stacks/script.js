// When we call a function inside other function, that function gets added to the function callstack
// Here callstack goes from shivansh --> maa
// We can check that all the functions are getting added to callstack and are being called by throwing an error in the last function

function shivansh() {
    console.log("Let's get a Dog");
    tina();
    function tina(){
        console.log("Yes! Even i want one! Let's get a Dog");
        chacha();
        function chacha(){
            console.log("Yes! Good idea, ask amma");
            amma();
            function amma(){
                console.log("IDK! Ask your mother");
                maa();
                function maa(){
                    console.log("FUCK OFF");
                    throw new Error("YOUR LIFE SUCKS!")
                }
            }
        }
    }
}
shivansh();


// this can also be done like: 

// function shivansh() {
//     console.log("Let's get a Dog");
//     tina();
// }
// function tina() {
//     console.log("Yes! Even i want one! Let's get a Dog");
//     chacha();
// }
// function chacha() {
//     console.log("Yes! Good idea, ask amma");
//     amma();
// }
// function amma() {
//     console.log("IDK! Ask your mother");
//     maa();
// }
// function maa() {
//     console.log("FUCK OFF");
// }

// shivansh();
