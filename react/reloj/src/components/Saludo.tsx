import {useState, useEffect }  from "react"
const Saludo = ()=>{

  
const [greet, setGreet] = useState("")
  const handleChange = (e)=>{
      // greet = e.target.elements.name;
      e.preventDefault()
      
      setGreet(e.target.elements.name.value);
      
  }

  useEffect(()=>{

      console.log(greet);
      

  }, [greet])

  return (
<>
<p>hello {greet}</p>
<form onSubmit={handleChange}>
<label>Name: </label>
<input type="text" id="name" name="inp" />
<button  >Click me </button>
    </form>
</>
  
  )

}

export default Saludo
