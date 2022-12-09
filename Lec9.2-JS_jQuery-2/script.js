$('.item').text('Div with class:item') //change text of elements with class item
// What is the difference between text() and html() in jQuery? 
    // text() -> This method sets or returns the text content of elements selected
    // html() -> This method sets or returns the content of elements selected.
$('div#three').text('Div with class:item & id:three') //change text of div with id three 

document.getElementById('one') //if we do this we get the object itself
$('#one') //but if we do this we get an array that contains that element ; we don't get access to html element directly
console.log("document.getElementById('one') == $('#one'): ", document.getElementById('one') == $('#one')); //false
console.log("document.getElementById('one') == $('#one')[0]: ", document.getElementById('one') == $('#one')[0]); //true