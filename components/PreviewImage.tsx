import { Image, View, StyleSheet } from "react-native";
import { Text } from "./StyledText";

export default function PreviewImage({
  uri,
  placeholder,
}: {
  uri: string | null;
  placeholder: string;
}) {
  return (
    <>
      {uri ? (
        <Image source={{ uri }} style={styles.shared} />
      ) : (
        <View style={[styles.placeholder, styles.shared]}>
          <Text style={styles.inner}>{placeholder}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  shared: {
    aspectRatio: 3 / 4,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },
  inner: {
    marginBlock: "auto",
  },
  placeholder: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    color: "#333",
  },
});
