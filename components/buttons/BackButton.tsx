import {
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function BackButton() {
  const onPress = () => router.back();

  function renderContent() {
    return (
      <View style={styles.container}>
        <Image source={require("@/assets/images/chevron-left-white.png")} />
      </View>
    );
  }

  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        {renderContent()}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>{renderContent()}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A4A4A",
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});
