import {useState} from 'react'


const Form = ()=>{
const [text, setText] = useState("")
const [ visible , setVisible] = useState(false)

const handleChange = (e)=>{
  
  setText(e.target.value)
}
    return (
      <>

      <form>
<label>
Texto:
  <input type="text" value={text} onChange={handleChange} />
<button onClick={(e)=> {

e.preventDefault();  
  setVisible(!visible)
  console.log(visible);
  
}
}>click me</button>
  
 
</label>
      </form>
      {visible ? <p>{text}</p> : <p></p> }
      </>
    )
}

export default Form
