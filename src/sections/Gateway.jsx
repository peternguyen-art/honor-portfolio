import React from 'react';
import { Quote, Target, Star, Compass, Sparkles } from "lucide-react";

export const Gateway = () => {
  return (
    <section id="gateway" className="py-32 relative overflow-hidden bg-background">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-slow-drift" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Foundation</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The <br />
            <span className="text-primary glow-text font-serif italic font-normal">Gateway.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE: The Definition (Pull Quote Style) */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">
            <div className="relative glass-strong p-10 md:p-12 rounded-[3rem] glow-border">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20 fill-primary/10" />
              
              <h3 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-6 flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> Defining the GCS
              </h3>
              
              <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-foreground">
                "My definition of a Global Citizen Scholar is someone who will always 
                <span className="text-primary font-medium"> choose to take a leap of faith</span>, 
                put themselves out there, and challenge everything that comes their way."
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/5 text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>
                  Someone who thrives in a community and chooses to learn from others. 
                  Someone who approaches everything with an open mindset and is not afraid of new beginnings.
                </p>
                <p>
                  Being part of a community like UHP means constantly reflecting on how our work, 
                  ideas, and ambitions can contribute to something larger than ourselves.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Goals, Strengths, & Progress */}
          <div className="lg:col-span-7 space-y-12 animate-fade-in animation-delay-200">
            
            {/* Goals Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-2xl text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold">Future Trajectory</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-[2rem] border-l-2 border-primary/30">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-3">Path A: Creative</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Game development in creative, visionary environments. Focus on mastering Unity, Unreal, and Blender through indie game jams.
                  </p>
                </div>
                <div className="glass p-6 rounded-[2rem] border-l-2 border-gold/30">
                  <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-3">Path B: Impact</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leveraging VR, XR, and AI to improve healthcare and education. Using tech ethically to serve crucial social fields.
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths & Values */}
            <div className="glass-strong p-8 md:p-10 rounded-[3rem] space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Strengths & Innovation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                My strengths are rooted in <span className="text-foreground font-medium">empathy</span>. 
                I want to work in tech to help shape a future where technology serves the community as a whole, 
                rather than creating tools that only benefit a higher demographic.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm italic border-l-2 border-border pl-6">
                "I am actively working on my creative innovation by exposing myself to as many opportunities 
                as possible, aiming to collaborate with individuals who share the same vision."
              </p>
            </div>

            {/* Support & Action Plan */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-2xl text-gold">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold">Honors Roadmap</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "UHP Discover Series: Advancing community-oriented tech research.",
                  "Self-Designed Experience: Structured mastery of Unity, Unreal, and Blender.",
                  "Spring 2026 Seminars: Focusing on XR Technologies and Ethics & Dragons."
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Closing Quote / Progress */}
        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto italic leading-relaxed">
            "I plan to tackle my insecurities by forcing myself to do hard things, 
            and the honors experience will be the push I need to move forward."
          </p>
        </div>
      </div>
    </section>
  );
};