//refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

//Abstract Equality comparison
console.log(1 == '1');    //true, as double equals to doesn't check datatype only checks value
//Strict Equality comparison
console.log(1 ==='1');    //false, as triple equals to does check datatype with value ; here number datatype is not equal to string datatype

//peculiar cases
console.log(0 == '');    //true, as converting empty string to number is equal to 0
console.log('false' == false);   //false, as both side is converted to number (typecasting) where left side is 0 and right side is NaN
console.log('' == false);   //true,  as both side is converted to number where left and right side both are 0
console.log('\n' == 0);     //true,  as both side is typecast where left side evaluates to empty space i.e. 0 and right side is also 0
console.log('\t' == 0);
console.log('\n' == '\t');  //false,  no typecasting needed therefore different values

// a = b , b = c => a = c   ;   this doesn't hold good for abstract equality

console.log([1,2] == [1,2]);   //false,  as the data inside both array is same but they are different arrays and are stored in different locations
//for example:
let arr= [1,2];
let arr2 = arr;
console.log(arr2 == arr);   //true, as data inside array is also same and arr2 refer to arr
let arr3= [1,2];
console.log(arr3 == arr);   //false,  as data inside both array may be same but these are two different arrays which point to different memory locations

//Non Primitive values are those values whose data types are not numbers, strings, booleans, null or undefined such as objects
//Non-primitive data types are called reference types because they refer to objects
//Note: If two non-primitive data when evaluated with either double equal to or triple equal to is found to be 'true' that means they both point to the same reference
