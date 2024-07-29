const arr = [1, 2, '7', '20']


function sumMix(x){
    const arrNum = x.map(Number); 

       let sum = 0; // Инициализация переменной sum
        for (let i = 0; i < arrNum.length; i++) {
           sum += arrNum[i]; // Правильное суммирование
        }
    return sum;
}

console.log(sumMix(arr))