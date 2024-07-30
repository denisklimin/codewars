function addProperty(obj, prop, value) {
    // Add your code here
    if (obj.hasOwnProperty(prop)) {
     throw new Error ("error");
  //     console.log('Did not throw expected error');
    } else {
      obj[prop] = value;
    }
  }