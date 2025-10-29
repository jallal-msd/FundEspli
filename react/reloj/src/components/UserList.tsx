// import {useState,useEffect} from 'react'
import customHook from "./CustomHook"

const UserList = ({endpoint})=>{
// const [data, setData]:[] = useState([])
// const [carga, setCarga]:[] = useState(false)
//
//   const fetching =  async ()=>{ 
//     const ftch =  await fetch(endpoint)
//     if(!ftch.ok){
//       throw new Error("Http error")
//     }
//     return ftch.json()
//     .then(result =>{
//     console.log("here", result);
//     setData(result)
//     setCarga(true)
//     })      
//   }
//   useEffect(()=> {
//
//         fetching()
//         if(data.length == 0 ){
//           setData([])
//         }
//         return ()=>{
//           // setData([])
//           controller.abort()
//         }
//   },[endpoint])
//
const {data, carga} = customHook(endpoint)
console.log(data, carga);

  return (
    <>
    { carga ? <p></p> : <p>"cargando..."</p>}
    {data.length == 0 ? (<p>no data is fetched yet</p>
    ):(

    <ul>
    {data.map((user)=>(

      <li>{user?.name}</li>
    ) 
    )}
    </ul>
    )


    }
    </>
  )
}
export default UserList
