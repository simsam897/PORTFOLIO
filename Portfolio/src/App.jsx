
import React from 'react'

import { useState } from 'react'
import { Header } from './componenets/Header.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 className='text-red-500'>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>count</button>
    </>
  )
}

export default App
