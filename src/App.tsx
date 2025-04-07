import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Newsletter from "./sections/Newsletter"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

const App = () => {
  return (
    <div className="min-h-screen mx-auto overflow-hidden pt-3 px-3 md:px-16 lg:w-[60%] relative">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App