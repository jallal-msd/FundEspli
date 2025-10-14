function etiquetar(texto , reg){

  console.log(reg.match("absc"))
  if(!reg.match(texto)){
    return false 
  }else {
    return true;
  }


}

console.log(etiquetar("meaw", "^TS-\d+A\/N$"))

console.log("----------------------------------")
var res;
function sumatorio(base, ...nums){

  for(let i of nums){

    if(typeof(i) !== 'number'){
      console.log(typeof(i))
      continue
    }else{
      console.log(base)
      base += i;
    }

  }
}

arr = [1,2,3,4,5]
sumatorio(0, 10,1,2,'3',4);

console.log("----------------------------------")

function getMax(...arr){
  let max = 0;
  for(let a of arr){
    max = Math.max(max, a);
  }

  return max;

}

console.log(getMax(13,45,66,2,3,1));
