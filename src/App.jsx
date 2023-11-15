import { useState } from 'react'
import './App.css'
import Shelf from './Shelf.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <Shelf/>
      </ul>
    </>
  )
}

export default App