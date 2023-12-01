function get(src, path) {
    const a = path.split('.');
  
    for (let i = 0; i < a.length; i++) {
      const key = a[i];
  
      if (src && typeof src === 'object' && key in src) {
        src = src[key];
      } else {
        return undefined;
      }
    }
  
    return src;
  }
  
const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get(src, path)) // -> 'peekaboo'