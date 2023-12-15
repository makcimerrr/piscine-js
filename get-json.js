async function getJSON(path, params) {
  try {
    const url = path + "?" + new URLSearchParams(params).toString();

    const response = await fetch(url);

    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error(`Erreur: ${response.statusText}`);
    }

    const json = await response.json();

    //Contient data ou error ?
    if (json.hasOwnProperty("data")) {
      return json.data;
    } else if (json.hasOwnProperty("error")) {
      throw new Error(`Error: ${json.error}`);
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    throw error;
  }
}
