import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const AvatarIcon = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48 24C48 30.63 42.63 36 36 36C29.37 36 24 30.63 24 24C24 17.37 29.37 12 36 12C42.63 12 48 17.37 48 24ZM12 54C12 46.02 27.99 42 36 42C44.01 42 60 46.02 60 54V57C60 58.65 58.65 60 57 60H15C13.35 60 12 58.65 12 57V54Z"
        fill="#B0B0B0"
      />
    </Svg>
  );
};

export default AvatarIcon;
