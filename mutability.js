 // Create deep copies of person
   const clone1 = JSON.parse(JSON.stringify(person));
   const clone2 = JSON.parse(JSON.stringify(person));
   
   // Create a reference to the same object
   const samePerson = person;
   
   // Modify the original person object
   person.age += 1;
   person.country = 'FR';
   
   console.log(clone1); // Output: { name: 'Rick', age: 77, country: 'US' }
   console.log(clone2); // Output: { name: 'Rick', age: 77, country: 'US' }
   console.log(samePerson); // Output: { name: 'Rick', age: 78, country: 'FR' }