/*Async operations like promises are put into an event queue, which runs after the main thread has finished processing so 
that they do not block subsequent JavaScript code from running. The queued operations will complete as soon as possible then return their 
results to the JavaScript environment. */

//Difference between Asynchronous and Synchronous
/*
 * Synchronous basically means that you can only execute one thing at a time. 
 * Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one 
 */

// function fakeDownloadPromise() {                            //this function returns a promise
//     return new Promise(function(resolve, reject) {          //promise takes function as an arg and func should implement executor interface which has 'resolve' and 'reject' variables
//         setTimeout(() => {
//             let downloadedData = "Some data from Web";      
//             resolve(downloadedData);                        //calling resolve func with downloadedData
//         }, 1000);                                           //settimeout func with 1sec timeout
//     })
// }

// fakeDownloadPromise().then(function(data) {                 //now we will call fakeDownloadPromise function and then run 'then' function which takes resolve func as an argument
//     console.log("The data we downloaded is -->");
//     console.log(data);
// })

//working of resolve and reject

//* when we call resolve, the function inside 'then' function gets called
//* and in case of reject, function inside catch function gets called

// function fakeDownloadPromise(correct) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let downloadedData = "Some data from Web";
//             if (correct) { //if correct is true then resolve function is executed
//                 resolve(downloadedData);
//             } else {
//                 reject(new Error("Could not download the file")); //else error is thrown and catch function is called
//             }
//         }, 1000);
//     })
// }

// fakeDownloadPromise(false).then(function(data) { //if we pass true then resolve is executed and everything works as previous case
//     console.log("The data we downloaded is -->");
//     console.log(data); //but if we pass false then else statment is executed i.e. reject function is called and further catch function is called
// }).catch(function(err) {
//     console.log(err);
// })


//how to deal with 'then' function later
function fakeDownloadPromise(correct) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let downloadedData = "Some data from Web";
            if (correct) { //if correct is true then resolve function is executed
                console.log("Done Downloading!"); //it will be printed first
                resolve(downloadedData);
            } else {
                reject(new Error("Could not download the file")); //else error is thrown and catch function is called
            }
        }, 1000);
    })
}

let downloaded = fakeDownloadPromise(true); //it doesn't throw any error, even if we don't define then function
downloaded.catch(function(err) {
    console.log(err);
})

//data downloaded is held by the promise... When we write 'then' function i.e. when we deal with data

downloaded.then(function(data) { //now the 'then' function is called after 3 seconds
    setTimeout(() => {
        console.info("Data downloaded from web is -->");
        console.info(data);
    }, 3000);
})