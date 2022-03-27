import React from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";

// styles
import { theme } from "../../styles";

// assets
import { SearchIcon } from "../svgicons";

type Props = {
  title: string;
};

const TabHeader = ({ title }: Props) => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <ScreenName>{title ? title : "Screen"}</ScreenName>
        <IconWrapper
          style={{ borderRadius: 50 }}
          onPress={() => console.log("5454")}
        >
          <SearchIcon />
        </IconWrapper>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default TabHeader;

const HeaderWrapper = styled.View`
  width: 100%;
  height: ${Constants.statusBarHeight + 70 + "px"};
  background-color: ${theme.primary};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 4px 20px hsla(0, 0%, 0%, 0.1);
  padding: ${Constants.statusBarHeight + 10 + "px"} 24px 20px 24px;
`;

const IconWrapper = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ScreenName = styled.Text`
  font-family: "MontserratBold";
  font-size: 24px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: ${theme.neutral1};
`;
