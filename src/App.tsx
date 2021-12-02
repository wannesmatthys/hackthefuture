import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/base/Header'
import Button from './components/base/Button'
import Input from './components/base/Input'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-between flex-col min-h-screen">
      <Header title={"HTF"}/>
      <Landing />
      <div className="bg-gray-100">Footer? :p</div>
    </div>
  )
}

export default App
