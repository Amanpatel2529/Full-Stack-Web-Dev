/* jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. */
// How to link jquery to html file:  go to https://jquery.com/download/ -> click on compressed/uncompressed file link -> copy the url -> paste that url in the script tag (src) in html file

console.log('$ : ',$); //dollar sign is used to refer jquery object
console.log("$ == jQuery : ", $ == jQuery); //true
console.log("select div by class: ", $('.div1')); //select div by class
console.log("select div by id: ", $('#div2')); //select div by id
$('.div1').html("This is Div 1"); //changing html for div with class div1