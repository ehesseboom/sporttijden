import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const footer = (
    <Text style={styles.text}>Sporttijden © {year} Ennio Esseboom</Text>
  );

  return <View style={styles.container}>{footer}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    alignItems: "center",
  },
  text: {
    color: "hsl(0, 0%, 15%)",
    fontFamily: "SofiaSans_700Bold",
    fontSize: 12,
  },
});

export default Footer;
