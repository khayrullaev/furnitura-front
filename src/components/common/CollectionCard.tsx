import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  url: string;
  onPress?: () => {};
};

const CollectionCard = ({ url, onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log("clicked")}
      style={{ marginLeft: 16 }}
    >
      <Image
        source={{
          url,
        }}
        style={{
          resizeMode: "cover",
          width: 210,
          height: 144,
          borderRadius: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default CollectionCard;
