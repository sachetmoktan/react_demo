import { useCallback, useMemo, useState } from "react";
import ShowCount from "./ShowCount";
import CountIncrease from "./CountIncrease";
import CountIncreaseByFive from "./CountIncreaseByFive";


const ReactHooks = () => {
    const [count, setCount] = useState(2);

    const [countByFive, setCountByFive] = useState(0);

    const increaseCount = useCallback (() => {
        setCount(prevCount => prevCount + 1)
    }, [count])

    const increaseCountByFive = useCallback((increment) => {
        setCountByFive(prevCountByFive => prevCountByFive + increment)
    }, [countByFive])

    const isDivisibleByTwo = useMemo( () => {
        for (let i=0; i<2000000000; i++) {}
        return count % 2 === 0 ? true : false
    }, [count])

  return (
    <div>
      <h1>React Hooks</h1>
      {isDivisibleByTwo ? "Divisible By Two" : "Not Divisible by Two"}
      <ShowCount count={count} />
      <CountIncrease increaseCount={increaseCount}>Button to Increase Count</CountIncrease>
      <ShowCount count={countByFive} />
      <CountIncreaseByFive increaseCountByFive={() => increaseCountByFive(10)}>Button to Increase Count By Five</CountIncreaseByFive>
    </div>
  )
}

export default ReactHooks;
