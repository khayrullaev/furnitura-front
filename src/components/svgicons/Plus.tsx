import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

const PlusIcon = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={fill || "none"}>
      <Rect width="24" height="24" rx="5" fill="#FFCA27" />
      <Path
        d="M13.123 10.1777H16.834V12.3457H13.123V16.5742H10.8184V12.3457H7.08789V10.1777H10.8184V6.22266H13.123V10.1777Z"
        fill="white"
      />
    </Svg>
  );
};

export default PlusIcon;
