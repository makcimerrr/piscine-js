function sameAmount(inputString, regex1, regex2) {
    const matchCount1 = (inputString.match(regex1) || []).length;
    const matchCount2 = (inputString.match(regex2) || []).length;
  
    return matchCount1 === matchCount2;
  }