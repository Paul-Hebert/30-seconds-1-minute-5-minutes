import { View } from "react-native";
import Timer from "@/components/Timer";
import { useState } from "react";
import Heading from "@/components/Heading";
import { Text } from "@/components/StyledText";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import DrawingStep from "@/components/DrawingStep";
import CameraStep from "@/components/CameraStep";
type Step = "photo" | "30s" | "1m" | "5m";

export default function AddDrawingScreen() {
  const [currentStep, setCurrentStep] = useState<Step>("photo");

  const [referencePhoto, setReferencePhoto] = useState<string | null>(null);
  const [firstDrawing, setFirstDrawing] = useState<string | null>(null);
  const [secondDrawing, setSecondDrawing] = useState<string | null>(null);
  const [thirdDrawing, setThirdDrawing] = useState<string | null>(null);

  return (
    <Container>
      {currentStep === "photo" && (
        <CameraStep
          onSkip={() => setCurrentStep("30s")}
          onPhotoTaken={setReferencePhoto}
        />
      )}
      {currentStep === "30s" && (
        <DrawingStep
          subhead="Draw a quick sketch!"
          helpText="It doesn't have to be pretty. Focus on getting the overall layout figured out."
          duration={30}
          onFinished={() => {}}
        />
      )}
      {currentStep === "1m" && (
        <DrawingStep
          subhead="Draw a more detailed sketch!"
          helpText="Don't sweat the details. Just get the main shapes and proportions right."
          duration={60}
          onFinished={() => {}}
        />
      )}
      {currentStep === "5m" && (
        <DrawingStep
          subhead="Take your time!"
          helpText="You’ve already drawn your scene twice! You’ve got this."
          duration={60}
          onFinished={() => {}}
        />
      )}
    </Container>
  );
}
