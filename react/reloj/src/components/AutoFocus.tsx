import {useRef, useState, useEffect} from "react"

const AutoFocus = ()=>{
  const focus = useRef(null)
  const focus1 = useRef(0)
  
  const counting = ()=>{
      
      focus1.current += 1
      console.log(focus1.current);
      
  }
  useEffect(()=>{
      focus.current.focus()

  }, [])
  return (
    <>
    <form>
<label>Inputs: </label>
<input type="text" ref={focus} onClickCapture={counting}/>
    </form>
    </>
  )

}


export default AutoFocus 
