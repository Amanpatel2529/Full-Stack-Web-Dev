let p = document.getElementsByClassName('para')[1]  //1 is index number of array returned 
p  //returns element with class para
p.innerText  //returns text of p 
p.innerHTML  //returns entire html of p 
p.outerHTML  //returns entire element + it's content

p.innerText = "some new data"  //data changes

let pp = document.getElementById('p1')
//pp.innerText = "<b> Bold </b>"  //text does not changes to bold and b tags are treated as text
pp.innerHTML = " <b> Bold </b>"  //text changes to bold as b tags are treated as html elements

pp.getAttribute('class')  //returns attribute class name
pp.getAttribute('id')  //returns attribute id 

pp.setAttribute('contenteditable', true);  //sets attribute to pp ; now content of pp is editable
pp.setAttribute('spellcheck', false);  //now content of pp is editable without spellcheck

let i = document.getElementById('inpbox')
i.innerHTML  //nothing gets printed even if we type something in input box
i.innerText  //nothing gets printed even if we type something in input box

i.value  //if we type something, it get printed as for input box, text written inside it is treated as a value
//i.value = "new stuff"  //value inside input box changes

i.setAttribute('type', 'email')  //check whether entered value is a valid email or not
i.validity  //shows whether typeMismatch is true or false based on enetered value

let btn = document.getElementById('btn')
//btn.innerText = "a"  //changes text of button
btn.innerHTML = "<b>BUTTON</b>"  //changes HTML of button
