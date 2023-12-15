async function queryServers(serverName, q) {
  const url = `/${serverName}?q=${q}`;
  const urlBackup = `/${serverName}_backup?q=${q}`;
  const basicUrl = getJSON(url);
  const backupUrl = getJSON(urlBackup);
  const fastestResponse = await Promise.race([basicUrl, backupUrl]);
  return fastestResponse;
}

async function gougleSearch(q) {
  const servers = ["web", "image", "video"];
  const promises = servers.map((server) => queryServers(server, q));
  try {
    const results = await Promise.race([
      Promise.all(promises),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 80)
      ),
    ]);
    const resultObject = {};
    servers.forEach((server, index) => {
      resultObject[server] = results[index];
    });
    return resultObject;
  } catch (error) {
    throw error;
  }
}
