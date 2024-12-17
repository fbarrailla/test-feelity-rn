import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import AppText from "@/components/AppText";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  function renderButton() {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    );
  }

  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        {renderButton()}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>{renderButton()}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 244, 244)",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    overflow: "hidden",
  },
  text: {
    paddingLeft: 22,
    fontSize: 18,
  },
});
