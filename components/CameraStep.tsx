import { Button } from "./Button";

import Heading from "./Heading";
import { Text } from "./StyledText";

export default function CameraStep({ onSkip }: { onSkip: () => void }) {
  return (
    <>
      <Heading>Let's Get Started!</Heading>
      <Text>Take a photo of the scene you're going to draw.</Text>
      <Text>Or you can skip this step and get straight to drawing!</Text>
      <Button onPress={() => {}}>Take Photo</Button>
      <Button variant="secondary" onPress={onSkip}>
        Skip!
      </Button>
    </>
  );
}
