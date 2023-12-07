export const getArchitects = () => {
  let architectsList = [];
  const allA = document.getElementsByTagName("a");
  for (let i = 0; i < allA.length; i++) {
    architectsList.push(allA[i]);
  }
  return architectsList;
};

console.log(getArchitects(people));
