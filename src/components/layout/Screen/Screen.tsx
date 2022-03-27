import React from "react";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import Header, { HeaderProps } from "./Header";

type Props = {
  headerProps: HeaderProps;
  screenStyle?: StyleProp<ViewStyle>;
  children?: JSX.Element;
};

const Screen = ({ headerProps, screenStyle = {}, children }: Props) => {
  return (
    <ScreenWrapper style={screenStyle}>
      <Header {...headerProps} />
      {children}
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.SafeAreaView``;

export default Screen;
