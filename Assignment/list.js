let input = document.getElementById('input');
let list = document.createElement("p");
function makeList() {
    const note = document.createTextNode(`${this.input.value}`);
    list.appendChild(document.createElement("br"));
    list.appendChild(document.createElement("button"));
    list.appendChild(note);
    let testDiv = document.getElementById("test");
    testDiv.appendChild(list);
   
}
console.log(input.value); 

// function deletes() {
//     const go = document.getElementById("")
// };
