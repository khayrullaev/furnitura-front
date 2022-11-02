import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "../../../components/common";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("accessToken");
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        variant="contained"
        title="Logout"
        onPress={() => handleLogout()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default Profile;
