import FetchURLs from "./FetchData.js";

const ExtractTimestamp = async () => {
  // Formatting Football time
  const timeFormat = new Intl.DateTimeFormat("nl-NL", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Amsterdam",
  });

  // Formatting Football date
  const dateFormat = new Intl.DateTimeFormat("nl-NL", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  // Formatting F1 date
  const dateFormatF1 = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });

  // Capitalizing date
  function capitalization(str) {
    return str.toUpperCase().slice(0, -1);
    // slicing the dot at the end
  }

  function formatTime(formatter, timestamp) {
    return timestamp === null ? null : formatter.format(timestamp);
  }

  function formatDate(formatter, timestamp) {
    return timestamp === null
      ? null
      : capitalization(formatter.format(timestamp));
  }

  try {
    const data = await FetchURLs();

    // Formula 1 timestamp
    function timestampF1(session) {
      const time = data[2].race[0].schedule[session].time;
      const date = data[2].race[0].schedule[session].date;
      if (!date || !time) {
        return null;
      }
      return Date.parse(date + "T" + time);
    }

    // Football timestamp
    function timestampFootball(dataIndex) {
      return Date.parse(data[dataIndex].events[0].strTimestamp + "Z");
    }

    const cleanData = {
      ajax: {
        homeBadge: data[0].events[0].strHomeTeamBadge,
        awayBadge: data[0].events[0].strAwayTeamBadge,
        homeTeam: data[0].events[0].strHomeTeam,
        awayTeam: data[0].events[0].strAwayTeam,
        time: timeFormat.format(timestampFootball(0)),
        date: capitalization(dateFormat.format(timestampFootball(0))),
        timeStamp: timestampFootball(0),
      },
      barcelona: {
        homeBadge: data[1].events[0].strHomeTeamBadge,
        awayBadge: data[1].events[0].strAwayTeamBadge,
        homeTeam: data[1].events[0].strHomeTeam,
        awayTeam: data[1].events[0].strAwayTeam,
        time: timeFormat.format(timestampFootball(1)),
        date: capitalization(dateFormat.format(timestampFootball(1))),
        timeStamp: timestampFootball(1),
      },
      formula1: {
        grandPrix: data[2].race[0].raceName,
        race: {
          session: "Race",
          time: formatTime(timeFormat, timestampF1("race")),
          date: formatDate(dateFormatF1, timestampF1("race")),
        },
        qualy: {
          session: "Qualification",
          time: formatTime(timeFormat, timestampF1("qualy")),
          date: formatDate(dateFormatF1, timestampF1("qualy")),
        },
        fp1: {
          session: "FP1",
          time: formatTime(timeFormat, timestampF1("fp1")),
          date: formatDate(dateFormatF1, timestampF1("fp1")),
        },
        fp2: {
          session: "FP2",
          time: formatTime(timeFormat, timestampF1("fp2")),
          date: formatDate(dateFormatF1, timestampF1("fp2")),
        },
        fp3: {
          session: "FP3",
          time: formatTime(timeFormat, timestampF1("fp3")),
          date: formatDate(dateFormatF1, timestampF1("fp3")),
        },
        sprintRace: {
          session: "Sprint Race",
          time: formatTime(timeFormat, timestampF1("sprintRace")),
          date: formatDate(dateFormatF1, timestampF1("sprintRace")),
        },
        sprintQualy: {
          session: "Sprint Qualification",
          time: formatTime(timeFormat, timestampF1("sprintQualy")),
          date: formatDate(dateFormatF1, timestampF1("sprintQualy")),
        },
      },
    };

    // console.log("cleanData:", JSON.stringify(cleanData, null, 2));
    return cleanData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// ExtractTimestamp()
//   .then((data) => {
//     console.log("Result:", JSON.stringify(data, null, 2));
//   })
//   .catch((error) => {
//     console.error("Test failed:", error);
//   });

export default ExtractTimestamp;
