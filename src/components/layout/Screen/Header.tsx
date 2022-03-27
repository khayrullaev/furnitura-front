import React from "react";
import styled from "styled-components/native";

// components
import { IconButton } from "../../common";
import { LeftArrow } from "../../svgicons";

// styles
import { theme } from "../../../styles";

// utils
import { navigation } from "../../../utils";

export type HeaderProps = {
  title: string;
  withBackButton?: boolean;
  withRightIcon?: boolean;
  rightIcon?: any;
  rightIconAction?: () => void;
};

const Header = ({
  title,
  withBackButton = true,
  withRightIcon = false,
  rightIcon,
  rightIconAction = () => {},
}: HeaderProps) => {
  const renderLeft = () => {
    if (withBackButton) {
      return (
        <IconButton icon={LeftArrow} onPress={() => navigation.goBack()} />
      );
    }
  };

  const renderRight = () => {
    if (withRightIcon) {
      return <IconButton icon={rightIcon} onPress={rightIconAction} />;
    }
  };

  return (
    <HeaderWrapper>
      <LeftWrapper>{renderLeft()}</LeftWrapper>
      <CenterWrapper>
        <Title>{title}</Title>
      </CenterWrapper>
      <RightWrapper>{renderRight()}</RightWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

const LeftWrapper = styled.View`
  flex: 1;
`;
const CenterWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const RightWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Title = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 18px;
  line-height: 28px;
  color: ${theme.neutral1};
`;

export default Header;
