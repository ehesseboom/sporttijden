import { ActivityIndicator, View, StyleSheet } from "react-native";
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
          <View style={styles.centerGroup}>
            <FootballFixtures data={cleanData} />
            <F1Schedule data={cleanData} />
          </View>

          <Footer />
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 5%)",
    padding: 15,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  centerGroup: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
});

export default App;
