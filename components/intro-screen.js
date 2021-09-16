import { Html } from "@react-three/drei"

const IntroScreen = ({ start }) => {
  return (
    <Html
      className="html"
      fullscreen
      calculatePosition={(_, __, { width, height }) => [width / 2, height / 2]}
    >
      <div className="intro">
        <h1>Тут будет Легенда</h1>
        <p>обозначения цветов</p>
        <p>общие принципы работы</p>
        <button className="intro__btn btn" onClick={start}>
          начать
        </button>
      </div>
    </Html>
  )
}

export default IntroScreen
