import { Html } from "@react-three/drei"
import HtmlWrapper from "./html"

const IntroScreen = ({ start }) => {
  return (
    <HtmlWrapper className="html_intro">
      <div className="intro">
        <h1>Тут будет Легенда</h1>
        <p>обозначения цветов</p>
        <p>общие принципы работы</p>
        <button className="btn btn__intro" onClick={start}>
          начать
        </button>
      </div>
    </HtmlWrapper>
  )
}

export default IntroScreen
