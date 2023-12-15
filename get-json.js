function getURL(path, params) {
  const url = new URLSearchParams(params);
  const validUrl = path + "?" + url.toString();
  return validUrl;
}

async function getJSON(path, params) {
  try {
    const url = getURL(path, params);

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

const fakeFetch = async ({ data, error, ...opts } = {}) => ({
  ok: !opts.status,
  type: "basic",
  status: 200,
  statusText: "OK",
  json: async () => ({ data, error }),
  text: async () => JSON.stringify({ data, error }),
  ...opts,
});

const t = async ({ eq }) => {
  // check url parsing
  let url;
  fetch = async (arg) => fakeFetch({ url: (url = arg) });
  const pending = await getJSON("/test", { query: "hello world", b: 5 });
  return eq(url, "/test?query=hello+world&b=5");
};

console.log(t);
