// function sortByLength (array) {
//   // Return an array containing the same strings,
//   // ordered from shortest to longest
//   const newArr = []

//   const objEl = array.map(function (el) {
//     return { leng: el.length, value: el };
//   });


//   objEl.sort((a, b) => {
//     return a.leng - b.leng
//   })

  
//   objEl.map(function (el) {
//     newArr.push(el.value)
//   });

//   return newArr
// }

function sortByLength(array) {
    // Используем встроенный метод sort, сортируя строки по их длине
    return array.sort((a, b) => a.length - b.length);
}