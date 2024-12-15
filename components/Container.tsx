import { View, StyleSheet, ViewProps } from "react-native";

export function Container({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 32,
  },
});
