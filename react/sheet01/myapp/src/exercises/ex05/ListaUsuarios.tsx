
const ListaUsuario = (props) =>{
  const usuarios = props.usuarios 
  return ( 
    <ul>
    {usuarios.map(user => {
        if(user.activo){  
          return <li>{user.nombre}</li>
        }
    })}
</ul>
  )
}

export default ListaUsuario
