function RNA(dnaStrand) {
    const dnaToRnaMap = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
  
    const rnaStrand = dnaStrand.split('').map(char => dnaToRnaMap[char]).join('');
  
    return rnaStrand;
  }
  
  function DNA(rnaStrand) {
    const rnaToDnaMap = { 'C': 'G', 'G': 'C', 'A': 'T', 'U': 'A' };
  
    const dnaStrand = rnaStrand.split('').map(char => rnaToDnaMap[char]).join('');
  
    return dnaStrand;
  }