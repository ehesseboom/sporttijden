import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import ExtractTimestamp from "./services/TransformData";
import FootballFixtures from "./components/FootballFixtures";
import F1Schedule from "./components/F1Schedule";
import Footer from "./components/Footer";
import {
  useFonts,
  SofiaSans_400Regular,
  SofiaSans_700Bold,
} from "@expo-google-fonts/sofia-sans";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cleanData, setCleanData] = useState();
  const [fontsLoaded] = useFonts({
    SofiaSans_400Regular,
    SofiaSans_700Bold,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await ExtractTimestamp();
      setCleanData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.main}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="hsl(0, 0%, 50%)" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <FootballFixtures data={cleanData} />
          <F1Schedule data={cleanData} />
          <Footer />
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "hsl(0, 0%, 5%)",
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
  container: {
    height: "100%",
    display: "flex",
    gap: 10,
  },
});

export default App;
