function esperar(ms){
  return new Promise((resolve)=>{
    setTimeout(() => {      
      resolve()
    }, ms);
  })
}

async function res(){
console.log("Inicio del proceso...");
await esperar(4000).then(()=> console.log("Cargando configuración..."))
await esperar(1500).then(()=> console.log("Proceso completado"))
}


res()
