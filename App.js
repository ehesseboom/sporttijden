import { StyleSheet, Text, View, FlatList } from "react-native";
import "./services/TransformData";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sporttijden</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(0, 0%, 10%)",
  },
  title: {
    color: "hsl(0, 0%, 90%)",
    fontSize: 50,
  },
});

export default App;
