import { Html } from "@react-three/drei"
import cn from "classnames"

const HtmlWrapper = ({ children, className, ...rest }) => {
  return (
    <Html
      className={cn("html", className)}
      fullscreen
      calculatePosition={(_, __, { width, height }) => [width / 2, height / 2]}
      {...rest}
    >
      {children}
    </Html>
  )
}

export default HtmlWrapper
