import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import ExtractTimestamp from "../services/TransformData";

const F1Schedule = () => {
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
            <Text style={styles.grandPrix}>{cleanData.formula1.grandPrix}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  grandPrix: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default F1Schedule;
