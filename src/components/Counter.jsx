import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounter () {
    setCounter(prevState => prevState + 1)
    setCounter(prevState => prevState + 1)
  }

  function decrementCounter () {
    setCounter(prevState => prevState - 1)
    setCounter(prevState => prevState - 1)
  }

  return (
    <div>
        <h4>Counter Component</h4>

        <h6>Count Value:{"  "} {counter}</h6>
        <button onClick={() => incrementCounter()}>Increment By Two</button>
        <button onClick={() => decrementCounter()}>Decrement By Two</button>
    </div>
  )
}

export default Counter
