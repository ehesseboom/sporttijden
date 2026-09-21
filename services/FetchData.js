const FetchURLs = async () => {
  const urlsToFetch = [
    "https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=133772",
    "https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=133739",
    "https://www.thesportsdb.com/api/v1/json/123/eventsnext.php?id=133905",
    "https://api.jolpi.ca/ergast/f1/current/next.json",
  ];

  try {
    const promises = urlsToFetch.map((url) => fetch(url));
    const responses = await Promise.all(promises);
    const data = await Promise.all(
      responses.map((response) => response.json()),
    );

    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
  }
};

export default FetchURLs;
