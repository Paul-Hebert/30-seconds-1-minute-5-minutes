import Heading from "./Heading";
import Subhead from "./Subhead";
import Timer from "./Timer";

export default function DrawingStep({
  duration,
  subhead,
  helpText = "",
  onFinished,
}: {
  duration: number;
  subhead: string;
  helpText: string;
  onFinished: () => void;
}) {
  return (
    <>
      <Timer
        count={duration}
        subhead={subhead}
        helpText={helpText}
        onFinished={() => {}}
      />
    </>
  );
}
