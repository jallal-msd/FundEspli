
import {useState, useEffect} from "react" 

const RoomStatus = ({roomId})=>{

const promise = new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log("Connecting to roomId: " + roomId )
        
        resolve()
      }, 1000);

    
  })
  // const [roomId, setId] = useState("")
  useEffect(()=>{
        promise.then(()=> console.log("Connected to room " + roomId)) 
        
        return ()=>{

        console.log("Disconnected from room: " + roomId )
        }
  },[roomId])

  return (
    <p>"yellow"</p>
  )
}

export default RoomStatus 
