import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sporttijden</Text>
      <Text style={styles.baseText}>
        Ajax Amsterdam - FC Barcelona - Formula 1
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 10%)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  baseText: {
    color: "white",
    marginBlock: 20,
  },
});
