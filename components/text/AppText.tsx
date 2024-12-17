import { StyleSheet, Text, TextProps } from "react-native";

export default function AppText({ style, children }: TextProps) {
  return <Text style={[style, styles.text]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
});
