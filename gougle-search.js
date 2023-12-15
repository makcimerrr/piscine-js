// fake `getJSON` function
/*let getJSON = async (url) => url;*/

function queryServers(serverName, q) {
  const url1 = `/${serverName}?q=${q}`;
  const url2 = `/${serverName}_backup?q=${q}`;

  return Promise.race([
    getJSON(url1),
    getJSON(url2),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 80)
    ),
  ]);
}

async function gougleSearch(query) {
  try {
    const [webResult, imageResult, videoResult] = await Promise.all([
      queryServers("web", query),
      queryServers("image", query),
      queryServers("video", query),
    ]);

    return {
      web: webResult,
      image: imageResult,
      video: videoResult,
    };
  } catch (error) {
    throw error;
  }
}
