// Attaching variables to id and an element outside of the function
// The input ID is attached to my user input text
let input = document.getElementById("input");
let list = document.createElement("p");

// Couldn't set a type attribute to the createElement("button") because I've already used it for ID so I found another way to prevent it from refreshing the page
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()
  });

// Onclick this function adds a text node that has the user input value attached while creating a break(linebreak)
// Appending the const note that has the input value I then add a new variable with the div ID test 
// Finally attaching list into the div so that it would create new P elements within the Div tag
function makeList() {
    const note = document.createTextNode(`${input.value}`);
    list.appendChild(document.createElement("br"));
    list.appendChild(document.createElement("button")).setAttribute("id", "edit");
    list.appendChild(note);
    let testDiv = document.getElementById("test");
    testDiv.appendChild(list); 
    list.id = "func";
    list.setAttribute("onclick", "deletes(func)");
    // list.setAttribute("onclick", "edits(func)");
};
console.log(input.value); 

// Deletes lines on click on click targeting three last childs(Button, Br and the text) in order to remove a whole line at a time 
function deletes(func) {
  const newGo = document.getElementById("func");
  newGo.removeChild(func.lastChild);
  newGo.removeChild(func.lastChild);
  newGo.removeChild(func.lastChild);
};
  
//   // Work in progress edit button Maybe instead use create multiple inputs 
// const edit = document.getElementById("newInput");

//   function edits(func) {
//     const newNote = document.createTextNode(`${newInput.value}`);
//     edit.appendChild(newNote);
//     edit.setAttribute("onclick", "newInput");
//     let testDiv = document.getElementById("test");
//     testDiv.appendChild(edit); 
// };

//  console.log(edits());

//   function newInput() {
//     const make = document.getElementById("edit");
//     make.appendChild(document.createElement("input")).setAttribute("id", "testing");
//     let newTest = document.getElementById("test");
//     testDiv.appendChild(make);
//   };
  
 
  

  
