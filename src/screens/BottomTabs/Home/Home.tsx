import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="ProductDetails"
        onPress={() => navigation.navigate("ProductDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratBold",
    fontSize: 24,
  },
});

export default Home;
