import FetchURLs from "./FetchData.js";

const ExtractTimestamp = async () => {
  // Formatting the match time
  const timeFormat = new Intl.DateTimeFormat("nl-NL", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Amsterdam",
  });

  // Formatting the match date
  const dateFormat = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Formatting the F1 date
  const dateFormatF1 = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });

  // Capitalizing the first letter of the weekday
  function capitalization(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

    // Getting the F1 timestamp
    function timestampF1(session) {
      const time = data[2].race[0].schedule[session].time;
      const date = data[2].race[0].schedule[session].date;
      if (!date || !time) {
        return null;
      }
      return Date.parse(date + "T" + time);
    }

    // Getting the football timestamp
    function timestampFootball(dataIndex) {
      return Date.parse(data[dataIndex].events[0].strTimestamp + "Z");
    }

    const cleanData = {
      ajax: {
        competition: data[0].events[0].strLeague,
        match: data[0].events[0].strEvent,
        time: timeFormat.format(timestampFootball(0)),
        date: capitalization(dateFormat.format(timestampFootball(0))),
      },
      barcelona: {
        competition: data[1].events[0].strLeague,
        match: data[1].events[0].strEvent,
        time: timeFormat.format(timestampFootball(1)),
        date: capitalization(dateFormat.format(timestampFootball(1))),
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
