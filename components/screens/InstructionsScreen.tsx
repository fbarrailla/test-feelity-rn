import { router } from "expo-router";
import { View, StyleSheet, StatusBar } from "react-native";

import Screen from "@/components/Screen";
import AppText from "@/components/text/AppText";
import AppButton from "@/components/buttons/AppButton";
import TextItem from "../text/TextItem";

export default function InstructionsScreen() {
  return (
    <Screen>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <AppText style={styles.title}>Brief</AppText>
        <AppText style={styles.subTitle}>
          Développer l’interface ci-après avec react native
        </AppText>
        <AppText style={[styles.titleLvl2, { marginBottom: 16 }]}>
          Condition requise
        </AppText>
        <TextItem style={styles.condition}>Développement smartphone</TextItem>
        <TextItem style={styles.condition}>
          Cards avec mouvement horizontal
        </TextItem>
        <TextItem style={styles.condition}>Bouton</TextItem>
        <TextItem prefix="chevron">Livraison git ou repository public</TextItem>
        <AppText
          style={[styles.titleLvl2, { marginTop: 25, marginBottom: 23 }]}
        >
          Option
        </AppText>
        <TextItem>
          Proposition d’une animation au choix{`\n`}(arrivée, texte, loading
          etc.)
        </TextItem>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Voir le projet"
          onPress={() => router.push("/home")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 34,
    left: 18,
    right: 20,
  },
  condition: {
    marginBottom: 22,
  },
  container: {
    paddingTop: 37,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 24,
    marginTop: 23,
    marginBottom: 50,
  },
  title: {
    fontSize: 42,
  },
  titleLvl2: {
    fontSize: 26,
  },
});
