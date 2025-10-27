import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Mensaje from "./componenets/MensajePersonalizado"
//
//
// import Panel from "./componenets/Panel"
// import Visible from "./componenets/Visible"
// import Form from "./componenets/Form"
// import Form from "./componenets/FromNoControl.tsx"
import Select  from "./componenets/SelectColor"

// function Cabecera ({data}){
//     return <h1>{data}</h1>
// }
//
// function Tarjeta({children}){
//   return (
//     <div style={{border:"2px solid red"}} >
//     {children}
//     </div>
//   )
// }

function App() {
const [color , setColor] = useState("red")
const CajaColor = ({color})=>{
    return <div style={{color:color}}>yellow</div>
}
  return (
    <>
    {/* <Tarjeta> */}
    {/* <Cabecera data="lol"/> */}
    {/* <p>yellow</p> */}
    {/* </Tarjeta> */}
    {/* <Mensaje texto="yo"  color="lightblue" /> */}
    {/* <Mensaje texto="meow"  color="black" /> */}
    {/* <Mensaje texto="Eric"  color="tomato" /> */}


    {/* <Panel emoji="🔔" text="yoo"  count={3} /> */}
    {/* <Form /> */}
    <Select setColor={setColor} /> 
    <CajaColor color={color}/>

    </>
  )
}

export default App
