
function IconoNotification({emoji , text}){
       return (<p>Notification {emoji} : {text}</p>)
  }

const Panel = (props)=> {
  return (
    <>
          <p> tienes {props.count} mensajes </p>
               <IconoNotification emoji={props.emoji} text={props.text}/>  
    </>
  )
  }

export default Panel
