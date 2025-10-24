// import './App.css'
// import User from "./exercises/ex03/Usuario"
// // import Saludo from "./exercises/ex01/Saludo"
// import Comp from "./exercises/ex02/Composicion"
//
// import Login from "./exercises/ex04/PanelLogin"
import ListOfUsers from "./exercises/ex05/ListaUsuarios"

function App() {
  // const [count, setCount] = useState(0)
//   const usuarios = [
// { id: 1, nombre: "María" },
// { id: 2, nombre: "Juan" },
// { id: 3, nombre: "Laura" }]
  //
const usuarios = [
{ id: 1, nombre: 'Ana', activo: true },
{ id: 2, nombre: 'Carlos', activo: false },
{ id: 3, nombre: 'Sofía', activo: true }
]

  return (
    <div>
    <ListOfUsers usuarios = {usuarios}/>
    {/* <Comp /> */}
    {/* <User /> */}
    {/* <Login logueado={true}/> */}
    </div>
  )
}

export default App
