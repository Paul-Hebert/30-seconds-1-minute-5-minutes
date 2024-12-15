import { Pressable, StyleSheet } from "react-native";
import { Text } from "./StyledText";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "subtle";
};

export function Button({
  onPress,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "secondary" && styles.buttonSecondary,
        variant === "subtle" && styles.buttonSubtle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          (variant === "secondary" || variant === "subtle") &&
            styles.buttonTextSecondary,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  buttonSubtle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#007AFF",
  },
  buttonTextSecondary: {
    color: "#007AFF",
  },
});
