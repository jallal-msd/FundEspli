const a =[1,3,2]

a.sort();
//inmutable
const b = a.slice()
//inmutable  return new array
const c = a.toReversed()
//inmutable  return new array
const d = a.with(0,99);
//inmutable  return new array


console.log(a)
console.log(b)
console.log(c)
console.log(d)
