import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [count, setCount] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  const [index, setIndex] = useState(0);

  const updateSetSelected = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const vote = () => {
    console.log(count);
    const updatedCount = [...count];    // Create a copy of the count array
    updatedCount[selected] += 1;    // Increment the vote for the selected anecdote
    setCount(updatedCount);    // Update the state with the new vote counts
  }

  const findMaxVotes = () => {
    let max = count[0];
    let maxIndex = 0;

    for (let i = 1; i < count.length; i++) {
      if (count[i] > max) {
        max = count[i];
        maxIndex = i;
      }
    }

    console.log(`Max value: ${max}, at index: ${maxIndex}`);
    setIndex(maxIndex);
    return maxIndex;
  }


  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <p>has {count[selected]} votes</p>
        <div>
          <button onClick={vote} >vote</button>
          <button onClick={updateSetSelected}>next anecdote</button>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[index]}
        <p>has {count[index]} votes</p>
      </div>
    </>
  )
}

export default App