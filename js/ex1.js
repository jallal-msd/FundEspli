
function FormaterA(nombre , apellido) {
  if((!nombre || !apellido || typeof(nombre) !== 'string' || typeof(apellido) !== 'string' ))  {
      throw new TypeError("nombre of type  : " + typeof(nombre) + " and apellido of type: " + typeof(apellido))

  }else{

  return (nombre+ "," + apellido)

  }
}

const FormaterB = function (nombre , apellido) {
  if((!nombre || !apellido || typeof(nombre) !== 'string' || typeof(apellido) !== 'string' ))  {
      throw new TypeError("nombre of type  : " + typeof(nombre) + " and apellido of type: " + typeof(apellido))

  }else{

  return (nombre+ "," + apellido)

  }

}
const FormaterC = (nombre , apellido) =>{
  if((!nombre || !apellido || typeof(nombre) !== 'string' || typeof(apellido) !== 'string' ))  {
      throw new TypeError("nombre of type  : " + typeof(nombre) + " and apellido of type: " + typeof(apellido))

  }else{

  return (nombre+ "," + apellido)

  }
}

console.log(FormaterA("a", "1"))
console.log(FormaterB("23", "app"))
console.log(FormaterC("nom", "app"))
