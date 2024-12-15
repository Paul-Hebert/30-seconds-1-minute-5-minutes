import { View, StyleSheet } from "react-native";
import { Text } from "./StyledText";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <View>
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
