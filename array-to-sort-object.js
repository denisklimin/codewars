function separateTypes(input) {
    let obj = {
      number: [],
      boolean: [],
      string: []
    }

    for(let i = 0; i < input.length; i++) {
      if(typeof input[i] === 'number') {
        obj.number.push(input[i])
      } else if(typeof input[i] === 'string') {
        obj.string.push(input[i])
      } else if(typeof input[i] === 'boolean') {
        obj.boolean.push(input[i])
      } else delete obj.boolean
    }
  
    for (let key in obj) {
      if (obj[key].length === 0) {
        delete obj[key];
      }
    }
  
    //// Optrion 2
    // if (obj.boolean.length === 0) {
    //   delete obj.boolean
    // }
    // if (obj.string.length === 0) {
    //   delete obj.string
    // }
    // if (obj.number.length === 0) {
    //   delete obj.number
    // }
  
    return obj
}

//// OPTION 2

// function separateTypes(input) {

//     let objSort = input.reduce((type, value) => {
//       if(typeof value === 'number') {
//         type.number.push(value)
//       } else if(typeof value === 'string') {
//         type.string.push(value)
//       } else if(typeof value === 'boolean') {
//         type.boolean.push(value)
//       }
//       return type
//     }, {number: [], boolean: [], string: []})
  
//     for (let key in objSort) {
//       if (objSort[key].length === 0) {
//         delete objSort[key];
//       }
//     }
//     return objSort
//   }