import React from 'react';
import { Sparkles, Quote } from "lucide-react";

export const YearInReview = () => {
  const galleryImages = [
    { src: "profile.jpeg", size: "h-[320px]" },
    { src: "profile.jpeg", size: "h-[480px]" },
    { src: "profile.jpeg", size: "h-[280px]" },
    { src: "profile.jpeg", size: "h-[420px]" },
    { src: "profile.jpeg", size: "h-[340px]" },
  ];

  return (
    <section id="year-in-review" className="py-32 relative overflow-hidden bg-background">
      {/* Background Polish */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-slow-drift" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Gallery with Bounce Hover */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="columns-1 sm:columns-2 gap-6 space-y-6">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden rounded-[2.5rem] glass p-2 glow-border break-inside-avoid transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
                >
                  <img 
                    src={img.src} 
                    alt="Reflection Artifact" 
                    className={`w-full ${img.size} object-cover rounded-[2rem] transition-transform duration-700`} 
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Reflection Summary */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in animation-delay-200">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Year in <br />
                <span className="text-primary glow-text font-serif italic font-normal">Review.</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Status: Drafting
                </span>
              </div>
            </div>

            {/* Reflection Text Block */}
            <div className="relative glass-strong rounded-[3.5rem] p-10 md:p-16 glow-border">
              <Quote className="absolute top-12 right-12 w-10 h-10 text-primary/10" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-primary font-bold text-xl leading-relaxed">
                  Year in Review Title
                </p>

                <p className="text-foreground font-medium italic text-lg leading-relaxed">
                    My year in summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium lacus non tellus viverra, maximus imperdiet justo ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nulla nibh, ultricies id diam id, lobortis vestibulum risus. Donec posuere ac sem eget fringilla. Nullam non mauris tristique, facilisis purus ut, fringilla nulla. Suspendisse nec mauris nec orci consectetur luctus. Proin dignissim velit vitae ullamcorper iaculis. Proin eu volutpat enim.
                </p>

                <p>
                  Cras lectus est, semper eget semper at, pretium nec libero. Cras ornare sit amet elit non suscipit. Curabitur molestie lectus vel neque tincidunt, sed malesuada urna gravida. Phasellus metus libero, fermentum eget mi nec, commodo luctus velit. Praesent in ex blandit, condimentum libero non, lobortis ex. Aliquam rhoncus egestas mollis. Donec nulla ex, ullamcorper auctor convallis sit amet, euismod sit amet felis. Ut ullamcorper quis ante eu feugiat. Nam id faucibus libero. Proin tempor est augue. Duis at vulputate nunc, varius ultricies eros. Nam fermentum eu dolor in accumsan.
                </p>

                <p>
                 Cras lectus est, semper eget semper at, pretium nec libero. Cras ornare sit amet elit non suscipit. Curabitur molestie lectus vel neque tincidunt, sed malesuada urna gravida. Phasellus metus libero, fermentum eget mi nec, commodo luctus velit. Praesent in ex blandit, condimentum libero non, lobortis ex. Aliquam rhoncus egestas mollis. Donec nulla ex, ullamcorper auctor convallis sit amet, euismod sit amet felis. Ut ullamcorper quis ante eu feugiat. Nam id faucibus libero. Proin tempor est augue. Duis at vulputate nunc, varius ultricies eros. Nam fermentum eu dolor in accumsan.
                </p>

                <p>
                  Cras lectus est, semper eget semper at, pretium nec libero. Cras ornare sit amet elit non suscipit. Curabitur molestie lectus vel neque tincidunt, sed malesuada urna gravida. Phasellus metus libero, fermentum eget mi nec, commodo luctus velit. Praesent in ex blandit, condimentum libero non, lobortis ex. Aliquam rhoncus egestas mollis. Donec nulla ex, ullamcorper auctor convallis sit amet, euismod sit amet felis. Ut ullamcorper quis ante eu feugiat. Nam id faucibus libero. Proin tempor est augue. Duis at vulputate nunc, varius ultricies eros. Nam fermentum eu dolor in accumsan.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};