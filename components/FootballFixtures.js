import { View, Text, Image, StyleSheet } from "react-native";

const FootballFixtures = ({ data }) => {
  const ajaxCard = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>{data.ajax.date}</Text>
        <Text style={styles.text}>{data.ajax.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <View style={styles.teamRow}>
          <Image
            source={{ uri: data.ajax.homeBadge }}
            style={styles.teamBadge}
          />
          <Text style={styles.text}>{data.ajax.homeTeam}</Text>
        </View>
        <View style={styles.teamRow}>
          <Image
            source={{ uri: data.ajax.awayBadge }}
            style={styles.teamBadge}
          />
          <Text style={styles.text}>{data.ajax.awayTeam}</Text>
        </View>
      </View>
    </View>
  );

  const barcelonaCard = (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={[styles.text, styles.date]}>{data.barcelona.date}</Text>
        <Text style={styles.text}>{data.barcelona.time}</Text>
      </View>
      <View style={styles.cardRight}>
        <View style={styles.teamRow}>
          <Image
            source={{ uri: data.barcelona.homeBadge }}
            style={styles.teamBadge}
          />
          <Text style={styles.text}>{data.barcelona.homeTeam}</Text>
        </View>
        <View style={styles.teamRow}>
          <Image
            source={{ uri: data.barcelona.awayBadge }}
            style={styles.teamBadge}
          />
          <Text style={styles.text}>{data.barcelona.awayTeam}</Text>
        </View>
      </View>
    </View>
  );

  // timestamps
  const timestampAjax = data.ajax.timestamp;
  const timestampBarcelona = data.barcelona.timestamp;

  // Comparison timestamps
  const firstCard =
    timestampAjax < timestampBarcelona ? ajaxCard : barcelonaCard;
  const secondCard =
    timestampAjax < timestampBarcelona ? barcelonaCard : ajaxCard;

  return (
    <View style={styles.container}>
      {firstCard}
      {secondCard}
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
  },
  card: {
    backgroundColor: "hsl(0, 0%, 10%)",
    padding: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardLeft: {
    borderRightWidth: 1,
    borderRightColor: "hsl(0, 0%, 30%)",
    paddingRight: 15,
    minWidth: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardRight: {
    display: "flex",
    gap: 7,
  },
  teamRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "hsl(0, 0%, 90%)",
    fontFamily: "SofiaSans_700Bold",
    fontSize: 16,
  },
  teamBadge: {
    height: 20,
    width: 20,
  },
  date: {
    fontSize: 12,
    color: "hsl(0, 0%, 45%)",
  },
});

export default FootballFixtures;
