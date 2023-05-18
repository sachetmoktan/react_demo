import './App.css'
import { useState } from 'react';
import Message from './components/Message';
import ClassComp from './components/ClassComp';
import Counter from './components/Counter';
import ObjState from './components/ObjState';

function App() {
  const [showMessage, setShowMessage] = useState(true);
  const [propsFromChild, setPropsFromChild] = useState();

  function toggleViewMessage () {
    setShowMessage(!showMessage)
  }
  

  function fetchFromChild (childProp) {
    setPropsFromChild(childProp)
  }

  return (
    <>
      {showMessage ? <Message userName={"Your_Name"} fetchFromChild={fetchFromChild} /> : <p>Message is Hidden</p>}
      <button onClick={() => toggleViewMessage()}>{`${showMessage ? "Hide" : "Show"} Message`}</button>
      <div>
        {propsFromChild && propsFromChild}
        {propsFromChild && <button onClick={() => setPropsFromChild()}>ResetChildProps</button>}
      </div>

      <hr />
      <Counter />
      <hr />

      <ObjState />
      
      <ClassComp />
    </>
  )
}

export default App
