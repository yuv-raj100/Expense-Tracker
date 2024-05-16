import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"


const UserSvg
 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-user-round"
    {...props}
  >
    <Circle cx={12} cy={8} r={5} />
    <Path d="M20 21a8 8 0 0 0-16 0" />
  </Svg>
)
export default UserSvg

