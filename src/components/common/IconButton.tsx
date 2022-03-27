import React from "react";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  icon: any;
  onPress: () => void;
  iconButtonStyles?: StyleProp<ViewStyle>;
};

const IconButton = ({ icon, onPress, iconButtonStyles }: Props) => {
  const Component = icon;

  return (
    <IconWrapper
      onPress={onPress}
      style={[iconButtonStyles, { borderRadius: 50 }]}
      activeOpacity={0.8}
    >
      <Component />
    </IconWrapper>
  );
};

export default IconButton;

const IconWrapper = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;
