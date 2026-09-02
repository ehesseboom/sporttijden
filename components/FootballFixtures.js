import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import ExtractTimestamp from "../services/TransformData";

const FootballFixtures = () => {
  const [isLoading, setLoading] = useState(true);
  const [cleanData, setCleanData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await ExtractTimestamp();
      setCleanData(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View>
            <Text style={styles.competition}>{cleanData.ajax.competition}</Text>
            <Text style={styles.match}>{cleanData.ajax.match}</Text>
            <Text style={styles.date}>{cleanData.ajax.date}</Text>
            <Text style={styles.time}>{cleanData.ajax.time}</Text>
          </View>
          <View>
            <Text style={styles.competition}>
              {cleanData.barcelona.competition}
            </Text>
            <Text style={styles.match}>{cleanData.barcelona.match}</Text>
            <Text style={styles.date}>{cleanData.barcelona.date}</Text>
            <Text style={styles.time}>{cleanData.barcelona.time}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
  },
  competition: {
    fontWeight: 700,
    color: "hsl(10, 0%, 20%)",
    display: "flex",
    // alignSelf: "flex-end",
  },
  match: {
    fontWeight: 700,
    fontSize: 25,
    color: "hsl(10, 0%, 20%)",
  },
  date: {
    display: "flex",
    alignSelf: "center",
  },
  time: {
    fontWeight: 900,
    fontSize: 30,
    display: "flex",
    alignSelf: "center",
  },
});

export default FootballFixtures;
