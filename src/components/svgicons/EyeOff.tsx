import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const EyeOff = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="24" height="18" viewBox="0 0 24 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5C8.81818 5 6.10091 6.866 5 9.5C6.10091 12.134 8.81818 14 12 14C15.1818 14 17.8991 12.134 19 9.5C17.8991 6.866 15.1818 5 12 5ZM12 12.5C10.2436 12.5 8.81818 11.156 8.81818 9.5C8.81818 7.844 10.2436 6.5 12 6.5C13.7564 6.5 15.1818 7.844 15.1818 9.5C15.1818 11.156 13.7564 12.5 12 12.5ZM10.0909 9.5C10.0909 8.504 10.9436 7.7 12 7.7C13.0564 7.7 13.9091 8.504 13.9091 9.5C13.9091 10.496 13.0564 11.3 12 11.3C10.9436 11.3 10.0909 10.496 10.0909 9.5Z"
        fill="#B0B0B0"
      />
      <Path d="M1.13757 2L22.0342 16.2292" stroke="#BABABA" stroke-width="2" />
    </Svg>
  );
};

export default EyeOff;
