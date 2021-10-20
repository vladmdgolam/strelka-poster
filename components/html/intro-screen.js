import { Html } from "@react-three/drei"
import HtmlWrapper from "./html"

const IntroScreen = ({ start }) => {
  return (
    <HtmlWrapper className="html_intro" zIndexRange={[100, 0]}>
      <div className="intro">
        <h1>Генератор постеров открытого кода</h1>
        <br />
        <h2>
          включи микрофон
          <br />
          напиши что-нибудь
          <br />
          используй камеру
        </h2>
        <button className="btn btn__intro" onClick={start}>
          начать
        </button>
      </div>
    </HtmlWrapper>
  )
}

export default IntroScreen
