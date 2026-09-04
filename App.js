import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import ExtractTimestamp from "./services/TransformData";
import FootballFixtures from "./components/FootballFixtures";
import F1Schedule from "./components/F1Schedule";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cleanData, setCleanData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await ExtractTimestamp();
      setCleanData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <View style={styles.main}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="hsl(0, 0%, 50%)" />
        </View>
      ) : (
        <View>
          <FootballFixtures data={cleanData} />
          <F1Schedule data={cleanData} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "hsl(0, 0%, 5%)",
    height: "100%",
    width: "100%",
    padding: 15,
    display: "flex",
    justifyContent: "center",
  },
  activityIndicator: {
    height: "100%",
    weight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
