  function get(key) {
    if (sourceObject.hasOwnProperty(key)) {
       return sourceObject[key];
    } else {
       return undefined;
    }
   }
   
   function set(key, value) {
    sourceObject[key] = value;
    return value;
   }