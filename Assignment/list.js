// Attaching variables to id and an element outside of the fuinction
// the input ID is attached to my user input text
let input = document.getElementById('input');
let list = document.createElement("p");

// Onclick this function adds a text node that has the user input value attached while creating a break(linebreak)
// I added an id to list so that I'm later allowed to access the newly created elements(so the br and p) and remove one child element at a time
// Appending the const note that has the input value I then add a new variable with the div ID test 
// Finally attaching list into the div so that it would create new P elements within the Div tag
function makeList() {
    const note = document.createTextNode(`${this.input.value}`);
    list.appendChild(document.createElement("br"));
    // list.appendChild(document.createElement("button"));
    list.id = 'func'
    list.appendChild(note);
    let testDiv = document.getElementById("test");
    testDiv.appendChild(list);
    
}
console.log(input.value); 


// Deletes the last child only so you have to delete both the linebreak and the p for one line to go away(PRESS THE BUTTON TWICE DUMMY).
function deletes() {
    const go = document.getElementById("func");
    go.removeChild(func.lastChild);
  };

  

  
