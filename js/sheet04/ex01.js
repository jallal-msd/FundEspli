
let h2 = document.createElement("h2")
h2.textContent = "Mis tareas"

let ul = document.createElement("ul")
ul.setAttribute("id", "lista-tareas")

let li1 = document.createElement("li")
li1.textContent = "Aprender javascript"
li1.classList.add("tarea")
let li2 = document.createElement("li")
li2.textContent = "Practicar Dom"
li2.classList.add("tarea")

ul.appendChild(li1)
ul.appendChild(li2)

document.body.appendChild(h2)
document.body.appendChild(ul)

let span = document.createElement("span")
let msg = "no hay tareas pendioentes"
var count = document.getElementsByClassName("tarea").length
let msgtitle;
count == 0 ? msgtitle = msg : msgtitle = count 
span.textContent = count
document.title = document.title +"--"+  msgtitle

function countT(){

 count = document.getElementsByClassName("tarea").length
let tit = document.title
  let spl = tit.split("--")
document.title = spl[0]+"--"+  count
}


let form = document.querySelector("form")
console.log(form.textContent)
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  var camp = document.querySelector("input")
  if(camp.value == ""){
  alert("campo vacio")
  }else{
    let newLi = document.createElement("li")
    newLi.textContent = camp.value
    newLi.classList.add("tarea")
    ul.appendChild(newLi)

  }
    countT()
  changes()
})

var index = 0
function changes(){
// let btn2 = document.createElement("button")
var iter = ul.parentNode.parentNode.getElementsByClassName("tarea")
for(index  ; index<iter.length; index++ ){
  let btn2 = document.createElement("button")
  btn2.textContent = "complete"
btn2.classList.add("complete")
  btn2.setAttribute("border-radius", "8px")
  iter[index].appendChild(btn2)

  let btn3 = document.createElement("button")
  btn3.textContent = "delete"
btn3.classList.add("delete")
  btn3.setAttribute("border-radius", "8px")
  iter[index].appendChild(btn3)
}



ul.addEventListener("click", (e) =>{
    let targ = e.target
  console.log(targ.className)
  if(targ.className == "complete"){
    targ.parentNode.style.color = "red"
    console.log("i count is " + index)
  }else{
    targ.parentNode.remove()
    countT()
    index = count
  }
  
//   btn2.parentNode.style.color = "red"
})
}
changes()
countT()
//3
//
// ul.addEvenetListener("click", (e)=>{
//
//
// })


