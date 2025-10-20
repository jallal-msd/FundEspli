
// function fun2(callback){
// setTimeout(() => {
//   console.log("consulta base de datos")
//   callback()
// }, 2000);
//
// }
// function fun3(callback){
//
// setTimeout(() => {
//   console.log("processando datos")
//   callback()
// }, 1000);
// }
//

// fun2(()=>{
//   fun3(()=>{
//   console.log("Operacion completa")
//   })
// })


function p1(msg, delay){
  return new Promise((resolve)=>{
    setTimeout(() => {
     console.log(msg) 
      resolve()
    }, delay);
  })
}


p1("consultando base de datos", 2000)
  .then(()=>p1("processando", 1000))
  .then(()=> console.log("completo"))

