import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Banner from './Components/Banner.jsx' 
import Body from './Components/Body.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}

export default App
