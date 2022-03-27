import React from "react";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";

// styles
import { theme } from "../../styles/theme";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
};

const CustomButton = ({ title, onPress, disabled, buttonStyle }: Props) => {
  return (
    <Wrapper
      onPress={onPress}
      style={buttonStyle}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text disabled={disabled}>{title}</Text>
    </Wrapper>
  );
};

export default CustomButton;

const Wrapper = styled.TouchableOpacity<{ disabled?: boolean }>`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) =>
    props.disabled ? theme.neutral4 : theme.primary};
`;

const Text = styled.Text<{ disabled?: boolean }>`
  font-family: ${theme.fonts.bold};
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.disabled ? theme.neutral5 : theme.neutral1)};
`;
