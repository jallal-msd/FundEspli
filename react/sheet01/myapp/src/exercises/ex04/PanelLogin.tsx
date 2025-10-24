const PanelLogin = (props)=>{
   const logueado = props.logueado
  if (logueado){
  return <p>loaguado</p>
  }else{ 
  return <p>not </p>
  }
}


export default PanelLogin
