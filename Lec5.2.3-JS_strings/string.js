//Strings
let str = "this is a string";       //double or single quote can be used
console.log(str);

//if we use single quote then escape sequence can be used to avoid string ending
// let string = 'this is shivansh's string       //unexpected ending
let string = 'this is shivansh\'s string'        // '\' is escape character here
console.log(string);

//backticks `` can be used to create templates ; it is new so won't work with very old browsers

//Creating String templates
let person = 'Eminem'
let crush = `i love ${person}'s new album`;    //dollar sign and curly braces are used and variable is passed inside curly braces
console.log(crush);

//backticks are also called literal string that means we don't need to use \n for new line, we can write it as we want
let sayhello = `Hi everyone
how are you guys
doing
`
console.log(sayhello);

//string literals
console.log(`10 + 2 = ${10+2}`);            //it also does the calculation for you
let first_word = 'hello';
let second_word = 'world';
console.log(`${first_word}${second_word}`);  //combining two strings


//line breaks for long string
let long_string = 'this is \
a very \
long string'
console.log(long_string);

// \n for new lines with line break
let break_string = "this is \na very long string \nwith breaks"
console.log(break_string);

//searching for string
let s = 'this is some data';
let key = 'is';
console.log(s.indexOf(key));        //it will print the index of that word
//now this will give 2 as 'is' is present in 'this' ; now in order to find occurence of is after this, we can use another parameter for starting search
console.log(s.indexOf(key, 3));     //it will search the word after index 3
console.log(s.indexOf('have'));       //it will give index as -1 which means it is not present in the string
console.log(s.lastIndexOf('me'));     //it will give us the last index of the word  

//slice and substring
let mainStr = 'this is a string';    //slice keywords is used to slice and get the character or array of character which are present inside the given paramter index
console.log(mainStr.slice(2,6));      //here 'is i' will be the output as it is occuring b/w 2,6 indices where 2 is inclusive and 6 is exclusive
console.log(mainStr.substring(2,6));  //substring also gives the same output as slice
//slice is non-destructive ; refer to array lecture 

//There is a slight difference between slice and substring.. We can give negative indices to slice in order to start slicing from the last but it is not possible in substring
console.log(mainStr.slice(-5,-4));    //note slicing is always from left to right even in the case of negative indices ; -4 inclusive and -5 exclusive
console.log(mainStr.substring(-5,-4));   //no output

//substr
let shortstr = 'this is a short string';    //substr takes 2 arguments where first argument is start position and second argument is the length ; substr also takes negative arguments
console.log(shortstr.substr(3,6));    //here 3=start index  6=length of the output string

//Concat ; refer to array
console.log(first_word.concat(second_word));



    






