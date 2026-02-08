import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FancyCard from './components/FancyCard'
import ValentineApp from './components/ValentinesApp'
import RoseDay from './components/RoseDay'
import AppRouter from './components/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    {/* <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <FancyCard
        title="Day 1 💕"
        description="Do you remember the first time we talked?"
      />
    </div> */}
    {/* <ValentineApp />
     */}<AppRouter ></AppRouter>
     
  </>
  )
}

export default App
