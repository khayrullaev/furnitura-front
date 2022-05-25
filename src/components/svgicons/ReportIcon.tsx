import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ReportIcon = ({ fill, ...rest }: { fill?: string } & SvgProps) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M9.26667 3.66665L9.10667 2.86665C9.04667 2.55998 8.77333 2.33331 8.45333 2.33331H3.66667C3.3 2.33331 3 2.63331 3 2.99998V13C3 13.3666 3.3 13.6666 3.66667 13.6666C4.03333 13.6666 4.33333 13.3666 4.33333 13V8.99998H8.06667L8.22667 9.79998C8.28667 10.1133 8.56 10.3333 8.88 10.3333H12.3333C12.7 10.3333 13 10.0333 13 9.66665V4.33331C13 3.96665 12.7 3.66665 12.3333 3.66665H9.26667Z"
        fill="#B0B0B0"
      />
    </Svg>
  );
};

export default ReportIcon;
