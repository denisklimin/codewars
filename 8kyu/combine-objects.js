function combine(...objs) {
    // Создаем объект для хранения объединенных результатов
    const result = {};
  
    // Проходим через все переданные объекты
    for (const obj of objs) {
      for (const key in obj) {
        if (result.hasOwnProperty(key)) {
          // Если ключ уже есть в результирующем объекте, добавляем к существующему значению
          result[key] += obj[key];
        } else {
          // Если ключа нет в результирующем объекте, создаем новый ключ со значением
          result[key] = obj[key];
        }
      }
    }
  
    return result;
  }