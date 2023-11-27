  function get(key) {
    if (this.sourceObject.hasOwnProperty(key)) {
       return this.sourceObject[key];
    } else {
       return undefined;
    }
   }
   
   function set(key, value) {
    this.sourceObject[key] = value;
    return value;
   }

   console.log(set)
   console.log(get)