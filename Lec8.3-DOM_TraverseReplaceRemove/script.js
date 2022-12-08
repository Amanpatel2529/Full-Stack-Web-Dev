//We can right click on any object on screen and use it in console by right clicking
//It returns a temp variable

let mi = document.getElementById("mi");

mi.previousSibling  //it returns previous sibling in that parent element i.e. re
mi.nextSibling  //it returns next sibling in that parent element i.e. fa
mi.parentElement  //if we do mi.parent element it returns us ol of which mi is part of
mi.parentElement.parentElement  //it returns the whole list item 'see'
mi.parentElement.parentElement.previousElementSibling  //it returns the whole previous list item i.e. 'bee'
mi.parentElement.parentElement.previousElementSibling.children  //it returns the html collection under that sibling i.e. ol
mi.parentElement.parentElement.previousElementSibling.children[0].children[3]  //it returns the child at 4th index (quad) of child at 0th index(ol) of previous sibling(bee)

mi.parentElement.remove()  //it removes ol from screen but ol object does exist
mi.parentElement.parentElement  //it returns null as mi.parentElement has been removed so it's parent element doesn't exist 

let dee = document.getElementById("dee");
dee.appendChild(mi.parentElement);  //now the ol from see is removed and is appended to dee

let re = document.getElementById("re");
re.remove()  //removes re element from ol
dee.previousElementSibling.previousElementSibling.children[0].appendChild(re);  //re element is appended to 'bee' list

