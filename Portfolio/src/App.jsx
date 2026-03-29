
import React from 'react'
import './index.css'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500'>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>count</button>
    </>
  )
}

export default App
