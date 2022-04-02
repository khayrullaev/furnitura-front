import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

// styles
import { theme } from "../../styles";

// components
import { AvatarIcon } from "../svgicons";

const ImagePicker = ({ img }: any) => {
  return (
    <Avatar style={{ borderRadius: 50 }}>
      {img ? (
        <Image
          source={img}
          style={{
            resizeMode: "contain",
          }}
        />
      ) : (
        <AvatarIcon />
      )}
    </Avatar>
  );
};

const Avatar = styled.View`
  width: 112px;
  height: 112px;

  background-color: ${theme.neutral5};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ImagePicker;
