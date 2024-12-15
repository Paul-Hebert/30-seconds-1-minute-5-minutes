import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface StyledTextProps extends TextProps {
  lineHeight?: number;
  relativeLineHeight?: number;
}

export function Text({
  style,
  relativeLineHeight = 1.4,
  ...otherProps
}: StyledTextProps) {
  const color = '#333';
  const fontSize = StyleSheet.flatten(style)?.fontSize || 16;

  return (
    <RNText
      style={[
        {
          color,
          lineHeight: fontSize * (relativeLineHeight || 1.4),
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
