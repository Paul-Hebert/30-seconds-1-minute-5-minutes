import { View } from "react-native";
import Timer from "@/components/Timer";
import { useState } from "react";

export default function AddDrawingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Timer count={5 * 60} onFinished={() => {}} />
    </View>
  );
}
