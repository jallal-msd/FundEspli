const text = 'hola hola adios HOLA';

splitText = text.split(" ")
// console.log(splitText)
var freq = 0;
for(let str of splitText){
  console.log(str)
  if(str !== str.toUpperCase()){
    freq++
  }
}

console.log("frequencia de mini es :" + freq)
