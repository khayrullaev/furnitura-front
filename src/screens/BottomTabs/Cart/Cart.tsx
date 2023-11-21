import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

// components
import { CartItem } from "../../../components/cart";
import { Block, Button, CommonText } from "../../../components/common";

// styles
import { theme } from "../../../styles";

const Cart = () => {
  const { cartItems } = useSelector((state: any) => state.cart);

  const total = Array.isArray(cartItems)
    ? cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    : 0;

  return (
    <PageWrapper>
      <ScrollView style={{ padding: 24 }}>
        {cartItems?.map((item: any) => (
          <CartItem product={item} />
        ))}
      </ScrollView>

      {1 > 0 && (
        <Block p={24}>
          <Block
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt={40}
            mb={30}
          >
            <CommonText
              size={18}
              fontFamily={theme.fonts.semiBold}
              fontWeight={"700"}
              color={theme.neutral2}
            >
              Total
            </CommonText>
            <CommonText
              fontFamily={theme.fonts.bold}
              fontWeight={"700"}
              size={24}
              color={theme.primary}
            >
              ${total}
            </CommonText>
          </Block>
          <Button
            variant="contained"
            buttonStyle={{ marginBottom: 20 }}
            title="Payment"
            onPress={() => {}}
          />
        </Block>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export default Cart;
