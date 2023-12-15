// fake `getJSON` function
/*let getJSON = async (url) => url;*/

async function queryServers(serverName, q) {
  const url = "/" + serverName + "?q=" + q;
  const urlBackup = "/" + serverName + "_backup?q=" + q;
  const basicUrl = getJSON(url);
  const backupUrl = getJSON(urlBackup);
  const fastestResponse = await Promise.race([basicUrl, backupUrl]);
  return fastestResponse;
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
