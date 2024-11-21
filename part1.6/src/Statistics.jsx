import Stats from "./Stats"

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral;
  return (
    <table>
      <Stats text={"good"} stat={props.good} />
      <Stats text={"neutral"} stat={props.neutral} />
      <Stats text={"bad"} stat={props.bad} />
      <Stats text={"all"} stat={total} />
      <Stats text={"average"} stat={props.average} />
      <Stats text={"positive"} stat={props.positive} symbol={"%"} />
    </table>
  )
}

export default Statistics;