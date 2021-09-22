import HtmlWrapper from "../html/html"

const Btn = ({ position = 1, name = "click", children, ...props }) => {
  return (
    <HtmlWrapper>
      <div className="controls">
        <button
          {...props}
          className="btn btn_round"
          style={{ gridColumn: position }}
        >
          {children ? children : name}
        </button>
      </div>
    </HtmlWrapper>
  )
}

export default Btn
