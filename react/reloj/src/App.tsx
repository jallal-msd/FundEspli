import {useState } from 'react'
// import './App.css'
import Reloj from "./components/reloj"
import Timer from "./components/timer"
import Salud from "./components/Saludo"
import Room from "./components/RoomStatus"
import User from "./components/UserList"
function App() {
  const [roomId, setId] = useState(0)
  const [ep,setEp] = useState("https://jsonplaceholder.typicode.com/users")
  const handleChange = (e)=>{
      setId(e.target.value)
  }
  const handleChangeKey = (e)=>{
    if(e.key === 'Enter'){
      e.preventDefault()
      console.log(e.target.value)
      setEp(e.target.value)
    }
  }
  return (
    <>

{/*     <Reloj/>  */}
{/*     <Timer/> */}
{/*     <Salud/> */}
{/* <select name="rooms" id="roomId" onChange={handleChange}> */}
{/*   <option value="1">1</option> */}
{/*   <option value="2">2</option> */}
{/*   <option value="3">3</option> */}
{/*   <option value="4">4</option> */}
{/* </select> */}
    <form>
    <label>Endpoint : </label>
    <input type="text" id="ep" onKeyDown={handleChangeKey}/>
    </form>
    <Room roomId={roomId}/>
    <User endpoint={ep}/>
    </>
  )
}

export default App
