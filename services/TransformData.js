import FetchURLs from "./FetchData.js";

const ExtractTimestamp = async () => {
  // Formatting time
  const timeFormat = new Intl.DateTimeFormat("nl-NL", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Amsterdam",
  });

  // Formatting date
  const dateFormat = new Intl.DateTimeFormat("nl-NL", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  // Capitalizing date
  function capitalization(str) {
    return str.toUpperCase().slice(0, -1);
    // slicing the dot at the end
  }

  try {
    const data = await FetchURLs();

    // Football timestamp
    function timestampFootball(dataIndex) {
      return Date.parse(data[dataIndex].events[0].strTimestamp + "Z");
    }

    // Formula 1 timestamp (excluding race)
    function timestampF1(dataIndex, session) {
      const sessionData = data[dataIndex].MRData.RaceTable.Races[0][session];
      if (!sessionData) return null;
      const date = sessionData.date;
      const time = sessionData.time;
      if (!date || !time) return null;
      return Date.parse(date + "T" + time);
    }

    // Formula 1 timestamp race
    const raceDate = data[3].MRData.RaceTable.Races[0].date;
    const raceTime = data[3].MRData.RaceTable.Races[0].time;
    const raceTimestamp = Date.parse(raceDate + "T" + raceTime);

    // Displayed data
    const cleanData = {
      ajax: {
        league: data[0].events[0].strLeague,
        homeBadge: data[0].events[0].strHomeTeamBadge,
        awayBadge: data[0].events[0].strAwayTeamBadge,
        homeTeam: data[0].events[0].strHomeTeam,
        awayTeam: data[0].events[0].strAwayTeam,
        time: timeFormat.format(timestampFootball(0)),
        date: capitalization(dateFormat.format(timestampFootball(0))),
        timestamp: timestampFootball(0),
      },
      barcelona: {
        league: data[1].events[0].strLeague,
        homeBadge: data[1].events[0].strHomeTeamBadge,
        awayBadge: data[1].events[0].strAwayTeamBadge,
        homeTeam: data[1].events[0].strHomeTeam,
        awayTeam: data[1].events[0].strAwayTeam,
        time: timeFormat.format(timestampFootball(1)),
        date: capitalization(dateFormat.format(timestampFootball(1))),
        timestamp: timestampFootball(1),
      },
      netherlands: {
        league: data[2].events[0].strLeague,
        homeBadge: data[2].events[0].strHomeTeamBadge,
        awayBadge: data[2].events[0].strAwayTeamBadge,
        homeTeam: data[2].events[0].strHomeTeam,
        awayTeam: data[2].events[0].strAwayTeam,
        time: timeFormat.format(timestampFootball(2)),
        date: capitalization(dateFormat.format(timestampFootball(2))),
        timestamp: timestampFootball(2),
      },
      formula1: {
        grandPrix: data[3].MRData.RaceTable.Races[0].raceName,
        circuit: data[3].MRData.RaceTable.Races[0].Circuit.circuitName,
        fp1: {
          sessionName: "Free Practice 1",
          date: capitalization(
            dateFormat.format(timestampF1(3, "FirstPractice")),
          ),
          time: timeFormat.format(timestampF1(3, "FirstPractice")),
        },
        fp2: {
          sessionName: "Free Practice 2",
          date: capitalization(
            dateFormat.format(timestampF1(3, "SecondPractice")),
          ),
          time: timeFormat.format(timestampF1(3, "SecondPractice")),
        },
        fp3: {
          sessionName: "Free Practice 3",
          date: capitalization(
            dateFormat.format(timestampF1(3, "ThirdPractice")),
          ),
          time: timeFormat.format(timestampF1(3, "ThirdPractice")),
        },
        sprintQualy: {
          sessionName: "Sprint Qualification",
          date: capitalization(
            dateFormat.format(timestampF1(3, "SprintQualifying")),
          ),
          time: timeFormat.format(timestampF1(3, "SprintQualifying")),
        },
        sprintRace: {
          sessionName: "Sprint",
          date: capitalization(dateFormat.format(timestampF1(3, "Sprint"))),
          time: timeFormat.format(timestampF1(3, "Sprint")),
        },
        qualy: {
          sessionName: "Qualification",
          date: capitalization(dateFormat.format(timestampF1(3, "Qualifying"))),
          time: timeFormat.format(timestampF1(3, "Qualifying")),
        },
        race: {
          sessionName: "Race",
          date: capitalization(dateFormat.format(raceTimestamp)),
          time: timeFormat.format(raceTimestamp),
        },
      },
    };
    // console.log("cleanData:", JSON.stringify(cleanData, null, 2));
    return cleanData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default ExtractTimestamp;
