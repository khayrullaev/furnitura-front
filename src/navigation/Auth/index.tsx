import React, { useEffect } from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import {
  Onboarding,
  Login,
  ForgotPassword,
  Signup,
  SignupInfo,
} from "../../screens";

// types
import { AuthStackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Auth = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        animation: Platform.OS === "android" ? "fade" : "default",
        animationTypeForReplace: "push",
        headerShown: false,
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Login" component={Login} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="Signup" component={Signup} />
      <Screen name="SignupInfo" component={SignupInfo} />
    </Navigator>
  );
};

export default Auth;
