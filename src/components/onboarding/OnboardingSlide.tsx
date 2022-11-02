import React from "react";
import { Image, View, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

// styles
import { theme } from "../../styles";

type Props = {
  width: number;
  height: number;
  item: {
    id: string;
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
  };
};

const OnboardingSlide = ({ item, width, height }: Props) => {
  return (
    <SlideWrapper width={width} height={height}>
      <Image
        source={item?.image}
        style={{
          height: height * 0.4,
          width: width * 0.9,
          resizeMode: "contain",
        }}
      />
      <View>
        <Title>{item?.title}</Title>
        <Subtitle>{item?.subtitle}</Subtitle>
      </View>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.View<{ width: number; height: number }>`
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height * 0.7}px;
  width: ${(props) => props.width}px;
`;

const Title = styled.Text`
  font-family: ${theme.fonts.extraBold};
  font-size: 24px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: ${theme.neutral1};
  text-align: center;
  margin-bottom: 12px;
`;

const Subtitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  line-height: 20px;
  color: ${theme.neutral3};
  text-align: center;
  padding-left: 42px;
  padding-right: 42px;
`;

export default OnboardingSlide;
