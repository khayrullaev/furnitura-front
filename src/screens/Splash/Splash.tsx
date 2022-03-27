import React, { useEffect } from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// theme
import { theme } from "../../styles";

// types
import { RootStackParamList } from "../../types/navigation";

// hooks
import { useAppDispatch } from "../../hooks";

// redux
import { getProfileInfo } from "../../redux/slices/userSlice";

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Splash = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const getUserInfo = async () => {
    const response: any = await dispatch(getProfileInfo());
    if (response) {
      navigation.replace("Main");
    } else {
      navigation.replace("Auth");
    }
  };

  useEffect(() => {
    const isInitialLaunch: any = AsyncStorage.getItem("isInitialLaunch");
    if (isInitialLaunch === "Y") {
      navigation.replace("Auth", { screen: "Onboarding" });
    } else {
      getUserInfo();
    }
  }, []);

  return <Wrapper />;
};

const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.neutral5};
`;

export default Splash;
