import { View, Text, Button } from "react-native";
import React from "react";

const Splash = ({ navigation }: any) => {
  return (
    <View>
      <Text>Splash Screen</Text>
      <Button title="Go to Auth" onPress={() => navigation.replace("Auth")} />
      <Button
        title="Go to BottomTabs"
        onPress={() => navigation.replace("Main")}
      />
    </View>
  );
};

export default Splash;
