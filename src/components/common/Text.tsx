import React, { ReactNode } from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";
import { theme } from "../../styles";

// utils
import { sizes, fontWeightType, getSpace, SizeType, Space } from "../../utils";

export interface TxtProps extends TextProps, Space {
  size?: number | SizeType;
  color?: string;
  textTransform?: "uppercase" | "lowercase";
  children: ReactNode | ReactNode[];
  fontFamily?: string;
  fontWeight?: fontWeightType;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextStyle["textAlign"];
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.neutral1,
    paddingVertical: 1,
  },
});

const textSizes = sizes.text;

const CommonText = ({
  children,
  textTransform,
  size,
  color,
  style,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  ...props
}: TxtProps) => {
  return (
    <Text
      style={[
        styles.text,
        (typeof size === "string" &&
          sizes.text[size] && { fontSize: textSizes[size] }) ||
          null,
        typeof size === "number" && { fontSize: size },
        style && style,
        (color && { color }) || null,
        (letterSpacing && { letterSpacing }) || null,
        (lineHeight && { lineHeight }) || null,
        fontFamily && { fontFamily },
        fontWeight && { fontWeight },
        textAlign && { textAlign },
        textTransform && { textTransform },
        getSpace(props),
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

CommonText.defaultProps = {
  size: textSizes.sm,
  weight: "regular",
  type: "primary",
  textTransform: "none",
};

export default CommonText;
