import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

// components
import { Block, IconButton } from "../../../components/common";

// assets
import {
  LeftArrow,
  ShareIcon,
  ReportIcon,
  HeartIcon,
} from "../../../components/svgicons";

// styles
import { theme } from "../../../styles";

const ProductDetail = ({ navigation, route }: any) => {
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
            source={{ url: route.params.src }}
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
});

export default ProductDetail;
