$(document).ready(function () {
    $('#prepend').on('click', function () {
        //console.log($('#input').text()); //nothing would be printed as it is not a string, it is a value 
        //val functions can be used to fetch data from input element
        //console.log($('#input').val());
        //if we don't pass anything to val, it will fetch data ; if we pass argument, it will set data

        let text = $('#input').val();
        $('#list').prepend($(`<li>${text}</li>`)); 
        // if we pass string inside jquery function ($) it constructs it as an html element
        // .preprend will add value to the first index

        // we can also do something like this :
        //$('#list').prepend($(`<li>`).text(text));

        // or this for bold :
        //$('#list').prepend($(`<li>`).html(`<b>${text}</b>`)); 
    });

    $('#append').on('click', function () {
        let text = $('#input').val();
        $('#list').append($(`<li>${text}</li>`)); 
    });

    $('#clear').on('click', function () {
        $('#list').empty();
    });
    
});


// it is better to declare variables outside function so that $('#input').val(); & $('#list') doesn't run everytime we click on button

// $(document).ready(function () {
//     let input = $('#input');
//     let list = $('#list');
//     let clear = $('#clear');
//     $('#prepend').on('click', function () {
//         let text = input.val();
//         list.prepend($(`<li>${text}</li>`)); 
//     });
//     $('#append').on('click', function () {
//         let text = input.val();
//         list.append($(`<li>${text}</li>`)); 
//     });
//     clear.on('click', function () {
//         list.empty();
//     });
// });