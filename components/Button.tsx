import { Pressable, StyleSheet } from "react-native";
import { Text } from "./StyledText";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ onPress, children, variant = "primary" }: ButtonProps) {
  return (
    <Pressable 
      style={[
        styles.button, 
        variant === "secondary" && styles.buttonSecondary
      ]} 
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        variant === "secondary" && styles.buttonTextSecondary
      ]}>
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#007AFF",
  },
});
