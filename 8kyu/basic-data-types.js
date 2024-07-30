// Переименуйте функцию, чтобы избежать конфликта имен
function animal(obj) {
    // Форматируем строку в соответствии с требуемым шаблоном
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }
  
  // Примеры использования функции (для проверки)
  console.log(animal({name:"dog", legs:4, color:"white"})); // Output: "This white dog has 4 legs."
  console.log(animal({name:"cock", legs:2, color:"red"}));  // Output: "This red cock has 2 legs."
  console.log(animal({name:"rabbit", legs:4, color:"gray"}));// Output: "This gray rabbit has 4 legs."