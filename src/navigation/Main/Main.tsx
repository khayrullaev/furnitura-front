import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// navigation
import BottomTabs from "./BottomTabs";
import { getMinorScreens } from "./MinorScreens";

const Stack = createNativeStackNavigator();

const Main = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator
      screenOptions={{
        animation: Platform.OS === "android" ? "fade" : "default",
        animationTypeForReplace: "push",
        headerShown: false,
      }}
    >
      <Screen name="Tabs" component={BottomTabs} />
      {getMinorScreens()}
    </Navigator>
  );
};

export default Main;
