function all(promisesObject) {
  const keys = Object.keys(promisesObject);
  const results = {};

  function* resolveSequentially(index) {
    if (index === keys.length) {
      // Toutes les promesses ont été résolues, retourner les résultats
      return results;
    }

    const key = keys[index];
    const promise = promisesObject[key];

    // Attendre la résolution de la promesse actuelle
    results[key] = yield promise;

    // Passer à la promesse suivante de manière récursive
    yield* resolveSequentially(index + 1);
  }

  // Créer un générateur initial
  const generator = resolveSequentially(0);

  // Fonction pour traiter les étapes du générateur
  function handleNext(value) {
    const next = generator.next(value);

    if (!next.done) {
      // Si le générateur n'est pas terminé, résoudre la prochaine promesse
      next.value.then(handleNext);
    }
  }

  // Démarrer la résolution séquentielle avec la première promesse
  handleNext();

  // Retourner une promesse résolue, car nous n'avons pas le droit d'utiliser Promise.then
  return Promise.resolve(generator);
}
