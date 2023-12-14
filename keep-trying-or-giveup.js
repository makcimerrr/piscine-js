function retry(count, callback) {
  try {
    return callback(count);
  } catch (error) {
    console.error(error);
  }
}
