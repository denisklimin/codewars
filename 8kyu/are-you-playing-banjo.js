function areYouPlayingBanjo(name) {
    // Implement me
    let newArr = name.split('')
    if(newArr[0] === 'R'|| newArr[0] === 'r') {
      return `${name} plays banjo`
    } else return `${name} does not play banjo`
  }