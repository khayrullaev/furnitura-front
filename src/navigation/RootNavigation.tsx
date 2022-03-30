import React from "react";
import "react-native-gesture-handler";
import { Platform } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// navigation
import Auth from "./Auth";
import Main from "./Main/Main";

// screens
import Splash from "../screens/Splash";

//types
import { RootStackParamList } from "../types/navigation";

// utils
import { navigationRef } from "../utils";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { Navigator, Screen } = Stack;

  // change the app background to white
  const GlobalTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={GlobalTheme} ref={navigationRef}>
      <Navigator
        initialRouteName={"SplashScreen"}
        screenOptions={{
          animation: Platform.OS === "android" ? "fade" : "default",
          animationTypeForReplace: "push",
          headerShown: false,
        }}
      >
        <Screen name="SplashScreen" component={Splash} />
        <Screen name="Auth" component={Auth} />
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
