// import { colors } from "@/helpers/constants"

import { colors } from "@/helpers/constants"
import { Plane } from "@react-three/drei"

const LineHeightHelper = ({ calcLineHeight, height, maxWidth }) =>
  Array.from({ length: Math.floor(height) }, (v, k) => k).map((el) => (
    <Plane
      key={el}
      args={[maxWidth, calcLineHeight, 10]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[
        0,
        0.02,
        calcLineHeight * el + calcLineHeight / 2 - height / 2,
      ]}
    >
      <meshBasicMaterial color={colors[el % Object.keys(colors).length]} />
    </Plane>
  ))

export default LineHeightHelper
