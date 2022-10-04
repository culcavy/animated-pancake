import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Content from './input.mdx'
import "bulma/css/bulma.css"
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Router } from './router'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App
