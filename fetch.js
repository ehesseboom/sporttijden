const idAjax = 133772;
const idBarcelona = 133739;
const urlsToFetch = [
  `https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=${idAjax}`,
  `https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=${idBarcelona}`,
  `https://f1api.dev/api/current/next`,
];

const fetchURLs = async (urls) => {
  try {
    const promises = urls.map((url) => fetch(url));
    const responses = await Promise.all(promises);
    const data = await Promise.all(
      responses.map((response) => response.json()),
    );

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

fetchURLs(urlsToFetch)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
