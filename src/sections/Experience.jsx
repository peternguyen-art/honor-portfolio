import React from "react";
import { ExternalLink, Terminal, Cpu, Layout } from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-background"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-slow-drift" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Media Box */}
          <div className="lg:col-span-6 animate-fade-in">
            {/* Two-column layout for side-by-side vertical images */}
            <div className="grid grid-cols-2 gap-4 relative group">
              {/* Shared Backing Glow (grows under both images when hovering anywhere in the zone) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-gold/10 rounded-[3.5rem] blur-xl opacity-25 group-hover:opacity-60 transition duration-1000 pointer-events-none" />

              {/* LEFT VERTICAL IMAGE CONTAINER */}
              <div className="relative glass-strong p-2 rounded-[2.5rem] glow-border transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
                  <img
                    src="bcp_polaroid.jpg"
                    alt="Experience Highlight Left"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* RIGHT VERTICAL IMAGE CONTAINER */}
              <div className="relative glass-strong p-2 rounded-[2.5rem] glow-border transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer delay-75">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
                  <img
                    src="bcp_cranberries.jpg"
                    alt="Experience Highlight Right"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Experience Text (200 words) */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in animation-delay-200">
            <div className="space-y-2">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                Featured Experience
              </h2>
              <h1 className="text-5xl font-bold leading-tight">
                Bearcat Pantry <br /> and Resources Center <br />
                <span className="text-primary glow-text font-serif italic font-normal">
                  Meaningful Service.
                </span>
              </h1>
            </div>

            <div className="glass p-8 md:p-10 rounded-[2.5rem] border-l-4 border-primary">
              <div className="prose prose-invert text-muted-foreground leading-relaxed text-md space-y-6">
                <p>
                  My experience as a staff member at the Bearcat Pantry and
                  Resource Center (BCP) at the University of Cincinnati has been
                  one of the most meaningful parts of my college journey. The
                  BCP provides food assistance, essential household items, and
                  connections to additional resources for students, staff, and
                  families experiencing financial hardship or food insecurity.
                  As a staff member, I supported daily pantry operations,
                  assisted visitors, restocked inventory, helped manage
                  resources, and welcomed volunteers and community partners.
                </p>
                <p>
                  As an international student, I personally understood the
                  importance of accessible support systems. Before joining the
                  team, I had benefited from the pantry's services during my
                  transition to UC. Working at the BCP allowed me to give back
                  to a community that had supported me while also helping others
                  facing similar challenges. Through interactions with visitors
                  from diverse backgrounds, I learned the importance of empathy,
                  inclusion, and creating spaces where people feel respected and
                  valued.
                </p>
                <p>
                  This experience reshaped my definition of a Global Citizen
                  Scholar. I now view global citizenship not only as
                  understanding diverse perspectives but also as taking
                  meaningful action to support and uplift others within my
                  community. The BCP showed me that creating positive change
                  begins with recognizing human needs and responding with
                  compassion. This perspective continues to influence both my
                  personal values and my goal of developing technology that
                  improves people's lives.
                </p>
              </div>

              {/* Status footer for consistency */}
              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Self-Designed Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
