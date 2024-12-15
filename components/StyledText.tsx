import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface StyledTextProps extends TextProps {
  lineHeight?: number;
  relativeLineHeight?: number;
}

export function Text({
  style,
  lineHeight = 1.5,
  relativeLineHeight,
  ...otherProps
}: StyledTextProps) {
  const color = useThemeColor({}, "text");
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
