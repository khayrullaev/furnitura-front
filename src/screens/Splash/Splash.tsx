import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Splash = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Button title="Go to Auth" onPress={() => navigation.replace("Auth")} />
      <Button
        title="Go to BottomTabs"
        onPress={() => navigation.replace("Main")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default Splash;
