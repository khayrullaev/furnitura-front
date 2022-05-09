import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useLoadingContext } from "../../../hooks";

const ProductDetail = () => {
  const { toggleLoading } = useLoadingContext();

  useEffect(() => {
    toggleLoading(true);

    setTimeout(() => {
      toggleLoading(false);
    }, 3000);
  }, []);

  return (
    <View>
      <Text>ProductDetail Screen</Text>
    </View>
  );
};

export default ProductDetail;
