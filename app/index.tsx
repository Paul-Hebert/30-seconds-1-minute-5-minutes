import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/add-drawing" asChild>
        <Button onPress={() => {}}>Start Drawing</Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
