$(document).ready(function () {

    // ------------------------------------------> text
    let x = $(".first_li")
    console.log("x.text(): ", x.text()); //it will return us the value
    x.text("First li"); //it will change the text
    console.log("Now, x.text(): ", x.text());
    // it is an example of polymorphism i.e. if we don't pass any argument that means i'm trying to fetch the data and if i'm passing the argument that means i'm setting the data
    
    // ------------------------------------------> html
    x.html("<b>First</b> li"); //using .html we can change html of element
    // but if we use .text for this, it won't work as it will treat angular brackets as normal text
    $(".second_li").text("<b>Second</b> li");

    console.log("x.html(): ", x.html()); //it will read tags as well
    console.log("x.text(): ", x.text()); //it won't read tags   

    // ------------------------------------------> attributes
    x.attr("height", 200); //adding a html attribute
    console.log("x.attr('height'): ",x.attr("height"));
    x.attr("height", null); //we can remove a html attribute by passing null or undefined as an argument
    console.log("x.attr('height'): ", x.attr("height"));

    let y = $("li.third_li")
    y.attr("style", 'color: red') //color changes as html attribute has been added
    
    // ------------------------------------------> css
    y.css('color', 'blue'); //color can also be changed by changing css properties
    y.css('font-size', '20pt'); //changing font size by adding css properties

    // ------------------------------------------> chaining
    let z = $(".fourth_li");
    z.css('color', 'red').css('font-size', '25pt').text("Fourth li")
});