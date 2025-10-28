import {useState , useEffect } from "react"

const Reloj = ()=>{
const [reloj, setReloj] = useState(new Date().toLocaleTimeString())
useEffect(()=>{
 const interval =  setInterval(()=> {
 setReloj(new Date().toLocaleTimeString())

 }, 1000)

 return ()=>{
clearInterval(interval);
 }
     

}, [reloj])

  return (
    <>
    <p>Reloj</p>
    <p>{reloj}</p>
    </>
  )

}

export default Reloj;
