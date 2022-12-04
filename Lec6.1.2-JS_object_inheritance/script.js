let obj1 = {
    x: 500,
    y: 300,
    color: "blue"
}

let obj2 = Object.create(obj1);

console.log(obj1 == obj2);   //false
console.log(obj1);           //it gives all the properties of the object
console.log(obj2);           //it shows no properties even tho it refers to obj1
console.log(obj2.__proto__)   //when an object is created using Object.create, it has one __proto__ property which refers to the object through which it is inherited 
//we should never use __proto__ in production code, this is only for debugging
console.log(obj2.__proto__ == obj1);   //true

console.log(obj2.x);
/* obj2.x  ->  it will try to find x in obj2
           ->  if not found, it will try to find in obj2.__proto__
           ->  if not found, it will try to find in obj2.__proto__.__proto__
           ->  ... and so on ...   till .__proto__ becomes null
           ->  at some point this inheritance becomes null
*/
//note this above logic is only followed if we're reading from object, not when we're writing to object
//when we are writing it is written directly to object instead of __proto__

let obj3 = Object.create(obj2);     
console.log(obj3 == obj1);   //false
console.log(obj3 == obj2);   //false
console.log(obj3.__proto__ == obj2); //true
console.log(obj3.__proto__ == obj1); //false
console.log(obj3.__proto__.__proto__ == obj1); //true


obj2.x++;               //now for reading it will read __proto__ but it will write the change in the obj2 itself and the obj1 properties remains same

console.log(obj2);      //x is added in obj2 properties
console.log(obj1);      //properties of obj1 remains unchanged

obj3.y++;

console.log(obj3);      //updated value of x is added in obj3 properties
console.log(obj3.x);    //it is read from updated value in obj2
console.log(obj3.color);    //it is read from __proto__ chain