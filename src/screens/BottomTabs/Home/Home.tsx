import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

// api
import { homeApi } from "../../../api/home";

// components
import { CollectionCard, ProductCard } from "../../../components/common";

// hooks
import { useLoadingContext } from "../../../hooks";

// styles
import { theme } from "../../../styles";

const Home = () => {
  const [data, setData] = useState<any>({});
  const { toggleLoading } = useLoadingContext();

  const fetchHomeProducts = async () => {
    toggleLoading(true);
    const res: any = await homeApi.getHomeProducts();
    setData(res.data);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchHomeProducts();
  }, []);

  return (
    <PageWrapper>
      <ScrollView>
        <CollectionWrapper>
          <SectionTitle withPadding={true}>New Collections</SectionTitle>
          <FlatList
            style={styles.flatlist}
            horizontal={true}
            keyExtractor={(item) => item._id}
            data={data?.collections}
            renderItem={({ item }) => <CollectionCard url={item.imageUrl} />}
            showsHorizontalScrollIndicator={false}
          />
        </CollectionWrapper>

        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle withPadding={false}>Popular Products</SectionTitle>
            <Pressable>
              <MoreButton>More</MoreButton>
            </Pressable>
          </SectionHeaderWrapper>
          <SectionItemsWrapper>
            {data?.popularProducts?.map((product: any, index: number) => {
              return <ProductCard {...product} key={index} />;
            })}
          </SectionItemsWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle withPadding={false}>Sale Products</SectionTitle>
            <Pressable>
              <MoreButton>More</MoreButton>
            </Pressable>
          </SectionHeaderWrapper>
          <SectionItemsWrapper>
            {data?.saleProducts?.map((product: any, index: number) => {
              return <ProductCard {...product} key={index} />;
            })}
          </SectionItemsWrapper>
        </SectionWrapper>
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    display: "flex",
    paddingLeft: 24,
  },
});

const PageWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const CollectionWrapper = styled.View`
  margin-top: 24px;
`;

const SectionWrapper = styled.View`
  margin-top: 20px;
  padding: 0 24px;
`;

const SectionHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.neutral1};
`;

const SectionItemsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionTitle = styled.Text<{ withPadding: boolean }>`
  font-family: ${theme.fonts.semiBold};
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 12px;
  padding-left: ${(props) => (props.withPadding ? "24px" : 0)};
`;

const MoreButton = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${theme.primary};
  padding-top: 6px;
`;

export default Home;
