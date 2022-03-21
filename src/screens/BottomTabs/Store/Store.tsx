import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Store = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.text}>Store Screen</Text>
      <Button
        title="Store Detail"
        onPress={() => navigation.navigate("StoreDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
  },
});

export default Store;
