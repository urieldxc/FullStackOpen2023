import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
 

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({name, set, rate})=>{
  const handleRate = (name) =>{
    if (name === "good") set(rate+1)
    if (name === "neutral") set(rate +1)
    if (name === "bad") set(rate +1)
  }
  return(
    <button onClick={() => handleRate("good")}>
      {name}
    </button>
  )
}

const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h2>Give Feedback</h2>
      <Button name={"good"} rate={good} set={setGood} />
      <Button name={"neutral"} rate={neutral} set={setNeutral} />
      <Button name={"bad"} rate={bad} set={setBad}/>
      
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p> 
      <p>All: {bad+good+neutral} </p>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 