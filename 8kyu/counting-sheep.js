function countSheeps(sheep) {
    // TODO
    return sheep.reduce((acc, value) => {
        return acc + (value ? 1 : 0);
    }, 0);
}