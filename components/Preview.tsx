import { View } from "react-native";

import PreviewImage from "./PreviewImage";
import { Step } from "@/app/add-drawing";

export default function Preview({
  referencePhoto,
  firstPhoto,
  secondPhoto,
  thirdPhoto,
  activeStep,
}: {
  referencePhoto: string | null;
  firstPhoto: string | null;
  secondPhoto: string | null;
  thirdPhoto: string | null;
  activeStep: Step;
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
      }}
    >
      <PreviewImage
        uri={referencePhoto}
        placeholder="Photo"
        isActive={activeStep === "photo"}
      />
      <PreviewImage
        uri={firstPhoto}
        placeholder="30 s"
        isActive={activeStep === "30s"}
      />
      <PreviewImage
        uri={secondPhoto}
        placeholder="1 min"
        isActive={activeStep === "1m"}
      />
      <PreviewImage
        uri={thirdPhoto}
        placeholder="5 min"
        isActive={activeStep === "5m"}
      />
    </View>
  );
}
