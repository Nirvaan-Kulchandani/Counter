import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const Increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <div className='container'>
      <h1>Counter App</h1>
      <h2 id='count'>{count}</h2>
      <div>
        <button id='inc' onClick={Increment}>Increment</button>
        <button id='dec' onClick={Decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App