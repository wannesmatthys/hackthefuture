import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/base/Header'
import Button from './components/base/Button'
import Input from './components/base/Input'
import Landing from './components/Landing'
import CreateLobby from './components/CreateLobby'
import JoinLobby from './components/JoinLobby'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={"HTF"}/>
      <Game />
    </div>
  )
}

export default App
