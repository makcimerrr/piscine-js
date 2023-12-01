function chunk(array, size) {
    if (array.length === 0 || size <= 0 || !Number.isInteger(size)) {
      return [];
    }
  
    const numChunks = Math.ceil(array.length / size);
  
    const chunks = [];
  
    for (let i = 0; i < numChunks; i++) {
      const start = i * size;
      const end = start + size;
      const chunk = array.slice(start, end);
      chunks.push(chunk);
    }
  
    return chunks;
  }