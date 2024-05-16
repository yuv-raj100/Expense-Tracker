import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RuppeTagSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-receipt-indian-rupee"
    {...props}
  >
    <Path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1ZM8 7h8" />
    <Path d="M12 17.5 8 15h1a4 4 0 0 0 0-8M8 11h8" />
  </Svg>
)
export default RuppeTagSvg