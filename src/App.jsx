import { useState } from 'react'
import * as math from 'mathjs';
import Buttons from './components/buttons/buttons/buttons';
import Inputs from './components/buttons/inputs/inputs';

import './App.css'

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText([...text, val])
  }

  const showResult = () => {
    setResult(math.evaluate(text.join("")))
  }

  const clearText = () => {
    setText("");
    setResult("")
  }

  return (
    <>
      <div className='app'>
        <div className='wrapper'>
          <Inputs text={text} result={result} />
          <div className='row'>
            <Buttons symbol="1" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="2" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="3" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="/" color="#7C9D96" handleClick={addToText} />
          </div>
          <div className='row'>
            <Buttons symbol="4" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="5" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="6" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="*" color="#7C9D96" handleClick={addToText} />
          </div>
          <div className='row'>
            <Buttons symbol="7" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="8" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="9" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="+" color="#7C9D96" handleClick={addToText} />
          </div>
          <div className='row'>
            <Buttons symbol="0" color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="." color="#A1CCD1" handleClick={addToText} />
            <Buttons symbol="=" color="#A1CCD1" handleClick={showResult} />
            <Buttons symbol="-" color="#7C9D96" handleClick={addToText} />
          </div>
          <Buttons symbol="Clear" color="#E9B384" handleClick={clearText}/>
        </div>
      </div>
    </>
  )
}

export default App
