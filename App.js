import { StyleSheet, Text, View } from "react-native";
import FootballFixtures from "./components/FootballFixtures";
import F1Schedule from "./components/F1Schedule";

const App = () => {
  return (
    <View style={styles.main}>
      <FootballFixtures />
      <F1Schedule />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: "100%",
    display: "flex",
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(0, 0%, 90%)",
  },
});

export default App;
