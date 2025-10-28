
import {useState , useEffect } from "react"

const Timer = ()=>{
const [timer, setTimer] = useState(0)
  useEffect(()=>{
     const interval = setInterval(()=>{
        setTimer((prev) => prev + 1 )

     }, 1000)
    return ()=>{
      clearInterval(interval)
    }
})
  

  return (
    <>
<p>{timer}</p>
    </>
  )

}

export default Timer 
