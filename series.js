async function series(entries) {
  return Promise.all(entries.map((func) => func()));
}
