import React from "react";
import { StyleSheet, FlatList, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

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
      <ScrollView>
        <CollectionWrapper>
          <SectionTitle withPadding={true}>New Collections</SectionTitle>
          <FlatList
            style={styles.flatlist}
            horizontal={true}
            keyExtractor={(item) => item.id}
            data={HOME_DATA.collections}
            renderItem={({ item }) => <CollectionCard url={item.url} />}
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
            <ProductCard
              title={"Gray beam"}
              overview="The Cloud Collection recalls the peaceful and close memories of Vietnamese souls for a slow way of life to enjoy in the midst of modern life. As the name implies, the collection is inspired by rattan material."
              description={`Rattan Armchair Chair with modern beauty, combining leather, ash and rattan. The design is exquisite and stands out by the curvature of the handrails in gentle and approachable colors.\nMay - Viet Spirit in the modern breath`}
              isSale={true}
              salePrice={89}
              price={61}
              src={
                "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png"
              }
            />
            <ProductCard
              title={"Gray beam"}
              overview="Tulip chair Table furniture"
              isSale={false}
              price={85}
              src={
                "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png"
              }
            />
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
            <ProductCard
              title={"Gray beam"}
              overview="Tulip chair Table furniture"
              isSale={false}
              price={85}
              src={
                "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png"
              }
            />
            <ProductCard
              title={"Gray beam"}
              overview="Tulip chair Table furniture"
              isSale={false}
              price={85}
              src={
                "https://res.cloudinary.com/dd4vsoahe/image/upload/v1651329679/furnitura/products/pngwing_1-17_vmoow6.png"
              }
            />
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
