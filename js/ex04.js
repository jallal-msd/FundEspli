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


console.log("-----------------------------------")




function memoriz(fn){
  
  cache = []

  return function(n){
    index = n.toString()
    if(!cache[n]){
      console.log(cache[index]+ "i am here")
      cache[index] = fn(n)
    }
    return cache[index]
  }

}

function calculate(x){
  let a =0 
  for(let i =0; i< x; i++){
    for(let j = 0; j<x; j++){
      a = j + i;
    }
  }
  return a
  }


  var res1 = memoriz(calculate)
start = new Date().getTime();

console.log(calculate(90000))

console.log(new Date().getTime() - start + " -- with mem")
start = new Date().getTime();
console.log(res1(100000))
console.log(new Date().getTime() - start + " -- with mem")
