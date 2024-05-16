import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EditPencilSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#47CF73"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-pencil"
    {...props}
  >
    <Path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5ZM15 5l4 4" />
  </Svg>
)
export default EditPencilSvg
