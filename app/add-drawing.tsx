import { View } from "react-native";
import Timer from "@/components/Timer";

export default function AddDrawingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Timer count={30} />
    </View>
  );
}
