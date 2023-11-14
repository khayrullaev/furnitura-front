import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { StyleSheet, FlatList } from "react-native";

// components
import { CategorySelect } from "../../../components/store";
import { ProductCard } from "../../../components/common";

// api
import { storeApi } from "../../../api/store";

// hooks
import { useLoadingContext } from "../../../hooks";

const Store = ({ navigation }: any) => {
  const [category, setCategory] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const { toggleLoading } = useLoadingContext();

  const fetchHomeProducts = async () => {
    toggleLoading(true);
    const res: any = await storeApi.getStoreProducts(category);
    console.log(res);
    setData(res.data);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchHomeProducts();
  }, [category]);

  console.log(data?.products);

  return (
    <PageWrapper>
      <CategorySelect category={category} setCategory={setCategory} />

      <FlatList
        style={styles.flatlist}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.flatlistContainer}
        data={data.products}
        renderItem={({ item }) => {
          return (
            <ProductCardWrapper>
              <ProductCard {...item} />
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
    height: "100%",
  },
  flatlistContainer: {
    paddingBottom: 140,
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
