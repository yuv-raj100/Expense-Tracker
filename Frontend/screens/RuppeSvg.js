import * as React from "react"
import Svg, { Path } from "react-native-svg"


const RuppeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-badge-indian-rupee"
    {...props}
  >
    <Path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76ZM8 8h8M8 12h8" />
    <Path d="m13 17-5-1h1a4 4 0 0 0 0-8" />
  </Svg>
)
export default RuppeSvg
