import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

// assets
const Camera = require("../../../assets/camera-icon.png");

// styles
import { theme } from "../../styles";

// components
import { AvatarIcon } from "../svgicons";

const ImagePicker = ({ img }: any) => {
  return (
    <Avatar style={{ borderRadius: 50 }}>
      {img ? (
        <Image
          source={{
            uri: img,
          }}
          style={{
            resizeMode: "cover",
            width: 112,
            height: 112,
            borderRadius: 50,
          }}
        />
      ) : (
        <AvatarIcon />
      )}
      <CameraIcon style={{ borderRadius: 50 }} activeOpacity={0.8}>
        <Image source={Camera} />
      </CameraIcon>
    </Avatar>
  );
};

const Avatar = styled.View`
  width: 112px;
  height: 112px;
  background-color: ${theme.neutral5};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CameraIcon = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: -3px;
  bottom: -5px;
`;

export default ImagePicker;
