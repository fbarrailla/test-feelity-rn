import {
  Animated,
  View,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  useAnimatedValue,
} from "react-native";

import AppText from "@/components/text/AppText";
import { ReactNode, useEffect } from "react";

type TextItemProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  prefix?: "chip" | "chevron";
  fadeInDelay?: number;
};

export default function TextItem({
  children,
  prefix = "chip",
  style,
  fadeInDelay = 0, // seconds
}: TextItemProps) {
  const fadeAnim = useAnimatedValue(0);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: fadeInDelay * 1000,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  let prefixImage = require("@/assets/images/chip.png");
  let imageDimensions: [number, number] = [12, 12];
  let imageMargins: [number, number] = [4, 16];
  if (prefix === "chevron") {
    prefixImage = require("@/assets/images/chevron-right.png");
    imageDimensions = [10, 18];
    imageMargins = [2, 18];
  }
  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          opacity: fadeAnim,
        },
      ]}
    >
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
    </Animated.View>
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
