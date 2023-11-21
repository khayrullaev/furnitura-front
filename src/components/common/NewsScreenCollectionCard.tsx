import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  url: string;
  title: string;
  description: string;
  date: Date;
  views: number;
  onPress?: () => {};
};

const NewsScreenCollectionCard = ({
  url,
  title,
  description,
  date,
  views,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log("clicked")}
      style={{ marginRight: 16 }}
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

export default NewsScreenCollectionCard;
