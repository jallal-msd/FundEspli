import {useState} from 'react'
const Visible = ()=>{
  const [visible, setVisible]  = useState(false)

const handleVisiblity = ()=> {
  
  setVisible(!visible)
  
  console.log(visible);
}

  return(
<>

    <button onClick = {handleVisiblity} >Click me</button> 
    { visible ? <p>yellow</p> : <p></p>}
</>
    
  )
  
}

export default Visible;
