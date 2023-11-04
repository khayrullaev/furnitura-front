import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

// components
import {
  Block,
  Button,
  CommonText,
  IconButton,
} from "../../../components/common";

// assets
import {
  LeftArrow,
  ShareIcon,
  ReportIcon,
  HeartIcon,
} from "../../../components/svgicons";

// styles
import { theme } from "../../../styles";

const TABS = [
  {
    id: 0,
    label: "Overview",
  },
  {
    id: 1,
    label: "Detail",
  },
  {
    id: 2,
    label: "Reviews",
  },
];

const ProductDetail = ({ navigation, route }: any) => {
  const [tab, setTab] = useState<number>(0);
  const { details } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Block
        flexDirection="row"
        justifyContent="space-between"
        ph={24}
        pv={24}
        style={{ height: "40%" }}
      >
        <IconButton icon={LeftArrow} onPress={() => navigation.goBack()} />
        <Block justifyContent="center" alignItems="center">
          <Image
            style={{ width: 250, height: 250 }}
            source={{ url: details.imageUrl }}
          />
        </Block>

        <Block flexDirection="column" justifyContent="flex-start">
          <IconButton
            icon={ShareIcon}
            iconButtonStyles={{ marginBottom: 16 }}
          />
          <IconButton icon={ReportIcon} />
        </Block>
      </Block>

      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <IconButton icon={HeartIcon} />
        </View>

        <CommonText
          fontFamily={theme.fonts.semiBold}
          size={18}
          fontWeight={"600"}
          lineHeight={28}
        >
          {details.title}
        </CommonText>

        <Block
          flexDirection="row"
          alignItems="center"
          style={{ marginTop: 12, marginBottom: 20 }}
        >
          {details.isSale && <SalePrice>{`$${details.salePrice}`}</SalePrice>}
          <CommonText
            fontFamily={theme.fonts.bold}
            size={18}
            lineHeight={28}
            color={theme.primary}
          >
            {`$${details.price}`}
          </CommonText>
        </Block>

        <Block
          flexDirection="row"
          justifyContent="space-between"
          style={{ marginBottom: 20 }}
        >
          {TABS.map((item, index) => {
            return (
              <Pressable onPress={() => setTab(item.id)} key={index}>
                <TabItem active={item.id === tab} style={styles.tabItem}>
                  <CommonText
                    fontFamily={theme.fonts.medium}
                    size={16}
                    lineHeight={24}
                    color={item.id === tab ? theme.neutral1 : theme.neutral5}
                  >
                    {item.label}
                  </CommonText>
                </TabItem>
              </Pressable>
            );
          })}
        </Block>
        {tab === 0 && (
          <CommonText
            fontFamily={theme.fonts.medium}
            size={14}
            lineHeight={24}
            textAlign="left"
            color={theme.neutral2}
          >
            {details.description}
          </CommonText>
        )}
        {tab === 1 && (
          <>
            <CommonText
              fontFamily={theme.fonts.medium}
              size={14}
              lineHeight={24}
              textAlign="left"
              color={theme.neutral2}
            >
              {details.overview}
            </CommonText>
            <CommonText
              fontFamily={theme.fonts.semiBold}
              size={16}
              lineHeight={24}
              style={{ marginTop: 20 }}
            >
              Information
            </CommonText>

            <Block
              flexDirection="row"
              justifyContent="space-between"
              style={{ marginTop: 16 }}
            >
              <CommonText>Material</CommonText>
              <CommonText style={{ width: 200 }} numberOfLines={1}>
                {details.information?.material}
              </CommonText>
            </Block>
            <Block
              flexDirection="row"
              justifyContent="space-between"
              style={{ marginTop: 16 }}
            >
              <CommonText>Size</CommonText>
              <CommonText>{details.information?.size}</CommonText>
            </Block>
            <Block
              flexDirection="row"
              justifyContent="space-between"
              style={{ marginTop: 16 }}
            >
              <CommonText>Colors</CommonText>
              <Block flexDirection="row">
                {details.information?.colors.map(
                  (color: string, index: number) => {
                    return (
                      <View
                        key={index}
                        style={[
                          styles.colors,
                          { backgroundColor: "#" + color },
                        ]}
                      />
                    );
                  }
                )}
              </Block>
            </Block>
          </>
        )}
        {tab === 2 && <CommonText>Review</CommonText>}
      </View>
      <View style={styles.bottomButton}>
        <Button
          title="Add to bag"
          variant="contained"
          onPress={() => console.log("handle add to bag")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  detailsContainer: {
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 24,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    backgroundColor: theme.neutral5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowRadius: 20,
  },

  iconContainer: {
    position: "absolute",
    top: -20,
    right: 24,
  },

  tabItem: {
    borderRadius: 15,
  },

  bottomButton: {
    width: "100%",
    paddingHorizontal: 24,
    left: 0,
    right: 0,
    bottom: 35,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.neutral5,
  },

  colors: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 8,
  },
});

const SalePrice = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 18px;
  line-height: 28px;
  text-decoration: line-through;
  text-decoration-color: ${theme.neutral4};
  color: ${theme.neutral4};
  margin-right: 6px;
`;

const TabItem = styled.View<{ active: boolean }>`
  width: 110px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background-color: ${(props) =>
    props.active ? theme.accent : theme.neutral4};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;

export default ProductDetail;
