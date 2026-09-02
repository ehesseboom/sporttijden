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
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>
              {cleanData.formula1.race.session}
            </Text>
            <Text style={styles.date}>{cleanData.formula1.race.date}</Text>
            <Text style={styles.time}>{cleanData.formula1.race.time}</Text>
          </View>
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>
              {cleanData.formula1.qualy.session}
            </Text>
            <Text style={styles.date}>{cleanData.formula1.qualy.date}</Text>
            <Text style={styles.time}>{cleanData.formula1.qualy.time}</Text>
          </View>
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>
              {cleanData.formula1.fp1.session}
            </Text>
            <Text style={styles.date}>{cleanData.formula1.fp1.date}</Text>
            <Text style={styles.time}>{cleanData.formula1.fp1.time}</Text>
          </View>

          {cleanData.formula1.fp2.time ? (
            <View style={styles.session}>
              <Text style={styles.sessionTitle}>
                {cleanData.formula1.fp2.session}
              </Text>
              <Text style={styles.date}>{cleanData.formula1.fp2.date}</Text>
              <Text style={styles.time}>{cleanData.formula1.fp2.time}</Text>
            </View>
          ) : (
            <View style={styles.session}>
              <Text style={styles.sessionTitle}>
                {cleanData.formula1.sprintQualy.session}
              </Text>
              <Text style={styles.date}>
                {cleanData.formula1.sprintQualy.date}
              </Text>
              <Text style={styles.time}>
                {cleanData.formula1.sprintQualy.time}
              </Text>
            </View>
          )}

          {cleanData.formula1.fp3.time ? (
            <View style={styles.session}>
              <Text style={styles.sessionTitle}>
                {cleanData.formula1.fp3.session}
              </Text>
              <Text style={styles.date}>{cleanData.formula1.fp3.date}</Text>
              <Text style={styles.time}>{cleanData.formula1.fp3.time}</Text>
            </View>
          ) : (
            <View style={styles.session}>
              <Text style={styles.sessionTitle}>
                {cleanData.formula1.sprintRace.session}
              </Text>
              <Text style={styles.date}>
                {cleanData.formula1.sprintRace.date}
              </Text>
              <Text style={styles.time}>
                {cleanData.formula1.sprintRace.time}
              </Text>
            </View>
          )}
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
