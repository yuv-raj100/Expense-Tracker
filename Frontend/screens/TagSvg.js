import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const TagSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="white"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-tag"
    {...props}
  >
    <Path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <Circle cx={7.5} cy={7.5} r={0.5} fill="currentColor" />
  </Svg>
)
export default TagSvg
