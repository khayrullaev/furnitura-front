import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// components
import CommonText from "./Text";

// styles
import { theme } from "../../styles";

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
    <View style={{ paddingHorizontal: 24, marginTop: 10 }}>
      <TouchableOpacity activeOpacity={0.8} style={styles.wrapper}>
        <Image
          source={{
            url,
          }}
          style={styles.image}
        />

        <CommonText
          fontFamily={theme.fonts.bold}
          size={16}
          lineHeight={24}
          mt={12}
          mb={8}
        >
          {title}
        </CommonText>

        <CommonText
          fontFamily={theme.fonts.regular}
          size={14}
          lineHeight={20}
          color={theme.neutral2}
          numberOfLines={2}
        >
          {description}
        </CommonText>

        <CommonText
          fontFamily={theme.fonts.regular}
          size={12}
          lineHeight={18}
          color={theme.neutral3}
          letterSpacing={0.8}
        >
          {new Date(date).toLocaleString().split(",")[0]}
        </CommonText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 15,
    shadowColor: theme.shadow,
    shadowOffset: {
      height: 0,
      width: -4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },

  image: {
    width: "100%",
    height: 136,
    resizeMode: "cover",
    borderRadius: 15,
  },
});

export default NewsScreenCollectionCard;
