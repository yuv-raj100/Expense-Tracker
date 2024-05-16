import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={props.color}

    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-plus"
    {...props}
  >
    <Path d="M5 12h14M12 5v14" />
  </Svg>
)
export default PlusSvg
