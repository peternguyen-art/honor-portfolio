import {NavBar} from "@/layout/NavBar.jsx";
import {Hero} from "@/sections/Hero.jsx";
import {About} from "@/sections/About.jsx";
import {Experience} from "@/sections/Experience.jsx";
import {Contact} from "@/sections/Contact.jsx";
import { YearInReview } from "./sections/YearInReview";
import { Involvement } from "./sections/Involvement";
import { Gateway } from "./sections/Gateway";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Involvement/>
        <YearInReview/>
        <Gateway/>
        <Contact/>

      </main>
    </div>
  )
}

export default App
