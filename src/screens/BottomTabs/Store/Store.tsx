import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, FlatList } from "react-native";

// components
import { CategorySelect } from "../../../components/store";
import { ProductCard } from "../../../components/common";

const STORE_DATA = {
  products: [
    {
      id: 1,
      title: "Gray beam",
      overview: "Tulip chair Table furniture",
      price: 85,
      isSale: false,
      src: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png",
    },
    {
      id: 2,
      title: "Gray beam",
      overview: "Tulip chair Table furniture",
      price: 85,
      isSale: false,
      src: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png",
    },
    {
      id: 3,
      title: "Gray beam",
      overview: "Tulip chair Table furniture",
      price: 85,
      isSale: false,
      src: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png",
    },
    {
      id: 4,
      title: "Gray beam",
      overview: "Tulip chair Table furniture",
      price: 85,
      isSale: false,
      src: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png",
    },
    {
      id: 5,
      title: "Gray beam",
      overview: "Tulip chair Table furniture",
      price: 85,
      isSale: false,
      src: "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png",
    },
  ],
};

const Store = ({ navigation }: any) => {
  const [category, setCategory] = useState<string>("");

  return (
    <PageWrapper>
      <CategorySelect category={category} setCategory={setCategory} />

      <FlatList
        style={styles.flatlist}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        data={STORE_DATA.products}
        renderItem={({ item }) => {
          return (
            <ProductCardWrapper>
              <ProductCard
                id={item.id}
                title={item.title}
                overview={item.overview}
                price={item.price}
                isSale={item.isSale}
                src={item.src}
              />
            </ProductCardWrapper>
          );
        }}
      />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  flatlistContainer: {
    paddingBottom: 200,
  },
});

const PageWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const ProductCardWrapper = styled.View`
  margin-right: 30px;
  margin-bottom: 20px;
`;
export default Store;
