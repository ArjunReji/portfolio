import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
