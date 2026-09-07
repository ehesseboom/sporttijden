import { View, Text, StyleSheet } from "react-native";

const F1Schedule = ({ data }) => {
  const cardTitle = (
    <View style={styles.title}>
      <Text style={[styles.text, styles.grandPrix]}>
        {data.formula1.grandPrix}
      </Text>
      <Text style={[styles.text, styles.circuit]}>{data.formula1.circuit}</Text>
    </View>
  );

  const cardFp1 = (
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

  const cardFp2 = (
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

  const cardFp3 = (
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

  const cardSprintQualy = (
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

  const cardSprint = (
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

  const cardQualy = (
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

  const cardRace = (
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

  const session2 = data.formula1.fp2 === null ? cardSprintQualy : cardFp2;
  const session3 = data.formula1.fp3 === null ? cardSprint : cardFp3;

  return (
    <View style={styles.container}>
      {cardTitle}
      <View style={styles.schedule}>
        {cardFp1}
        {session2}
        {session3}
        {cardQualy}
        {cardRace}
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
  grandPrix: {
    fontSize: 20,
  },
  circuit: {
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
    fontSize: 12,
    color: "hsl(0, 0%, 45%)",
  },
});

export default F1Schedule;
