import { View } from "react-native";

import PreviewImage from "./PreviewImage";

export default function Preview({
  referencePhoto,
  firstPhoto,
  secondPhoto,
  thirdPhoto,
}: {
  referencePhoto: string | null;
  firstPhoto: string | null;
  secondPhoto: string | null;
  thirdPhoto: string | null;
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <PreviewImage uri={referencePhoto} placeholder="Photo" />
      <PreviewImage uri={firstPhoto} placeholder="30 s" />
      <PreviewImage uri={secondPhoto} placeholder="1 min" />
      <PreviewImage uri={thirdPhoto} placeholder="5 min" />
    </View>
  );
}
