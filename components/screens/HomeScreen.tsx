import { router } from "expo-router";
import { Text, Button } from "react-native";

import Screen from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <Button onPress={() => router.back()} title="back" />
      <Text style={{ fontSize: 18 }}>Home Screen</Text>
    </Screen>
  );
}
