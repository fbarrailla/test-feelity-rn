import {
  TextProps,
  View,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import AppText from "@/components/text/AppText";
import { ReactNode } from "react";

type TextItemProps = {
  prefix?: "chip" | "chevron";
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export default function TextItem({
  prefix = "chip",
  style,
  children,
}: TextItemProps) {
  let prefixImage = require("@/assets/images/chip.png");
  let imageDimensions: [number, number] = [12, 12];
  let imageMargins: [number, number] = [4, 16];
  if (prefix === "chevron") {
    prefixImage = require("@/assets/images/chevron-right.png");
    imageDimensions = [10, 18];
    imageMargins = [2, 18];
  }
  return (
    <View style={[styles.container, style]}>
      <Image
        style={{
          height: imageDimensions[1],
          marginTop: imageMargins[0],
          marginRight: imageMargins[1],
          width: imageDimensions[0],
        }}
        source={prefixImage}
      />
      <AppText style={styles.text}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
  },
});
