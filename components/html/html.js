import { Html } from "./Html-Drei"
import cn from "classnames"

const HtmlWrapper = ({ children, className, ...rest }) => {
  return (
    <Html
      className={cn("html", className)}
      {...rest}
    >
      {children}
    </Html>
  )
}

export default HtmlWrapper
