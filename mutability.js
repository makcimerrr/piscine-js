const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
   }
   
   // Création des copies de person
   const clone1 = JSON.parse(JSON.stringify(person));
   const clone2 = JSON.parse(JSON.stringify(person));
   
   // Définir l'égalité
   const samePerson = person;
   
   // Ajouter les modifs
   person.age += 1;
   person.country = 'FR';
   
   console.log(clone1);
   console.log(clone2);
   console.log(samePerson); 