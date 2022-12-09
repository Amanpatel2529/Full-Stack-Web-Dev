//* AJAX -> Asynchronous JavaScript And XML.
// It is very hepful when you don't want to reload your page and make a request to some API and get some data.
// AJAX is not a programming language.It just uses a combination of:
//* A browser built-in XMLHttpRequest object (to request data from a web server)
//* JavaScript and HTML DOM (to display or use the data)

//* API -> Application Programming Interface
// It is a software intermediary that allows two applications to talk to each other.

//reqres.in is a website which is a sample API. We can make get request to it and fetch some data

$(document).ready(function () {
    let list = $('#people');
    let page = 1;

    $('#fetch').click(() => {
        $.get(`https://reqres.in/api/users?page=${page}`, (data) => {  //asynchronous get request ; it will return a callback
            page++;  //loop which increments page whenever we click on fetch button
            for (let person of data.data) {
                list.append(
                    //get person first and last name and image
                    $(`<li>
                        <img width='100' src="${person.avatar}"> 
                        ${person.first_name} ${person.last_name}  
                        </li>`)  
                )
            }
        }) 
    });
});