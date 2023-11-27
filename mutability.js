const clone1 = Object.freeze ({
    name: Object.freeze('Rick'),
    age: Object.freeze(78),
    country: Object.freeze('FR'),
  });

  const clone2 = Object.freeze ({
    name: Object.freeze('Rick'),
    age: Object.freeze(78),
    country: Object.freeze('FR'),
  });

  const samePerson = person ={
    name: 'Rick',
    age: 78,
    country: 'FR',
  }