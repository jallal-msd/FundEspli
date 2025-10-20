
async function ftch(){
  const res = await fetch("https://randomuser.me/api/?results=3")
  const finallRes =await  res.json()
  const str = finallRes.results
 str.map((person)=>{
   console.log(person.name.first)
   console.log(person.name.last)
   console.log(person.email)
   console.log(person.location.country)
 }) 

}

ftch()
