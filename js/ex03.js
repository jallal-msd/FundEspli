 function procesar(lista, transformador){
   let i = 0;
   for(let s of lista){
     transformador(s, i++)
   }
 } 
var res = []; 
function transformador(str, ind){
  res[ind] = str.toUpperCase();
}

var arr = ["samuel", "rtard", "kepYourselfSafe"]
procesar(arr, transformador)
console.log(res)

function etiquet(ind, str){
 // no idea what i am suppose to do here 
}
