import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TickSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-check"
    {...props}
  >
    <Path d="M20 6 9 17l-5-5" />
  </Svg>
);
export default TickSvg;
