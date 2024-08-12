function sumNoDuplicates(numList) {
    const frequency = {};
  
      numList.forEach(num => {
          frequency[num] = (frequency[num] || 0) + 1;
      });
  
      const sum = numList.reduce((acc, num) => {
          return frequency[num] === 1 ? acc + num : acc;
      }, 0);
  
      return sum;
}