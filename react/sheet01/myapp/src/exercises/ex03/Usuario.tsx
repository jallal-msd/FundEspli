
export interface user {
      nombre:string , 
      eded?: number
    }
const user1 = {nombre:"meow",  edad:29}
const Usuario = ()=>{
        return (
          <p> Nombre: {user1.nombre} (edad:{user1.edad}) </p>
        )
    
}


export default Usuario
