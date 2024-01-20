import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { Block, Button, CommonText } from "../../../components/common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { OrdersIcon, LogoutIcon } from "../../../components/svgicons";
import { theme } from "../../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { resetUserData } from "../../../redux/slices/userSlice";

const UserImage = require("../../../../assets/user-image2.png");

const Profile = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => state.user);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("accessToken").then(() => {
      dispatch(resetUserData());
      navigation.navigate("SplashScreen");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserInfo>
        <Image style={styles.image} source={UserImage} />

        <Block ml={12} mt={6}>
          <CommonText
            fontFamily={theme.fonts.semiBold}
            size={16}
            style={{ marginBottom: 6 }}
          >
            {userData?.name}
          </CommonText>
          <CommonText
            fontFamily={theme.fonts.regular}
            size={16}
            color={theme.neutral2}
          >
            {userData?.email}
          </CommonText>
        </Block>
      </UserInfo>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.button}>
        <OrdersIcon />
      </TouchableOpacity>

      <Button
        variant="contained"
        title="Logout"
        onPress={() => handleLogout()}
      />
    </SafeAreaView>
  );
};

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  image: {
    width: 72,
    height: 72,
  },

  divider: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 24,
  },

  button: {
    marginBottom: 28,
  },
});

export default Profile;
