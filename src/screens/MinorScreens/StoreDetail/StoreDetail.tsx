import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const StoreDetail = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.text}>StoreDetail Screen</Text>
      <Button
        title="Go To Product Detail"
        onPress={() => navigation.navigate("ProductDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
  },
});

export default StoreDetail;
