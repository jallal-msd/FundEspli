import {useState, useEffect } from "react"

const loginPanel = ()=>{
    const [logged, setLogged] = useState(false)
    const user = "Alan"

    const [login, setLoging] = useState("Login")
    useEffect(()=>{
        
        console.log(login);
        
    }, [])
    const handleChange = ()=>{
       setLogged(!logged)
       if( login == "Login") {
         setLoging("Logout")
       }else {
          setLoging("Login")
       }

    }
    
    
    return (
      <>

    { !logged ? (<p>iniciar seasion </p>): 
      (<p>Bienvenido </p>)  
    }
    { logged && user.startsWith("A") ? (<p>"que gusto verte !"</p>) : (<p></p>) }
    
    <button onClick={handleChange}>{login}</button>
      </>

    )

}

export default loginPanel 
