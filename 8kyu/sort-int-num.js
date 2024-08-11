function descendingOrder(n){
  //...
  let newNum = n.toString()
  newNum.split('')
  const newArr = []
  for(let i = 0; i < newNum.length; i++) {
    const element = Number(newNum[i])
    newArr.push(element)
  }
  newArr.sort((a, b) => {
    return b - a
  })
  return Number(newArr.join(''))
}


// function descendingOrder(n){
//     //...
//       return Number (
//         n
//         .toString()
//         .split('')
//         .sort((a, b) => b - a)
//         .join('')
//       )
//     }