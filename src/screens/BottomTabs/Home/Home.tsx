import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import styled from "styled-components/native";
// import { FlatList } from "react-native-gesture-handler";

// components
import { CollectionCard, ProductCard } from "../../../components/common";

// styles
import { theme } from "../../../styles";

const HOME_DATA = {
  collections: [
    {
      id: 1,
      url: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1653205673/furnitura/collections/pexels-max-vakhtbovych-6492397_mqxygh.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1653205643/furnitura/collections/pexels-pixabay-271816_yhu1n8.jpg",
    },
  ],
};

const Home = ({ navigation }: any) => {
  return (
    <PageWrapper>
      <CollectionWrapper>
        <SectionText withPadding={true}>New Collections</SectionText>
        <FlatList
          horizontal={true}
          keyExtractor={(item) => item.id}
          data={HOME_DATA.collections}
          renderItem={({ item }) => <CollectionCard url={item.url} />}
          showsHorizontalScrollIndicator={false}
        />
      </CollectionWrapper>
      <ProductWrapper>
        <SectionText withPadding={false}>Popular Products</SectionText>
        <ProductCard
          title={"Gray beam"}
          overview="Tulip chair Table furniture"
          isSale={false}
          price={85}
          src={
            "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png"
          }
        />
      </ProductWrapper>
      <ProductWrapper>
        <SectionText withPadding={false}>Sale</SectionText>
      </ProductWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px 0;
`;

const CollectionWrapper = styled.View``;

const SectionText = styled.Text<{ withPadding: boolean }>`
  font-family: ${theme.fonts.semiBold};
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 12px;
  padding-left: ${(props) => (props.withPadding ? "24px" : 0)};
`;

const ProductWrapper = styled.View`
  padding: 20px 24px;
`;

export default Home;
