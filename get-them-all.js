/*export const getArchitects = () => {
  const architectsArray = [];
  const nonArchitectsArray = [];

  for (const person of people) {
    if (person.tag === "a" && person.active) {
      const architectElement = document.createElement("a");
      architectElement.textContent = person.id;
      architectsArray.push(architectElement);
    } else {
      const nonArchitectElement = document.createElement(person.tag);
      nonArchitectElement.textContent = person.id;
      nonArchitectsArray.push(nonArchitectElement);
    }
  }

  return [architectsArray, nonArchitectsArray];
};*/

export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName("a"));
  const nonArchitects = Array.from(document.getElementsByTagName(":not(a)"));
  return [architects, nonArchitects];
};
