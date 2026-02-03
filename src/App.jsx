import {NavBar} from "@/layout/NavBar.jsx";
import {Hero} from "@/sections/Hero.jsx";
import {About} from "@/sections/About.jsx";
import {Experience} from "@/sections/Experience.jsx";
import {Contact} from "@/sections/Contact.jsx";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Contact/>

      </main>
    </div>
  )
}

export default App
