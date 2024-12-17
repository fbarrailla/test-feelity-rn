import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import AppText from "@/components/text/AppText";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  function renderButton() {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>{title}</AppText>
        <View style={styles.suffix}>
          <Image
            style={styles.suffixImg}
            source={require("@/assets/images/chevron-right.png")}
          />
        </View>
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
    justifyContent: "space-between",
    borderRadius: 22,
    overflow: "hidden",
  },
  suffix: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "white",
    marginRight: 18,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "#0000001A",
    shadowOpacity: 1,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  suffixImg: {
    width: 10,
    height: 18,
  },
  text: {
    paddingLeft: 22,
    fontSize: 18,
  },
});
