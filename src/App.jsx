import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import Footer from './components/shared/Footer'
import MainLayout from './components/layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
        </Route>

        {/* Rutas sin Navbar y Footer */}
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LogInPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
