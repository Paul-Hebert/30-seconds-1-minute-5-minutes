import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Button } from "@/components/Button";
import Heading from "@/components/Heading";
import { Text } from "@/components/StyledText";
import { Container } from "@/components/Container";

export default function HomeScreen() {
  return (
    <Container>
      <Heading>Sketchercise</Heading>
      <Text>
        Sketchercise is a drawing app that helps you practice drawing by
        sketching scenes from your own photos.
      </Text>
      <Link href="/add-drawing" asChild>
        <Button onPress={() => {}}>Start Drawing</Button>
      </Link>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 32,
  },
});
