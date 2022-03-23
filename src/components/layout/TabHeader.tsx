import React from "react";
import { Text, StatusBar } from "react-native";
import styled from "styled-components/native";

// styles
import { theme } from "../../styles";

const TabHeader = () => {
  const height = StatusBar.currentHeight;
  return (
    <MainWrapper>
      <ScreenName>Home</ScreenName>
    </MainWrapper>
  );
};

export default TabHeader;

const MainWrapper = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${theme.primary};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding-top: 35px;
`;

const ScreenName = styled.Text`
  font-family: "MontserratBold";
  font-size: 24px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: ${theme.neutral1};
  border: 1px solid red;
`;
