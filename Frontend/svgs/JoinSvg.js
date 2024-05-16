import * as React from "react";
import Svg, { Path } from "react-native-svg";

const JoinSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-merge"
    {...props}
  >
    <Path d="m8 6 4-4 4 4" />
    <Path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22M20 22l-5-5" />
  </Svg>
);
export default JoinSvg;
