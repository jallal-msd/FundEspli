
function partition(arr, l, r){

  var pivot = arr[r]
  var ind = l-1
  for(let i = l; i<r; i++ ){
    console.log(arr[i] + ""  + pivot)
    if(arr[i] < pivot){
      swap(arr, ++ind , i)
      console.log("hereee" + arr[i])
    }
  }

  swap(arr, ind+1, r)
  return ind+1;

  
}

function swap(arr, i ,j){
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp 
}


function quickSort(arr, l, r){
  if(l < r){

    let pi = partition(arr, l, r)

    quickSort(arr,l,pi -1)
    quickSort(arr, pi+1, r)
  }
  
}

let arr = [10,20,50,30,40,22,341, 33 ,1,4]
// partition(arr, 0, arr.length-1)
quickSort(arr, 0, arr.length-1)
console.log(arr)
