import Constants from "expo-constants";
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import AppText from "@/components/text/AppText";
import ImageCard from "../ImageCard";
import AppButton from "../buttons/AppButton";

const services = [
  { id: "1", image: require("@/assets/images/service-1.png") },
  { id: "2", image: require("@/assets/images/service-2.png") },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["right", "left", "top"]}>
      <StatusBar barStyle={"light-content"} />
      <Header />
      <View style={styles.subHeader}>
        <AppText style={[styles.title, { color: "white", marginTop: 28 }]}>
          Services
        </AppText>
      </View>
      <View style={styles.subContainer}>
        <ScrollView
          horizontal
          style={styles.scrollView}
          contentContainerStyle={{ paddingLeft: 10, paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {services.map((service) => (
            <ImageCard key={service.id} image={service.image} />
          ))}
        </ScrollView>
        <AppText style={[styles.title, { color: "black" }]}>Articles</AppText>
        <AppText style={[styles.article]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet malesuada ex, consectetur convallis erat. Sed viverra id metus in
          eleifend.
        </AppText>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Commencer à lire"
            onPress={() => console.log("Read article")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  article: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 34,
    left: 18,
    right: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#222222",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    marginTop: -60,
    flexGrow: 0,
    paddingBottom: 60,
  },
  subHeader: {
    height: 158,
  },
  title: {
    fontSize: 42,
    paddingLeft: 20,
  },
});
