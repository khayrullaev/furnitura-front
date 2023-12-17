import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../../redux/slices/cartSlice";

// components
import { Block, CommonText } from "../common";
import CartItemDeleteAction from "./CartItemDeleteAction";

// styles
import { theme } from "../../styles";

// assets
import PlusIcon from "../svgicons/Plus";
import MinusIcon from "../svgicons/Minus";

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increment(product?._id)), []);

  const onDecrease = useCallback(() => dispatch(decrement(product?._id)), []);

  const onDelete = useCallback(() => dispatch(removeItem(product?._id)), []);

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => <CartItemDeleteAction onPress={onDelete} />}
        containerStyle={styles.swipeable}
      >
        <Wrapper>
          <Block
            flex
            flexDirection="row"
            justifyContent="space-between"
            style={{ width: "100%" }}
          >
            <Image
              source={{
                url: product?.imageUrl,
              }}
              style={styles.image}
            />

            <Block flex flexDirection="column" flexBasis={"50%"} mr={20}>
              <CommonText
                fontFamily={theme.fonts.semiBold}
                size={16}
                fontWeight={"600"}
                lineHeight={24}
                color={theme.neutral1}
                mb={4}
              >
                {product?.title}
              </CommonText>
              <CommonText
                fontFamily={theme.fonts.medium}
                size={14}
                fontWeight={"500"}
                lineHeight={24}
                color={theme.neutral2}
                numberOfLines={1}
                mb={8}
              >
                {product?.overview}
              </CommonText>

              <Block flex flexDirection="row">
                {product?.isSale ? (
                  <>
                    <SalePrice>${product?.price}</SalePrice>
                    <Price>${product?.salePrice}</Price>
                  </>
                ) : (
                  <Price>${product?.price}</Price>
                )}
              </Block>
            </Block>

            <Block
              flex
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <TouchableOpacity onPress={onIncrease}>
                <PlusIcon />
              </TouchableOpacity>
              <CommonText size={16} lineHeight={24} fontWeight="500">
                {product?.quantity}
              </CommonText>
              <TouchableOpacity onPress={onDecrease}>
                <MinusIcon />
              </TouchableOpacity>
            </Block>
          </Block>
        </Wrapper>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 88,
    height: 88,
    borderRadius: 15,
    marginRight: 12,
    resizeMode: "cover",
  },

  swipeable: {
    marginBottom: 20,
  },
});

const Price = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  color: ${theme.primary};
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

const Wrapper = styled.View`
  width: 100%;
  height: 120px;
  padding: 16px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${theme.neutral4};
`;

export default CartItem;
