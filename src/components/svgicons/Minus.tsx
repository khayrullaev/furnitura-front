import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

const MinusIcon = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#DBDBDB" />
      <Path
        d="M15.2344 14.0417H8.63672V11.3112H15.2344V14.0417Z"
        fill="#B0B0B0"
      />
    </Svg>
  );
};

export default MinusIcon;
