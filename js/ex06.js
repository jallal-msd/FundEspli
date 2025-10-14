

let persona = {
  nombre : "lucia"
}

function saludar(ciudad) {
  console.log(`Soy ${this.nombre} de ${ciudad}`)

}
saludar.call(persona, "twat");
saludar.apply(persona, ["wasi"]);


let res = saludar.bind((persona), "ddd")

res()

