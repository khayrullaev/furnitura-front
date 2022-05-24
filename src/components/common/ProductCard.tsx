import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../styles";

type Props = {
  src?: string;
  title: string;
  overview: string;
  isSale?: boolean;
  price: number;
  salePrice?: number;
};

const ProductCard = ({
  src,
  title,
  overview,
  isSale = false,
  price,
  salePrice,
}: Props) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image source={{ url: src }} style={{ width: 104, height: 104 }} />
      </ImageWrapper>

      <InfoWrapper>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
        <Price>{`$${price}`}</Price>
      </InfoWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.View`
  width: 156px;
  height: 252px;
  background-color: ${theme.neutral5};
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 16px;
`;

const ImageWrapper = styled.View`
  /* align-self: center; */
`;

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const Title = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  color: ${theme.neutral1};
  margin-bottom: 4px;
`;

const Overview = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: 14px;
  line-height: 20px;
  color: ${theme.neutral3};
  margin-bottom: 8px;
`;

const Price = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  color: ${theme.primary};
`;

export default ProductCard;
