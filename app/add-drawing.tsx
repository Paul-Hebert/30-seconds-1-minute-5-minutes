import { View } from "react-native";
import Timer from "@/components/Timer";
import { useState } from "react";
import Heading from "@/components/Heading";
import { Text } from "@/components/StyledText";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type Step = "photo" | "30s" | "1m" | "5m";

export default function AddDrawingScreen() {
  const [currentStep, setCurrentStep] = useState<Step>("photo");

  return (
    <Container>
      {currentStep === "photo" && (
        <>
          <Heading>Let's Get Started!</Heading>
          <Text>
            Take a photo of the scene you're going to draw. (Or skip this step!)
          </Text>
          <Button onPress={() => {}}>Take Photo</Button>
          <Button variant="secondary" onPress={() => setCurrentStep("30s")}>
            Skip!
          </Button>
        </>
      )}
      {currentStep === "30s" && <Timer count={30} onFinished={() => {}} />}
      {currentStep === "1m" && <Timer count={60} onFinished={() => {}} />}
      {currentStep === "5m" && <Timer count={5 * 60} onFinished={() => {}} />}
    </Container>
  );
}
