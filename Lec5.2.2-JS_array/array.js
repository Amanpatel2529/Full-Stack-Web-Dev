//declaring array
let e = [1,2,3,4,5];         //array
console.log(e, typeof e);

let f = [1,2,3.5,'hello', false];   //heterogenous array
console.log(f, typeof f);

//Array
let arr = ['Mango' , 'Guava' , 'Orange' , 'Apple'];
console.log(arr);

//iterate over array
for (let i=0; i<5; i++){
    console.log(arr[i]);
}
//stuff you can do with array ; array properties
//arr[0];                //find element at 0 index
// arr.length;          //find out the length of the array
// arr.push('Banana');  //add element to the last of the array
// arr.pop();           //remove and return last element
// arr.indexOf('Guava');  //find the index of some element
// arr.shift('Mango');  //remove element from the front of array
//arr.unshift('Kiwi');  //adds element to the front

//example of using if else loop with array
if(arr[0]=='Orange'){                   //if element at 0 index is orange then print this
    console.log("Orange");
}
else{
    console.log('No it is', arr[0]);    //else print this
}

//using for let loop on an array
for(let val of arr){
    console.log(val);       //it gets the values inside the array
}

//using for in loop on an array
for(let index in arr){
    console.log(index);    //it will output the indices of the array ; iterating over indices
}

//slice 
let notes = ['sa', 're', 'ga', 'ma', 'pa', 'dha', 'ni', 'sa'];
console.log(notes.slice(4));       //elements in array after 4th index will get printed
console.log(notes.slice(4,6));     //elements in array after 4th till 6th index will get printed (4-inclusive ; 6-exclusive)
//Note: Slice is non destructive that means if we slice an array the actual array won't change ; in order to save the changes we can save the notes.splice to some variable
console.log(notes);                //no change to the original array

//splice    
//if we do notes.splice(4), notes will be spliced till 4th index where 4 is exclusive
let omit = notes.splice(4);         //destructive
console.log(notes);                 //elements till 4th index are spliced and stored in notes
console.log(omit);                  //rest of the elements of array are stored in var omit
//splice can also take two parameter where second parameter is the length of the new array
let omit2 = omit.splice(1,2);       
console.log(omit2);                 //as length is 2 therefore 2 elements after 1index form a new array
console.log(omit);                  //whereas element before 1 index and remaining element are stored in omit var 

//replacing elements of an array using splice
let number = ['one', 'two', 'three', 'four', 'five'];
number.splice(1,2,'2','3');     //first parameter is starting index and second parameter is ending index for elements to be replaced
                                //third parameter gives the elements to be replaced with
console.log(number);

//concat
let first_arr = ['one', 'two', 'three', 'four', 'five'];  //concat is used to add elements to array or merge to arrays
console.log(first_arr.concat('six', 'seven'));                     //here six and seven will be added to the last of the array
//Note: Concat is also non-destructive therefore value is needed to be stored in a var
let new_arr = first_arr.concat('six', 'seven'); 
//merging arrays using concat
let second_arr = ['eight', 'nine', 'ten'];
console.log(new_arr.concat(second_arr));
