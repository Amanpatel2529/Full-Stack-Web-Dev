let val = document.getElementById("num");
let print = document.getElementById("print");
let list = document.getElementById("list");

//* this function takes value inside input box and run a for loop from 1 to that value and keeps adding the value to the list 
// print.onclick = () => {
//     let x = parseInt(val.value);
//     let start = new Date().getTime();
//     for (let i = 1; i <= x; i++) {
//         list.innerHTML += '<li>' + i + '</li>'
//     };
//     console.log(new Date().getTime() - start);  //it prints the time taken to run the function
// }

//As we can observe for priniting 1000 numbers, it takes 1+ second
//This is because we are basically doing a string append operation which makes a new string object, copies value to it and then appends to another element
//It takes a lot of time, So in order to reduce this time what we can do is...

//* this function does the same job as previous but here instead of putting string one by one in innerHTML of list, we are putting it in an empty string
//* and finally when the loop is completed, we will put this string in DOM (i.e. list.innerHTML)
//* now the time taken to print 1000 numbers has reduced to 3miliseconds
// print.onclick = () => {
//     let x = parseInt(val.value);
//     let listHTML = '';
//     let start = new Date().getTime();
//     for (let i = 1; i <= x; i++) {
//         listHTML += '<li>' + i + '</li>'
//     };
//     list.innerHTML = listHTML;
//     console.log(new Date().getTime() - start);  
// }

//* Using innerHTML is a very costly task in terms of performance
//* Alternative way of doing same task (without innerHTML)
print.onclick = () => {
    let x = parseInt(val.value);
    let start = new Date().getTime();
    for (let i = 1; i <= x; i++) {
        let item = document.createElement("li");
        item.innerText = i;
        list.appendChild(item);
    };
    console.log(new Date().getTime() - start);  
}