async function series(entries) {
  const data = [];
  for (const func of entries) {
    await series.lock;
    try {
      const result = await func();
      data.push(result);
    } finally {
      series.lock = Promise.resolve();
    }
  }
  return data;
}
