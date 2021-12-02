import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/base/Button'
import Input from './components/base/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-5">
      <Input value="" placeholder="test" />
    </div>
  )
}

export default App
