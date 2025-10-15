const users = [
{ id: 1, name: 'Ana', age: 28 },
{ id: 2, name: 'Luis', age: 17 },
{ id: 3, name: 'Zoe', age: 34 },
];
function mayoresMas(users){
  res = []
  users.map((user) =>{ 
    if(user.age > 18){
    res.push(user.name.toUpperCase())
    }
    })

  return res

}

console.log(mayoresMas(users))

