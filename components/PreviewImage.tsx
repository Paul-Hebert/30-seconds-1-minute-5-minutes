import { Image, View, StyleSheet } from "react-native";
import { Text } from "./StyledText";

export default function PreviewImage({
  uri,
  placeholder,
  isActive,
}: {
  uri: string | null;
  placeholder: string;
  isActive?: boolean;
}) {
  const activeStyles = isActive ? styles.active : {};

  return (
    <>
      {uri ? (
        <Image source={{ uri }} style={[styles.shared, activeStyles]} />
      ) : (
        <View style={[styles.placeholder, styles.shared, activeStyles]}>
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
  active: {
    backgroundColor: "#c3dcf7",
    borderColor: "#007AFF",
  },
});
