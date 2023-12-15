async function getJSON(path, params) {
  try {
    const url = path + "?" + new URLSearchParams(params).toString();

    const response = await fetch(url);

    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    //Contient error ?
    if (json.error) {
      throw new Error(json.Error);
    }
    return json.data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
