import { View, Text, StyleSheet } from "react-native";

const F1Schedule = ({ data }) => {
  const titleCard = (
    <View style={styles.title}>
      <Text style={[styles.text, styles.grandPrixName]}>
        {data.formula1.grandPrix}
      </Text>
      <Text style={[styles.text, styles.circuitName]}>
        {data.formula1.circuit}
      </Text>
    </View>
  );

  const fp1Card = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>{data.formula1.fp1.date}</Text>
        <Text style={styles.text}>{data.formula1.fp1.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.fp1.sessionName}</Text>
      </View>
    </View>
  );

  const fp2Card = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>{data.formula1.fp2.date}</Text>
        <Text style={styles.text}>{data.formula1.fp2.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.fp2.sessionName}</Text>
      </View>
    </View>
  );

  const fp3Card = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>{data.formula1.fp3.date}</Text>
        <Text style={styles.text}>{data.formula1.fp3.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.fp3.sessionName}</Text>
      </View>
    </View>
  );

  const sprintQualyCard = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>
          {data.formula1.sprintQualy.date}
        </Text>
        <Text style={styles.text}>{data.formula1.sprintQualy.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.sprintQualy.sessionName}</Text>
      </View>
    </View>
  );

  const sprintCard = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>
          {data.formula1.sprintRace.date}
        </Text>
        <Text style={styles.text}>{data.formula1.sprintRace.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.sprintRace.sessionName}</Text>
      </View>
    </View>
  );

  const qualyCard = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>
          {data.formula1.qualy.date}
        </Text>
        <Text style={styles.text}>{data.formula1.qualy.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.qualy.sessionName}</Text>
      </View>
    </View>
  );

  const raceCard = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>
          {data.formula1.race.date}
        </Text>
        <Text style={styles.text}>{data.formula1.race.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.text}>{data.formula1.race.sessionName}</Text>
      </View>
    </View>
  );

  const session2 = data.formula1.fp2 === null ? sprintQualyCard : fp2Card;
  const session3 = data.formula1.fp3 === null ? sprintCard : fp3Card;

  return (
    <View style={styles.container}>
      {titleCard}
      <View style={styles.schedule}>
        {fp1Card}
        {session2}
        {session3}
        {qualyCard}
        {raceCard}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsl(0, 0%, 10%)",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "hsl(0, 0%, 90%)",
    fontFamily: "SofiaSans_700Bold",
    fontSize: 16,
  },
  title: {
    marginBottom: 25,
  },
  grandPrixName: {
    fontSize: 20,
  },
  circuitName: {
    color: "hsl(0, 0%, 45%)",
  },
  schedule: {
    display: "flex",
    gap: 20,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardLeft: {
    borderRightWidth: 1,
    borderRightColor: "hsl(0, 0%, 30%)",
    paddingRight: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    minWidth: 70,
  },
  cardRight: {
    display: "flex",
    gap: 7,
  },
  date: {
    color: "hsl(0, 0%, 45%)",
    fontSize: 12,
  },
});

export default F1Schedule;
