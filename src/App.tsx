import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/base/Header'
import Button from './components/base/Button'
import Input from './components/base/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500">
      <Header title={"HTF"}/>
    </div>
  )
}

export default App
