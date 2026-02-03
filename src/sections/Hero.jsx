import { Button } from "@/components/Button.jsx";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin, ChevronDown } from "lucide-react";


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="/hero_black.jpg"
          alt="hero image: pink smoke with a blue background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* {Left Column Content} */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-primary px-4 py-2 rounded-full glass text-md">
                <span className="w-2 h-2 bg-primary rounded-full inline-block animate-pulse" />
                Software Engineer - Game Developer - Tech Enthusiast
              </span>
            </div>

            {/* {HeadLine} */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">digital</span>{" "}
                experience that <br />
                <span className="font-serif italic font-normal">matters.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm Peter Nguyen, a passionate software and game developer
                dedicated to crafting innovative and meaningful digital
                experiences. I build websites and applications, 
                work with Unity and Unreal to create immersive games, and
                explore new technologies to push the boundaries of what's
                possible.
              </p>
            </div>

            {/* {CTAs} */}
            <div>
              <Button>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            {/* {Socials} */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/peternguyen-art" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/peter-nguyen1809/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* {Right Column Content} */}
          <div className="relative animate-fade-in">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="profile.jpeg"
                  alt="Peter Nguyen Profile"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-300">
                  <div className="text-2xl font-bold text-primary">2028</div>
                  <div className="text-xs text-muted-foreground">
                    Graduate Class
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-300"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
