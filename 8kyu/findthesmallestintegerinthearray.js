function findSmallestInt(arr) {
    //your code here
    let num = arr[0];
    for(let i = 0; i < arr.length; i++) {
    if(num > arr[i]) {
        num = arr[i];
    }
    }
    return num;
}