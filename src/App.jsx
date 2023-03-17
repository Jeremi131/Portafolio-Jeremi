import { useState } from 'react'
import './App.css'
import AboutMe from './Components/AboutMe'
import Advert from './Components/Advert'
import Briefcase from './Components/Briefcase'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Loading from './Components/load/Loading'
import NavBar from './Components/NavBar'
import Skills from './Components/Skills'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const loading = setTimeout(() => setIsLoading(false), 5000)

  return (
    isLoading ?
        <Loading />
        :
      <div className="App">

        <NavBar />

        <Home />

        <AboutMe />

        <Skills />

        <Advert />

        <Briefcase />

        <Contact />

      </div>
  )
}

export default App
