import {useState, useEffect} from 'react'
function CustomHook(endpoint){
const [data, setData]:[] = useState([])
const [carga, setCarga]:[] = useState(false)
const controller = new AbortController()
const signal = controller.signal

  const fetching =  async ()=>{ 
    const ftch =  await fetch(endpoint, {signal})
    if(!ftch.ok){
      throw new Error("Http error")
    }
    return ftch.json()
    .then(result =>{
    console.log("here", result);
    setData(result)
    setCarga(true)
    })      
  }
  useEffect(()=> {
      
        fetching()
        if(data.length == 0 ){
          setData([])
        }
        return ()=>{
          // setData([])
          controller.abort()
        }
  },[endpoint])

  return {data,carga}
}
export default CustomHook
