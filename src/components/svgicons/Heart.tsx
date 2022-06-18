import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HeartIcon = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8.89981 13.5381C8.39315 13.9981 7.61315 13.9981 7.10648 13.5315L7.03315 13.4648C3.53315 10.2981 1.24648 8.22481 1.33315 5.63814C1.37315 4.50481 1.95315 3.41814 2.89315 2.77814C4.65315 1.57814 6.82648 2.13814 7.99981 3.51148C9.17315 2.13814 11.3465 1.57148 13.1065 2.77814C14.0465 3.41814 14.6265 4.50481 14.6665 5.63814C14.7598 8.22481 12.4665 10.2981 8.96648 13.4781L8.89981 13.5381Z"
        fill={fill ? fill : "#B0B0B0"}
      />
    </Svg>
  );
};

export default HeartIcon;
