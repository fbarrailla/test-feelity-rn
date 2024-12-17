import { StyleSheet, View, Image } from "react-native";

import BackButton from "@/components/buttons/BackButton";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("@/assets/images/feelity-logo.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    left: 20,
  },
  container: {
    backgroundColor: "#222222",
    width: "100%",
  },
  logoContainer: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
