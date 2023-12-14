function interpolation(options = {}) {
  const abscisse = (options.end - options.start) / options.step;
  const ordonnee = options.duration / options.step;
  let i = 0;
  const timer = setInterval(() => {
    if (i < options.step) {
      options.callback([options.start, ordonnee * (i + 1)]);
      options.start += abscisse;
      i++;
    } else {
      clearInterval(timer);
    }
  }, options.duration / options.step);
}
