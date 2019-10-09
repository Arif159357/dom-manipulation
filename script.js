/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.textContent)

/* Task 2 using plain JavaScript */
function addText(event){
    var p = document.createElement("p")
    p.innerText = 'Hello world'
    var div = document.getElementById("task2a")
    div.appendChild(p)
}


/* Task 4 using jQuery */
