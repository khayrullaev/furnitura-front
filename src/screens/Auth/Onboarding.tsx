import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation";

const Onboarding = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  return (
    <View>
      <Text>Onboarding Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default Onboarding;
