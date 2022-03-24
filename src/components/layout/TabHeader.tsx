import React from "react";
import styled from "styled-components/native";

// styles
import { theme } from "../../styles";

// assets
import { SearchIcon } from "../svgicons";

const TabHeader = ({ title }: String) => {
  return (
    <MainWrapper>
      <Wrapper>
        <ScreenName>{title}</ScreenName>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </Wrapper>
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
  padding: 50px 24px 24px;
`;

const IconWrapper = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 50;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
