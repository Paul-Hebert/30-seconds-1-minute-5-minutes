import { Pressable, StyleSheet } from "react-native";
import { Text } from "./StyledText";
import { Link, RelativePathString } from "expo-router";

type ButtonProps = {
  onPress?: () => void;
  children: React.ReactNode;
  href?: RelativePathString | ExternalPathString;
  variant?: "primary" | "secondary" | "subtle";
};

export function Button({
  onPress,
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    variant === "secondary" && styles.buttonSecondary,
    variant === "subtle" && styles.buttonSubtle,
  ];

  const textStyles = [
    styles.buttonText,
    (variant === "secondary" || variant === "subtle") &&
      styles.buttonTextSecondary,
  ];

  return (
    <Pressable style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
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
    justifyContent: "center",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  buttonSubtle: {
    backgroundColor: "transparent",
    paddingBlock: 8,
    borderColor: "transparent",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonTextSecondary: {
    color: "#007AFF",
  },
});
