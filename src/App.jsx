import { useState } from 'react'
import Buttons from './components/buttons/buttons/buttons';
import Inputs from './components/buttons/inputs/inputs';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='wrapper'>
          <Inputs />
          <div className='row'>
            <Buttons symbol="1" color="#7C9D96" />
            <Buttons symbol="2" color="#7C9D96" />
            <Buttons symbol="3" color="#7C9D96" />
            <Buttons symbol="/" color="#A1CCD1" />
          </div>
          <div className='row'>
            <Buttons symbol="4" color="#7C9D96" />
            <Buttons symbol="5" color="#7C9D96" />
            <Buttons symbol="6" color="#7C9D96" />
            <Buttons symbol="*" color="#A1CCD1" />
          </div>
          <div className='row'>
            <Buttons symbol="7" color="#7C9D96" />
            <Buttons symbol="8" color="#7C9D96" />
            <Buttons symbol="9" color="#7C9D96" />
            <Buttons symbol="+" color="#A1CCD1" />
          </div>
          <div className='row'>
            <Buttons symbol="0" color="#7C9D96" />
            <Buttons symbol="." color="#7C9D96" />
            <Buttons symbol="=" color="#7C9D96" />
            <Buttons symbol="-" color="#A1CCD1" />
          </div>
          <Buttons symbol="Clear" color="#E9B384" />
        </div>
      </div>
    </>
  )
}

export default App
