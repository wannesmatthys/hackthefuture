import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/base/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500">
      <Header title={"HTF"}/>
    </div>
  )
}

export default App
