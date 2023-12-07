export const getArchitects = () => {
  let architectsList = [];
  let spanList = [];
  const allA = document.getElementsByTagName("a");
  const allSpan = document.getElementsByTagName("span");
  for (let i = 0; i < allA.length; i++) {
    architectsList.push(allA[i]);
  }
  for (let i = 0; i < allSpan.length; i++) {
    spanList.push(allSpan[i]);
  }
  return architectsList, spanList;
};
