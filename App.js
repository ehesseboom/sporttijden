import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
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
        <ActivityIndicator />
      ) : (
        <View>
          <FootballFixtures data={cleanData} />
          <F1Schedule data={cleanData} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
