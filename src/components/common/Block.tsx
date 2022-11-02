import React from "react";
import {
  View,
  ViewProps,
  ViewStyle,
  FlexStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

// utils
import { getSpace, Space } from "../../utils";

export interface Props extends ViewProps, Space {
  flexGrow?: FlexStyle["flexGrow"];
  flex?: FlexStyle["flex"];
  center?: boolean;
  flexDirection?: FlexStyle["flexDirection"];
  flexShrink?: FlexStyle["flexShrink"];
  alignItems?: FlexStyle["alignItems"];
  flexBasis?: FlexStyle["flexBasis"];
  justifyContent?: FlexStyle["justifyContent"];
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  width?: "full" | number | string;
}

const Block = ({
  alignItems,
  style,
  justifyContent,
  children,
  flexGrow,
  flexShrink,
  center,
  flex,
  flexDirection,
  flexBasis,
  width,
  ...props
}: Props) => {
  return (
    <View
      style={[
        (flex && { flex }) || null,
        (flexGrow && { flexGrow }) || null,
        (flexShrink && { flexShrink }) || null,
        (flexBasis && { flexBasis }) || null,
        flexDirection && { flexDirection },
        alignItems && { alignItems },
        justifyContent && { justifyContent },
        (!!width && width !== "all" && { width }) || null,
        width === "full" && { width: "100%" },
        center && styles.center,
        getSpace(props),
        style && style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
export default Block;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
