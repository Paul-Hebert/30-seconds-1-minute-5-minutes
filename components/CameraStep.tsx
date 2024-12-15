import { Button } from "./Button";
import Heading from "./Heading";
import { Text } from "./StyledText";
import { useCamera } from "@/hooks/useCamera";

type CameraStepProps = {
  onPhotoTaken?: (uri: string) => void;
  onSkip: () => void;
};

export default function CameraStep({ onPhotoTaken, onSkip }: CameraStepProps) {
  const { hasPermission, takePhoto } = useCamera();

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return (
      <>
        <Text>No access to camera</Text>
        <Button variant="secondary" onPress={onSkip}>
          Continue without camera
        </Button>
      </>
    );
  }

  return (
    <>
      <Heading>Let's Get Started!</Heading>
      <Text>Take a photo of the scene you're going to draw.</Text>
      <Text>Or you can skip this step and get straight to drawing!</Text>
      <Button
        onPress={async () => {
          const uri = await takePhoto();
          if (uri && onPhotoTaken) onPhotoTaken(uri);
        }}
      >
        Take Photo
      </Button>
      <Button variant="secondary" onPress={onSkip}>
        Skip!
      </Button>
    </>
  );
}
