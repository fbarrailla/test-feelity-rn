import { router } from "expo-router";
import { View, StyleSheet } from "react-native";

import Screen from "@/components/Screen";
import AppText from "@/components/AppText";
import AppButton from "../buttons/AppButton";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.title}>Brief</AppText>
        <AppText style={styles.subTitle}>
          Développer l’interface ci-après avec react native
        </AppText>
        <AppButton
          title="Voir le projet"
          onPress={() => router.push("/home")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 37,
    paddingLeft: 20,
  },
  title: {
    fontSize: 42,
  },
  subTitle: {
    marginTop: 23,
    fontSize: 24,
  },
  titleLvl2: {
    fontSize: 26,
  },
});
