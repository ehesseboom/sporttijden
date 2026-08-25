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

// Formatting the time
const timeFormat = new Intl.DateTimeFormat("nl-NL", {
  hour: "numeric",
  minute: "numeric",
  timeZone: "Europe/Amsterdam",
});

// Formatting the date
const dateFormat = new Intl.DateTimeFormat("nl-NL", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

// Capitalizing the first letter of the weekday
function capitalization(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

fetchURLs(urlsToFetch)
  .then((data) => {
    // Ajax
    const league1 = data[0].events[0].strLeague;
    const event1 = data[0].events[0].strEvent;
    const timestamp1 = Date.parse(data[0].events[0].strTimestamp + "Z");
    const time1 = timeFormat.format(timestamp1);
    const date1 = capitalization(dateFormat.format(timestamp1));

    // FC Barcelona
    const league2 = data[1].events[0].strLeague;
    const event2 = data[1].events[0].strEvent;
    const timestamp2 = Date.parse(data[1].events[0].strTimestamp + "Z");
    const time2 = timeFormat.format(timestamp2);
    const date2 = capitalization(dateFormat.format(timestamp2));

    // F1
    const raceName = data[2].race[0].raceName;

    const raceTime = data[2].race[0].schedule.race.time;
    const raceDate = data[2].race[0].schedule.race.date;

    const qualyTime = data[2].race[0].schedule.qualy.time;
    const qualyDate = data[2].race[0].schedule.qualy.date;

    const fp1Time = data[2].race[0].schedule.fp1.time;
    const fp1Date = data[2].race[0].schedule.fp1.date;

    const fp2Time = data[2].race[0].schedule.fp2.time;
    const fp2Date = data[2].race[0].schedule.fp2.date;

    const fp3Time = data[2].race[0].schedule.fp3.time;
    const fp3Date = data[2].race[0].schedule.fp3.date;

    const sprintRaceTime = data[2].race[0].schedule.sprintRace.time;
    const sprintRaceDate = data[2].race[0].schedule.sprintRace.date;

    const sprintQualyTime = data[2].race[0].schedule.sprintQualy.time;
    const sprintQualyDate = data[2].race[0].schedule.sprintQualy.date;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
