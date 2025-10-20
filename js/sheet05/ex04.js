
function procesarTarea(){
  return new Promise((resolve, reject)=>{
    let a = Math.floor(Math.random() * 10)
    console.log(a)
    if( a > 5){
      resolve("resolve")
    }else(
      reject("reject")
    )
  })
}
async function procesar(){
  try{
    await Promise.all([
      await procesarTarea().then((msg)=> console.log(msg)),
       await procesarTarea().then((msg)=> console.log(msg)),
          await procesarTarea().then((msg)=> console.log(msg)),
    ]).then((msg)=> console.log(msg))
    .finally(()=> console.log("done"))
  }catch(error){
    console.log(error)
  }
  
  }

procesar()
