import React from "react"

const CountIncrease = ({increaseCount, children}) => {
    console.log("Button to increase count")
  return (
    <div>
      <button onClick={() => increaseCount()}>{children}</button>
    </div>
  )
}

export default React.memo(CountIncrease)
