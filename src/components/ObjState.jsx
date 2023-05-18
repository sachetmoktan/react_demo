import { useState } from "react"

const ObjState = () => {
    const [formData, setFormData] = useState({
        name: "Batman",
        age: 20
    })
    function changeFormData () {
        setFormData({
            ...formData,
            name: "Superman",
            age: 30
        })
    }
    function resetFormData () {
        setFormData({
            ...formData,
            name: "Batman",
            age: 20
        })
    }

  return (
    <div>
      <h5>Form Data: {" "} {formData.name} - {formData.age}</h5>
      <button onClick={() => changeFormData()}>Change Formdata</button>
      <button onClick={() => resetFormData()}>Reset Formdata</button>
    </div>
  )
}

export default ObjState
