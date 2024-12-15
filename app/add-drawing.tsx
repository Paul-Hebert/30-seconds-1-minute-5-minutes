import { useState } from "react";
import Heading from "@/components/Heading";
import { Text } from "@/components/StyledText";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import DrawingStep from "@/components/DrawingStep";
import CameraStep from "@/components/CameraStep";
import { useCamera } from "@/hooks/useCamera";
import Preview from "@/components/Preview";
import { VerticalStack } from "@/components/VerticalStack";
import { nanoid } from "nanoid/non-secure";
import { saveDrawing } from "@/hooks/useDrawings";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  index: undefined;
  "add-drawing": undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type Step = "photo" | "30s" | "1m" | "5m" | "review";

export default function AddDrawingScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [currentStep, setCurrentStep] = useState<Step>("photo");

  const [referencePhoto, setReferencePhoto] = useState<string | null>(null);
  const [firstDrawing, setFirstDrawing] = useState<string | null>(null);
  const [secondDrawing, setSecondDrawing] = useState<string | null>(null);
  const [thirdDrawing, setThirdDrawing] = useState<string | null>(null);

  const { hasPermission } = useCamera();

  // const durations = [30, 60, 60 * 5];
  // Uncomment for faster testing of flows
  const durations = [1, 1, 1];

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return (
      <>
        <Text>No access to camera</Text>
        <Button variant="subtle" onPress={() => setCurrentStep("30s")}>
          Continue without camera
        </Button>
      </>
    );
  }

  const handleSave = async () => {
    const success = await saveDrawing({
      id: nanoid(),
      referencePhoto,
      firstDrawing,
      secondDrawing,
      thirdDrawing,
    });

    if (success) {
      navigation.reset({
        index: 0,
        routes: [{ name: "index" }],
      });
    }
  };

  return (
    <Container style={{ justifyContent: "space-around" }}>
      {currentStep !== "review" && (
        <VerticalStack>
          {currentStep === "photo" && (
            <CameraStep
              onSkip={() => setCurrentStep("30s")}
              onPhotoTaken={(uri) => {
                setReferencePhoto(uri);
                setCurrentStep("30s");
              }}
            />
          )}
          {currentStep === "30s" && (
            <DrawingStep
              subhead="Draw a quick sketch!"
              helpText="It doesn't have to be pretty. Focus on getting the overall layout figured out."
              duration={durations[0]}
              onSkip={() => setCurrentStep("1m")}
              onPhotoTaken={(uri) => {
                setFirstDrawing(uri);
                setCurrentStep("1m");
              }}
            />
          )}
          {currentStep === "1m" && (
            <DrawingStep
              subhead="Draw a more detailed sketch!"
              helpText="Don't sweat the details. Just get the main shapes and proportions right."
              duration={durations[1]}
              onSkip={() => setCurrentStep("5m")}
              onPhotoTaken={(uri) => {
                setSecondDrawing(uri);
                setCurrentStep("5m");
              }}
            />
          )}
          {currentStep === "5m" && (
            <DrawingStep
              subhead="Take your time!"
              helpText="You’ve already drawn your scene twice! You’ve got this."
              duration={durations[2]}
              onSkip={() => setCurrentStep("5m")}
              onPhotoTaken={(uri) => {
                setThirdDrawing(uri);
                setCurrentStep("review");
              }}
            />
          )}
        </VerticalStack>
      )}

      <Preview
        referencePhoto={referencePhoto}
        firstPhoto={firstDrawing}
        secondPhoto={secondDrawing}
        thirdPhoto={thirdDrawing}
        activeStep={currentStep}
      />

      {currentStep === "review" && (
        <VerticalStack>
          <Heading>Great job!</Heading>
          <Text>
            When you're ready, save your drawing so you can look back on it in
            the future.
          </Text>
          <Button onPress={handleSave}>Save</Button>
          <Button variant="subtle" onPress={() => {}}>
            No thanks
          </Button>
        </VerticalStack>
      )}
    </Container>
  );
}
