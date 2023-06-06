import React from "react"

const CountIncreaseByFive = ({increaseCountByFive, children}) => {
    console.log("Button to increase count by five")
  return (
    <div>
      <button onClick={() => increaseCountByFive()}>{children}</button>
    </div>
  )
}

export default React.memo(CountIncreaseByFive)
