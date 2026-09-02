import { StyleSheet, Text, View } from "react-native";

const FootballFixtures = ({ data }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.competition}>{data.ajax.competition}</Text>
          <Text style={styles.match}>{data.ajax.match}</Text>
          <Text style={styles.date}>{data.ajax.date}</Text>
          <Text style={styles.time}>{data.ajax.time}</Text>
        </View>
        <View>
          <Text style={styles.competition}>{data.barcelona.competition}</Text>
          <Text style={styles.match}>{data.barcelona.match}</Text>
          <Text style={styles.date}>{data.barcelona.date}</Text>
          <Text style={styles.time}>{data.barcelona.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FootballFixtures;
