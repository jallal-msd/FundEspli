const data = [1, [2, 3], [[4], 5]];


var depth = 1;

// var res = []
// flatted.flatMap((val)=>{
  data.flatMap((val) =>{
    if(Array.isArray(val)){
    val.reduce((inVal) => {
        if(Array.isArray(inVal)){
          console.log("here"+ inVal)
          depth++;
        }
    })
    }
})

 const flatted = data.flat(depth)

//
 console.log(flatted)
