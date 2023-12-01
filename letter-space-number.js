function letterSpaceNumber(str) {
    // Utiliser une expression régulière pour trouver les occurrences correspondantes
    let array = str.match(/([a-zA-Z0-9_])\s(\d\b)/g);
    return array !== null ? array : [];
  }
