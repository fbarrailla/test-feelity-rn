import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ReactNode } from "react";

type ScreenProps = {
  children: ReactNode;
};

export default function Screen({ children }: ScreenProps) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
});
