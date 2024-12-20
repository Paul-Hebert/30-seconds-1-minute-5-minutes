import { View, StyleSheet } from "react-native";
import { Text } from "./StyledText";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <>
      <Text style={styles.heading} relativeLineHeight={1.2}>
        {children}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
