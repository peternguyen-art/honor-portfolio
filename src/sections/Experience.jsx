import React from 'react';
import { ExternalLink, Terminal, Cpu, Layout } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-slow-drift" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Media Box */}
          <div className="lg:col-span-6 animate-fade-in">
            <div className="relative group">
              {/* Animated Glow behind the box */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-gold/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative glass-strong p-3 rounded-[3rem] glow-border overflow-hidden">
                {/* Main Media Image */}
                <div className="relative aspect-video rounded-[2rem] overflow-hidden">
                  <img 
                    src="profile.jpeg" // Replace with a project screenshot or media
                    alt="Experience Highlight" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                </div>

                {/* Tech Stack Pills */}
                <div className="flex gap-3 p-4 overflow-hidden">
                  {[
                    { icon: <Layout className="w-3 h-3" />, label: "React" },
                    { icon: <Cpu className="w-3 h-3" />, label: "Unreal Engine" },
                    { icon: <Terminal className="w-3 h-3" />, label: "C++" }
                  ].map((tech, i) => (
                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {tech.icon} {tech.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Experience Text (200 words) */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in animation-delay-200">
            <div className="space-y-2">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Featured Experience</h2>
              <h1 className="text-5xl font-bold leading-tight">
                Something <br /> 
                <span className="text-primary glow-text font-serif italic font-normal">Meaningful</span>
              </h1>
            </div>

            <div className="glass p-8 md:p-10 rounded-[2.5rem] border-l-4 border-primary">
              <div className="prose prose-invert text-muted-foreground leading-relaxed text-md space-y-6">
                <p>
                  Cras lectus est, semper eget semper at, pretium nec libero. Cras ornare sit amet elit non suscipit. Curabitur molestie lectus vel neque tincidunt, sed malesuada urna gravida. Phasellus metus libero, fermentum eget mi nec, commodo luctus velit. Praesent in ex blandit, condimentum libero non, lobortis ex. Aliquam rhoncus egestas mollis. Donec nulla ex, ullamcorper auctor convallis sit amet, euismod sit amet felis. Ut ullamcorper quis ante eu feugiat. Nam id faucibus libero. Proin tempor est augue. Duis at vulputate nunc, varius ultricies eros. Nam fermentum eu dolor in accumsan.
                </p>
                <p>
                  Aenean et nulla mollis, pulvinar felis a, commodo mi. Mauris egestas nisl nisl, ac laoreet mauris blandit ut. Donec est nisl, interdum vitae accumsan in, laoreet quis velit. Nullam vitae porttitor lorem. Proin et erat elit. Duis dui quam, laoreet vel elit vel, fermentum auctor libero. Nam tincidunt convallis molestie. Morbi gravida convallis suscipit. Nunc egestas urna et metus convallis egestas. Nunc faucibus volutpat lorem, a maximus mauris tempus gravida. Cras mollis purus lacus, quis pulvinar justo auctor sit amet. Proin quam elit, mollis nec nisi hendrerit, mollis sollicitudin risus. Donec vestibulum cursus purus, eu iaculis dolor pharetra eget. Nulla in ante elementum lorem malesuada semper ut eget arcu
                </p>
              </div>

              {/* Status footer for consistency */}
              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Pre-Approved Experience
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};