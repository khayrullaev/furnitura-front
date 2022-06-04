import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, FlatList } from "react-native";

// components
import { CategorySelect } from "../../../components/store";
import { ProductCard } from "../../../components/common";

const STORE_DATA = [
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
];

const Store = ({ navigation }: any) => {
  const [category, setCategory] = useState<string>("");

  return (
    <PageWrapper>
      <CategorySelect category={category} setCategory={setCategory} />

      {/* <ProductsWrapper> */}
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        data={STORE_DATA}
        renderItem={(item) => <ProductCard {...item} />}
      />
      {/* </ProductsWrapper> */}
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  flatlistContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
});

const PageWrapper = styled.View`
  width: 100%;
  height: 100%;
  /* padding: 24px 0; */
  border: 1px solid salmon;
  background-color: white;
`;

const ProductsWrapper = styled.View`
  margin-top: 20px;
  border: 1px solid blue;
`;
export default Store;
