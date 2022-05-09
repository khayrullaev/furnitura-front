import React, { createContext, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native-animatable";
import { MaterialIndicator } from "react-native-indicators";

// styles
import { theme } from "../styles";

interface LoadingContextInterface {
  toggleLoadng: (loading: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextInterface | any>(
  undefined
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleLoading = (loading: boolean) => setVisible(loading);

  return (
    <LoadingContext.Provider value={{ toggleLoading }}>
      {children}
      {visible && (
        <Wrapper animation={"fadeIn"} duration={300}>
          <MaterialIndicator color={theme.main} size={50} />
        </Wrapper>
      )}
    </LoadingContext.Provider>
  );
};

const Wrapper = styled<any>(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
