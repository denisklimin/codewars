function friend(friends){
    //your code here
    const newArr = []
    
    for (let i = 0; i < friends.length; i++) {

        if (friends[i].length === 4) {
            newArr.push(friends[i])
        }
        
    }
    return newArr
}