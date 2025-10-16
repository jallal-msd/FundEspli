

let button = document.getElementById("btn")
console.log("hereee" + button.textContent)
button.addEventListener("click", doThing)
button.removeEventListener("click", ()=>{
  alert("removed")
})

function doThing(){
var arr = ["a", "b", "c", "d"]
  for(let a of arr){
let newDiv = document.createElement("div")
  console.log(a)
  newDiv.textContent = a 
  document.body.appendChild(newDiv)
  }
}
