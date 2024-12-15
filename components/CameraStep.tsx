import { Button } from "./Button";
import Heading from "./Heading";
import { Text } from "./StyledText";
import { useCamera } from "@/hooks/useCamera";
import Subhead from "./Subhead";

type CameraStepProps = {
  onPhotoTaken?: (uri: string) => void;
  onSkip: () => void;
};

export default function CameraStep({ onPhotoTaken, onSkip }: CameraStepProps) {
  const { hasPermission, takePhoto } = useCamera();

  return (
    <>
      <Heading>Let's Get Started!</Heading>
      <Subhead>Take a photo of the scene you're going to draw.</Subhead>
      <Text>Or you can skip this step and get straight to drawing!</Text>
      {hasPermission && (
        <Button
          onPress={async () => {
            const uri = await takePhoto();
            if (uri && onPhotoTaken) onPhotoTaken(uri);
          }}
        >
          Take Photo
        </Button>
      )}
      <Button variant="secondary" onPress={onSkip}>
        Skip!
      </Button>
    </>
  );
}
