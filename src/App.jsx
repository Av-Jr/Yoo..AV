import './App.css'
import Hero from "./HeroS/Hero.jsx"
import Project from "./ProjectS/Project.jsx"
import About from "./AboutS/About.jsx"
import Footer from "./FooterS/Footer.jsx"

const App = () => {
  return(
      <div id="mainConApp">
          <Hero></Hero>
          <Project></Project>
          <About></About>
          <Footer></Footer>
      </div>
  )
}

export default App;