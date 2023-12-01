function sameAmount(inputString, regex1, regex2) {
    const matchCount1 = (inputString.match(regex1));
    const matchCount2 = (inputString.match(regex2));
  
    return matchCount1 !== null && matchCount2 !== null && matchCount1.length === matchCount2.length;
  }

  console.log(sameAmount('data', /q /, /qqqqqqq/))