export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName("a"));
  const nonArchitects = Array.from(document.getElementsByTagName("span"));
  return [architects, nonArchitects];
};

export const getClassical = () => {
  const architects = Array.from(document.getElementsByTagName("a"));
  const classicalArchitects = Array.from(
    document.getElementsByClassName("classical")
  );
  const nonClassicalArchitects = architects.filter(
    (element) => !element.classList.contains("classical")
  );
  return [classicalArchitects, nonClassicalArchitects];
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
  const activeClassicalArchitects = classicalArchitects.filter((element) =>
    element.classList.contains("active")
  );

  const response = activeClassicalArchitects.filter(
    (element) => element.id != "BonannoPisano"
  );
  return [result, response];
};
