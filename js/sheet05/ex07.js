async function ftch(id){

  const res = await fetch(`https://fakestoreapi.com/products/{id}`)
  // const resJson = await res.json()
  console.log(res)
}


ftch(1)
ftch(2)
ftch(3)
