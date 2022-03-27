import React from "react";
import { Text } from "react-native";

// components
import { Screen } from "../../components/layout";

const Login = () => {
  return (
    <Screen headerProps={{ title: "Login", withBackButton: false }}>
      <Text>Login Screen</Text>
    </Screen>
  );
};

export default Login;
