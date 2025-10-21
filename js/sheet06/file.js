var searching = false 
var bdy = document.getElementById("bdy")
bdy.classList.add("row","d-flex","justify-content-md-center","gap-3")

const map  = new Map()
async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const FinalRes = await res.json()
  const str = FinalRes.results

   str.map((pok)=>{
    getDetails(pok.url)
  })
  
}

async function getDetails(url){
  const res = await fetch(url)
  const finalRes = await res.json()

  const id = finalRes.id
  const name = finalRes.forms[0].name
  const img = finalRes.cries.legacy

  let pokemons = {}
  pokemons.name = name
  pokemons.id= id
  pokemons.img = img
  pokemons.favourite = false
  map.set(name, pokemons)
  createElementInsideDome(pokemons)
  // await list.push(pokemons)
  // console.log(img)
  // console.log(id)
  // console.log(name)
}

  // <div class="card" style="width: 18rem;">
  //   <img class="card-img-top" src="..." alt="Card image cap">
  //   <div class="card-body">
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
  //       content.</p>
  //   </div>
  // </div>
  //
function createElementInsideDome(pokemons){
  let card = document.createElement("div")
  card.classList.add("card","col-4","p-2")
  card.setAttribute("id", "card")
  card.style.width = "22rem"

  let img = document.createElement("img")
  console.log(pokemons.id)
  card.addEventListener("click" , ()=>{
      pokemons.favourite = !pokemons.favourite
    console.log(pokemons.favourite)
    if(pokemons.favourite){
    img.style.backgroundColor = "red"
      // localStorage.SetItem(pokemons.name, pokemons)
      localStorage.setItem(pokemons.name, JSON.stringify(pokemons));
    }else {

      localStorage.removeItem(pokemons.name);
    img.style.backgroundColor = "white"
    }
  })
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemons.id}.png`
  img.classList.add("card-img-top")

  let card_text = document.createElement("p")
  card_text.classList.add("card-text")
  card_text.textContent = pokemons.name

  card.append(card_text)
  card.appendChild(img)
  bdy.appendChild(card)
}


function Searching(pokemon,map){
  console.log("i am  hereeee retard")
  console.log(map)
  bdy.innerHTML=""
   let res = map.get(pokemon)
  console.log(res)
    createElementInsideDome(res)
    
}
  const srch = document.querySelector("form")
  srch.addEventListener("submit", (e)=>{
     e.preventDefault() 
    const input = document.querySelector("input")
    Searching(input.value, map)
  searching = true
      
  })


///get all keys from localStorage
function allStorage(){

  let list = []
  var keys = Object.keys(localStorage)
  var i = 0, key 

  for(; key = keys[i]; i++){
    list.push(localStorage.getItem(key))
  }
  return list
}
// const fav = document.getElementById("cards")
// fav.addEventListener("click", (e)=>{
//    e.style.backgroundColor = '#0061ff'
// })
 let fav = document.getElementById("fav")
 fav.addEventListener("click", ()=>{
    bdy.innerHTML= ""
    let list = allStorage()
    list.map((pok)=>{
      let obj = JSON.parse(pok)
        createElementInsideDome(obj)
    })
     // createElementInsideDome(items[1])
 })

 getPokemons()


