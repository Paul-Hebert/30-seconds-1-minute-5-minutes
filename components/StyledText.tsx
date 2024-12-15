import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const color = useThemeColor({}, "text");

  return <RNText style={[{ color }, style]} {...otherProps} />;
}
