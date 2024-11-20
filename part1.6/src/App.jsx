import { useState } from 'react'
import Button from './Button'
import Stats from './Stats'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodStats = () => setGood(good + 1);
  const setNeutralStats = () => setNeutral(neutral + 1);
  const setBadStats = () => setBad(bad + 1);

  const calculateAverage = () => {
    const total = good + neutral + bad;
    if (total === 0) return 0;
    const sum = good - bad;
    return sum / total;
  };

  const calculatePositive = () => {
    const total = good + neutral + bad;
    if (total === 0) return 0;
    const positive = (good / total) * 100;
    return positive;
  };

  const totalFeedback = good + neutral + bad;

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={setGoodStats} />
        <Button text="neutral" onClick={setNeutralStats} />
        <Button text="bad" onClick={setBadStats} />
      </div>
      <div>
        <h1>statistics</h1>
        {totalFeedback > 0 ?
          (
            <>
              <Statistics good={good} neutral={neutral} bad={bad}
                average={calculateAverage()} positive={calculatePositive()} />
            </>
          ) :
          (
            <div> No feedback given</div>
          )}
      </div>
    </>
  )
}

export default App;
