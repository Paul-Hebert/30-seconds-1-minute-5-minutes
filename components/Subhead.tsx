import { View, StyleSheet } from "react-native";
import { Text } from "./StyledText";

type SubheadProps = {
  children: React.ReactNode;
};

export default function Subhead({ children }: SubheadProps) {
  return (
    <>
      <Text style={styles.subhead}>{children}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  subhead: {
    fontSize: 24,
    fontStyle: "italic",
  },
});
