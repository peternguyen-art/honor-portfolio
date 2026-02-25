import React from 'react';
import { Rocket, Heart, Code2, Users, Trophy, Sparkles } from "lucide-react";

export const Involvement = () => {
  const activities = [
    {
      title: "Interest 1",
      category: "Academic",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl velit, congue et lorem non, fringilla tincidunt lorem. Proin sodales auctor tortor eget malesuada. Duis rutrum tortor a convallis placerat. In hac habitasse platea dictumst. Sed malesuada id lectus quis fermentum. Fusce nec varius ex. Vivamus cursus ex eget diam faucibus faucibus. Praesent varius euismod dolor eu dapibus. Fusce odio nisl, pretium nec ultrices id, vehicula quis neque. Nulla id arcu non metus vestibulum volutpat quis lacinia sapien. ",
      image: "profile.jpeg", // Replace with your actual project/org image
      icon: <Trophy className="w-4 h-4" />,
      color: "text-gold"
    },
    {
      title: "Interest 2",
      category: "Technical",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl velit, congue et lorem non, fringilla tincidunt lorem. Proin sodales auctor tortor eget malesuada. Duis rutrum tortor a convallis placerat. In hac habitasse platea dictumst. Sed malesuada id lectus quis fermentum. Fusce nec varius ex. Vivamus cursus ex eget diam faucibus faucibus. Praesent varius euismod dolor eu dapibus. Fusce odio nisl, pretium nec ultrices id, vehicula quis neque. Nulla id arcu non metus vestibulum volutpat quis lacinia sapien. ",
      image: "profile.jpeg", // Replace with your actual project/org image
      icon: <Code2 className="w-4 h-4" />,
      color: "text-primary"
    },
    {
      title: "Interest 3",
      category: "Leadership",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl velit, congue et lorem non, fringilla tincidunt lorem. Proin sodales auctor tortor eget malesuada. Duis rutrum tortor a convallis placerat. In hac habitasse platea dictumst. Sed malesuada id lectus quis fermentum. Fusce nec varius ex. Vivamus cursus ex eget diam faucibus faucibus. Praesent varius euismod dolor eu dapibus. Fusce odio nisl, pretium nec ultrices id, vehicula quis neque. Nulla id arcu non metus vestibulum volutpat quis lacinia sapien. ",
      image: "profile.jpeg", // Replace with your actual project/org image
      icon: <Users className="w-4 h-4" />,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="involvement" className="py-32 relative overflow-hidden bg-background">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-slow-drift" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Community & Lifestyle</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Beyond the <br />
            <span className="text-primary glow-text font-serif italic font-normal">Terminal.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            A living record of my involvement at the University of Cincinnati and the creative interests that drive me.
          </p>
        </div>

        {/* Activity Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, idx) => (
            <div 
              key={idx}
              className="group relative glass-strong rounded-[3rem] glow-border transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Media Header (The Image Box) */}
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141a1f] via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-6 left-6 glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                  <span className={`${item.color}`}>{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{item.category}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Interactive Detail Accent */}
                <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <div className="h-[2px] w-8 bg-primary rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-primary">Active Member</span>
                </div>
              </div>
            </div>
          ))}

          {/* Interests "Bento" Block (The non-image card) */}
          <div className="lg:col-span-1 glass rounded-[3rem] p-8 border-dashed border-2 border-border flex flex-col animate-fade-in animation-delay-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl glass text-primary">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Personal Interests</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "Motor Sports", icon: "⚙️" },
                { label: "Sci-Fi/ Cyberpunk Lore", icon: "🪐" },
                { label: "Sketching", icon: "✏️" },
                { label: "Minority Rights", icon: "✊" },
                { label: "Storytelling", icon: "📖" },
                { label: "Music", icon: "🎵" }
              ].map((interest, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 glass rounded-2xl text-[11px] font-medium hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default flex items-center gap-2 border border-white/5"
                >
                  <span>{interest.icon}</span>
                  {interest.label}
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Status Footer */}
        <div className="mt-24 flex flex-col items-center opacity-30">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em]">
            <span>Portfolio Archive</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>2024 — 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
};