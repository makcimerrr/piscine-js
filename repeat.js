function repeat(str, number){
    let mood = ""
    for (let i = 0; i < number; i++) {
        mood += str;
      }
      return mood
}

console.log(repeat("Hello There",2))