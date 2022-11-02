import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const LeftArrow = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 6.70502C14.8132 6.51777 14.5595 6.41254 14.295 6.41254C14.0305 6.41254 13.7769 6.51777 13.59 6.70502L9.00002 11.295C8.61002 11.685 8.61002 12.315 9.00002 12.705L13.59 17.295C13.98 17.685 14.61 17.685 15 17.295C15.39 16.905 15.39 16.275 15 15.885L11.12 11.995L15 8.11502C15.39 7.72502 15.38 7.08502 15 6.70502Z"
        fill="#B0B0B0"
      />
    </Svg>
  );
};

export default LeftArrow;
