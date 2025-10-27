import {useRef} from "react"
const FromNoControl = ()=>{

 const text = useRef("") 
    return (
      <>

      <form>
<label>
Texto:
  <input type="text" ref={text}  />
<button onClick={()=> {
    alert(text.current?.value)
  
}
}>click me</button>
  
 
</label>
      </form>
      </>
    )
}


export default FromNoControl
