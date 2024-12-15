import { StyleSheet, ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "@/components/Button";
import Heading from "@/components/Heading";
import { Text } from "@/components/StyledText";
import { Container } from "@/components/Container";
import { useDrawings } from "@/hooks/useDrawings";
import { VerticalStack } from "@/components/VerticalStack";

export default function HomeScreen() {
  const { drawings, isLoading } = useDrawings();

  return (
    <Container>
      <VerticalStack>
        <Heading>30-1-5</Heading>
        <Text>
          This is a drawing app that helps you practice drawing by doing timed
          sets of sketches in 30 seconds, 1 minute, and 5 minutes.
        </Text>

        {drawings.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {drawings.map((drawing) => (
              <View key={drawing.id} style={styles.drawingItem}>
                <Text>
                  Drawing from{" "}
                  {new Date(drawing.createdAt).toLocaleDateString()}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}

        <Button href="/add-drawing">New Drawing</Button>
      </VerticalStack>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  drawingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
