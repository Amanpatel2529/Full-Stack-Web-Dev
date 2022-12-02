//Object oriented programming in Javascript 
//JS allows to create objects without defining the class

// go to console and type bird   // , at the end is the identifier which is mandatory for defining more than one properties
//First Way of creating JS object - JSON(JavaScript Object Notation)
var bird = {            //bird with some properties defined
    x:100,              //location of bird ; x co-ordinate
    y:20,               //location of bird ; y co-ordinate
    color:'blue',       //color of bird
    eggs:['one','two','three'],     //array of bird's eggs
    //x:y - this is key value syntax where key is before colon (x) and value is after color (y) ; key must be string or must be treated as string
    //now in order to find the co-ordinates of flying in the function:
    //we can't do this : 
    // fly:function(){
    //     console.log("Bird is flying",x,y);      this won't work as whenever there are some prop inside the object and we want to use those we have to use 'this' keyword 
    // }
  
    //this will work
    fly:function(){
        console.log('Bird is flying at co-ordinates',this.x,",",this.y)   //variable assigned to a function that prints bird is flying with co-ordinates using 'this' keyword
    }

}   

//how to call a function of object
bird.fly();

// to access or change the properties of the object we can easily write 
// bird.x               //access x co-ordinate property
// bird.x = 120;        //update x co-ordinate property


//iterate over birds eggs
//using for loop
for(let i=0; i<bird.eggs.length; i++){
    console.log(bird.eggs[i]);
}
//using for each loop
bird.eggs.forEach(function(idx,val){      //for every element in 'bird.eggs' array, we will call an un-named function which will get 2 things i.e. indices and values
    console.log(idx,val);
});

//Another way of creating JS object
//creating a class for different fruit objects
function fruit(taste,color){        //two properties of fruit: taste and color
    this.color = color;
    this.taste = taste;
}

//new keyword
let mango = new fruit('sweet' , 'yellow');      //now mango will be treated as a fruit with properties sweet and yellow
let orange = new fruit('sour' , 'orange');

//object and its properties can be accessed like this:
//mango
// orange.color;
// mango.taste;


//New Way of creating object - Class Keyword (Introduced in ECMAScript 2015) - CLass Declaration
class Fruit_class{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
};
let kiwi = new Fruit_class('sour','green');

//both are non-hoisted
//Class Expression
let Fruit_class2 = class{
    constructor(taste,color){       //we add properties in constructor
        this.taste = taste;
        this.color = color;
    }
}
let kiwi2 = new Fruit_class2('sour','green');


//'this' points to the place where function is called
function checkthis(){
    console.log(this);          //this points to the window (global scope)
}
checkthis();

let obj = {
    x:10,
    y:20,
    color: 'blue',
    z: function(){
        console.log(this);      //this points to the object itself
    },
}
obj.z();
//'this' is bound on runtime
//When the function runs, JS interpreter will check if that function is called via an object then it will point to the object 
//else, if it is not called via an object, it will point to current scope

//checking 'this' inside a nested object
let o1 = {
    a: 10,
    b: 20,
    o2: {
        c: 30,
        d: 40,
        e: function(){
            console.log(this)           //it will point object o2
        },
    },     
}
o1.o2.e();




















