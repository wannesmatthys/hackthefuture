import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/base/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-5">
      <Button text="Start game" />
    </div>
  )
}

export default App
