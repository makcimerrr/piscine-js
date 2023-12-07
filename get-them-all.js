export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName("a"));
  const nonArchitects = Array.from(document.getElementsByTagName("span"));
  return [architects, nonArchitects];
};

export const getClassical = () => {
  const classics = Array.from(document.getElementsByClassName("classical"));
  const nonClassics = Array.from(
    document.getElementsByClassName(":not(classical)")
  );
  return [classics, nonClassics];
};
export const getActive = () => {
  const classicalArchitects = Array.from(
    document.getElementsByClassName("classical")
  );
  const activeClassicalArchitects = classicalArchitects.filter((element) =>
    element.classList.contains("active")
  );
  const nonActiveClassicalArchitects = classicalArchitects.filter(
    (element) => !element.classList.contains("active")
  );
  return [activeClassicalArchitects, nonActiveClassicalArchitects];
};
export const getBonannoPisano = () => {
  const result = document.getElementById("BonannoPisano");
  const classicalArchitects = Array.from(
    document.getElementsByClassName("classical")
  );
  const nonActiveClassicalArchitects = classicalArchitects.filter(
    (element) => !element.classList.contains("active")
  );

  const response = nonActiveClassicalArchitects.filter((element) =>
    element.classList.contains(":not(#BonannoPisano)")
  );
  return [result, response];
};
