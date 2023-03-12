import './App.css'
import AboutMe from './Components/AboutMe'
import Advert from './Components/Advert'
import Briefcase from './Components/Briefcase'
import Contact from './Components/Contact'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Skills from './Components/Skills'

function App() {

  return (
    <div className="App">

      <NavBar/>
      
      <Home/>

      <AboutMe/>

      <Skills/>

      <Advert/>


      <Briefcase/>


      <Contact/>

    </div>
  )
}

export default App
