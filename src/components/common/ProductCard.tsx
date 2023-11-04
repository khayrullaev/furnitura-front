import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

// components
import Block from "./Block";

// styles
import { theme } from "../../styles";

// assets
import { HeartIcon, ReportIcon, ShareIcon } from "../svgicons";

type Props = {
  id?: number;
  imageUrl?: string | undefined;
  title: string;
  overview?: string;
  description?: string;
  isSale: boolean;
  price: number;
  salePrice?: number;
  information?: object;
};

const ProductCard = ({
  id,
  imageUrl,
  title,
  overview,
  description,
  information,
  isSale = false,
  price,
  salePrice,
}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          details: {
            id,
            imageUrl,
            title,
            overview,
            description,
            isSale,
            price,
            salePrice,
            information,
          },
        })
      }
    >
      <CardWrapper>
        <ImageWrapper>
          <Image source={{ url: imageUrl }} style={styles.image} />
          <IconsWrapper>
            <Icon activeOpacity={0.8} onPress={() => console.log("heart")}>
              <HeartIcon />
            </Icon>
            <Icon activeOpacity={0.8}>
              <ShareIcon />
            </Icon>
            <Icon activeOpacity={0.8}>
              <ReportIcon />
            </Icon>
          </IconsWrapper>
        </ImageWrapper>

        <InfoWrapper>
          <Title>{title}</Title>
          <Overview numberOfLines={2}>{overview}</Overview>
          <Block flexDirection="row">
            {isSale && <SalePrice>{`$${salePrice}`}</SalePrice>}
            <Price>{`$${price}`}</Price>
          </Block>
        </InfoWrapper>
      </CardWrapper>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 104,
    height: 104,
  },
});

const CardWrapper = styled.View`
  width: 156px;
  height: 252px;
  background-color: ${theme.neutral5};
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 16px;
`;

const ImageWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const IconsWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.TouchableOpacity`
  margin-bottom: 12px;
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
  overflow: hidden;
  text-align: left;
`;

const Overview = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: 14px;
  line-height: 20px;
  color: ${theme.neutral3};
  margin-bottom: 8px;
`;

const SalePrice = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  text-decoration: line-through;
  text-decoration-color: ${theme.neutral4};
  color: ${theme.neutral4};
  margin-right: 6px;
`;

const Price = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  color: ${theme.primary};
`;

export default ProductCard;
