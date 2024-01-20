import React from "react";
import styled from "styled-components/native";
import { StyleProp, ViewStyle, ActivityIndicator } from "react-native";

// styles
import { theme } from "../../styles/theme";

type Props = {
  variant: "contained" | "text";
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean | undefined;
  textButtonColor?: string;
  textButtonSize?: number;
  buttonStyle?: StyleProp<ViewStyle>;
};

const CustomButton = ({
  variant,
  title,
  onPress,
  disabled,
  loading = false,
  textButtonColor,
  textButtonSize,
  buttonStyle,
}: Props) => {
  if (variant === "contained") {
    return (
      <ContainedButton
        onPress={onPress}
        style={buttonStyle}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <ContainedButtonTitle disabled={disabled}>
          {loading ? <ActivityIndicator /> : title}
        </ContainedButtonTitle>
      </ContainedButton>
    );
  } else {
    return (
      <TextButton activeOpacity={0.8} onPress={onPress}>
        <TextButtonTitle
          disabled={disabled}
          color={textButtonColor}
          size={textButtonSize}
        >
          {title}
        </TextButtonTitle>
      </TextButton>
    );
  }
};

export default CustomButton;

const ContainedButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) =>
    props.disabled ? theme.neutral4 : theme.primary};
`;

const ContainedButtonTitle = styled.Text<{ disabled?: boolean }>`
  font-family: ${theme.fonts.bold};
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.disabled ? theme.neutral5 : theme.neutral1)};
`;

const TextButton = styled.TouchableOpacity``;

const TextButtonTitle = styled.Text<{
  disabled?: boolean;
  color?: string;
  size?: number;
}>`
  font-family: ${theme.fonts.regular};
  font-size: ${(props) => (props.size ? props.size : 12)}px;
  line-height: 18px;
  color: ${(props) =>
    props.disabled
      ? theme.neutral5
      : !!props.color
      ? props.color
      : theme.primary};
`;
