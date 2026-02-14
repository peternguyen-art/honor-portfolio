import { Download, Menu } from "lucide-react";
import {useState} from "react";
import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#involvement", label: "Involvement" },
  { href: "#year-in-review", label: "Year in Review" },
  { href: "#gateway", label: "Gateway" },
  { href: "#contact", label: "Contact" },
];

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          PN<span className="text-primary">.</span>
        </a>

        {/*Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {NavLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* {CTA Button} */}
        <div className="hidden md:block">
            <AnimatedBorderButton className="flex flex-wrap gap-4 animate-fade-in animation-delay-100">
              <Download className="w-5 h-5"/>
              Download Resume
            </AnimatedBorderButton>
        </div>

        {/*Mobile Nav - Hamburger Menu*/}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* Mobile Menu - Hidden by default */}
     {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {NavLinks.map((link, index) => (
              <a 
              href={link.href} 
              key={index} 
              onClick={()=> setIsMobileMenuOpen(false)}
              className="text-lg text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </a>
            ))}

            <AnimatedBorderButton onClick={()=> setIsMobileMenuOpen(false)}>
              <Download className="w-5 h-5"/>
              Download Resume
            </AnimatedBorderButton>
        </div>
     </div>)}
    </header>
  );
};
