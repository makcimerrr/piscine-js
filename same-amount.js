function sameAmount(str, regex1, regex2) {
  rexp1 = new RegExp(regex1, "g");
    rexp2 = new RegExp(regex2, "g");
    let matchCount1 = str.match(regex1);
    let matchCount2 = str.match(regex2);
  
    return matchCount1 !== null && matchCount2 !== null && matchCount1.length === matchCount2.length;
  }

  console.log(!sameAmount('data', /q /, /qqqqqqq/))