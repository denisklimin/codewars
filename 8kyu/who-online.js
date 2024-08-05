const whosOnline = (friends) => {
    // Your code here...
    return friends.reduce((wOnline, friend) => {
        if(friend.lastActivity >= 100)
            friend.status = 'away'
            wOnline[friend.status] = [`${friend.username}`]
        return wOnline
    }, {})
}

// Имена по статусу через запятую в одном массиве 👇

// const whosOnline = (friends) => {
//     return friends.reduce((wOnline, friend) => {
//         if (friend.lastActivity >= 100) {
//             friend.status = 'away'
//         }
//         if (!wOnline[friend.status]) {
//             wOnline[friend.status] = friend.username
//         } else {
//             wOnline[friend.status] += `, ${friend.username}`
//         }
//         return wOnline
//     }, {})
// }