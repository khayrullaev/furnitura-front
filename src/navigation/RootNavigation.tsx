import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          key={1}
          name="BottomTabs"
          component={BottomTabs}
          options={
            {
              headerBackTitleVisible: false,
              headerTitle: "",
            } as any
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
