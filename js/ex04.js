const inc = function  crearContador(inicio, paso){
  while(paso > 0){
    inicio++
    paso--;
  }
  return inicio 
} 

let res = inc(5,3)
res = inc(res, 2)
console.log(res)
