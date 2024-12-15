import { useState } from "react";
import Heading from "./Heading";
import Subhead from "./Subhead";
import Timer from "./Timer";
import { useCamera } from "@/hooks/useCamera";
import { Button } from "./Button";

export default function DrawingStep({
  duration,
  subhead,
  helpText = "",
  onPhotoTaken,
  onSkip,
}: {
  duration: number;
  subhead: string;
  helpText: string;
  onPhotoTaken: (uri: string) => void;
  onSkip: () => void;
}) {
  const [timeIsUp, setTimeIsUp] = useState(false);
  const { hasPermission, takePhoto } = useCamera();

  return (
    <>
      {timeIsUp ? (
        <>
          <Heading>Time's up!</Heading>

          <Subhead>Take a photo of your drawing to remember it later!</Subhead>

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

          <Button variant="subtle" onPress={onSkip}>
            Skip
          </Button>
        </>
      ) : (
        <Timer
          count={duration}
          subhead={subhead}
          helpText={helpText}
          onFinished={() => setTimeIsUp(true)}
        />
      )}
    </>
  );
}
