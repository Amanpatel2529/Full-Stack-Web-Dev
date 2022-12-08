let input = document.getElementById("inp");
let add = document.getElementById("add");
let list = document.getElementById("list");

add.onclick = () => {
    let li = document.createElement("li");

    // Delete button
    let del = document.createElement("button");
    del.innerText = "⨯";
    del.onclick = function (event) {  //it returns a click event with a target ; taget is the delete button of that li
        event.target.parentElement.remove();  //parent element of target is that li item
    }
    
    // Up Shift button
    let upBtn = document.createElement("button");
    upBtn.innerText = "↑";
    upBtn.onclick = (event) => {
        //event.target = up button
        //event.target.parentElement = the li item
        //event.target.parentElement.parentElement = the todo list
        event.target.parentElement.parentElement.insertBefore(  //it inserts first argument before second argument
            event.target.parentElement,  //insert this element
            event.target.parentElement.previousElementSibling  //before it's previous element
        )  
    }

    // Down Shift button
    let downBtn = document.createElement("button");
    downBtn.innerText = "↓";
    downBtn.onclick = (event) => {
        event.target.parentElement.parentElement.insertBefore(  //it inserts first argument before second argument
            event.target.parentElement.nextElementSibling,  //insert next element
            event.target.parentElement  //before curent element
        )  
    }

    // Add the task text 
    let taskSpan = document.createElement("span");
    taskSpan.innerText = input.value;

    // Appending all the buttons to li and li to list
    li.appendChild(del);
    li.appendChild(upBtn);
    li.appendChild(downBtn);
    li.appendChild(taskSpan);
    list.appendChild(li);
}