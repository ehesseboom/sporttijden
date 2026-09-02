import { StyleSheet, Text, View } from "react-native";

const F1Schedule = ({ data }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.grandPrix}>{data.formula1.grandPrix}</Text>
        </View>

        <View style={styles.session}>
          <Text style={styles.sessionTitle}>{data.formula1.race.session}</Text>
          <Text style={styles.date}>{data.formula1.race.date}</Text>
          <Text style={styles.time}>{data.formula1.race.time}</Text>
        </View>

        <View style={styles.session}>
          <Text style={styles.sessionTitle}>{data.formula1.qualy.session}</Text>
          <Text style={styles.date}>{data.formula1.qualy.date}</Text>
          <Text style={styles.time}>{data.formula1.qualy.time}</Text>
        </View>

        <View style={styles.session}>
          <Text style={styles.sessionTitle}>{data.formula1.fp1.session}</Text>
          <Text style={styles.date}>{data.formula1.fp1.date}</Text>
          <Text style={styles.time}>{data.formula1.fp1.time}</Text>
        </View>

        {data.formula1.fp2.time ? (
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>{data.formula1.fp2.session}</Text>
            <Text style={styles.date}>{data.formula1.fp2.date}</Text>
            <Text style={styles.time}>{data.formula1.fp2.time}</Text>
          </View>
        ) : (
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>
              {data.formula1.sprintQualy.session}
            </Text>
            <Text style={styles.date}>{data.formula1.sprintQualy.date}</Text>
            <Text style={styles.time}>{data.formula1.sprintQualy.time}</Text>
          </View>
        )}

        {data.formula1.fp3.time ? (
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>{data.formula1.fp3.session}</Text>
            <Text style={styles.date}>{data.formula1.fp3.date}</Text>
            <Text style={styles.time}>{data.formula1.fp3.time}</Text>
          </View>
        ) : (
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>
              {data.formula1.sprintRace.session}
            </Text>
            <Text style={styles.date}>{data.formula1.sprintRace.date}</Text>
            <Text style={styles.time}>{data.formula1.sprintRace.time}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default F1Schedule;
