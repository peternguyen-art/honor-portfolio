import React from "react";
import { Sparkles, Quote } from "lucide-react";

export const YearInReview = () => {
  const galleryImages = [
    { src: "bcp.JPG", size: "h-[320px]" },
    { src: "professional.JPG", size: "h-[480px]" },
    { src: "RevUC.png", size: "h-[280px]" },
    { src: "RevUC1.png", size: "h-[420px]" },
    { src: "community.jpg", size: "h-[340px]" },
  ];

  return (
    <section
      id="year-in-review"
      className="py-32 relative overflow-hidden bg-background"
    >
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
                Year in{" "}
                <span className="text-primary glow-text font-serif italic font-normal">
                  Review.
                </span>
              </h1>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Status: Complete
                </span>
              </div>
            </div>

            {/* Reflection Text Block */}
            <div className="relative glass-strong rounded-[3.5rem] p-10 md:p-16 glow-border">
              <Quote className="absolute top-12 right-12 w-10 h-10 text-primary/10" />

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-primary font-bold text-xl leading-relaxed">
                  Year in Review 2025 - 2026
                </p>

                <p className="text-foreground font-medium italic text-lg leading-relaxed">
                  My year in summary: This year challenged me to grow in ways
                  that extended far beyond academics. As I entered my junior
                  year at the University of Cincinnati, I began shifting my
                  mindset from simply getting through college to intentionally
                  creating opportunities for myself and others. Looking back,
                  the growth I am most proud of is the confidence, resilience,
                  and sense of purpose I developed through service, leadership,
                  professional development, and personal relationships.
                </p>

                <p>
                  One of the most meaningful experiences throughout the year was
                  working at the Bearcat Pantry and Resource Center. Every week,
                  I helped support students facing food insecurity and financial
                  hardship. Through these interactions, I gained a deeper
                  understanding of how many people silently struggle while
                  pursuing their education. This experience strengthened my
                  empathy and reminded me that success is not achieved alone.
                  Supporting others also helped me appreciate the resources and
                  community that have supported me throughout my own journey as
                  an international student.
                </p>

                <p>
                  In the fall semester, I took a leap of faith by applying to
                  the University Honors Program. For much of my college
                  experience, I focused on working hard and meeting
                  expectations. Applying to Honors represented a different kind
                  of challenge: believing that I belonged in spaces that would
                  push me further. This decision marked a significant mental
                  shift. Rather than waiting for opportunities to come to me, I
                  began actively seeking them out.
                </p>

                <p>
                  That growth continued during the spring semester through the
                  Gateway to UHP course, where I explored my values, strengths,
                  and long-term goals. I also served on the logistics team for
                  RevolutionUC, helping organize one of the largest hackathons
                  in the Midwest. Supporting an event with more than 250
                  attendees from universities across the region taught me how
                  much coordination, communication, and teamwork are required
                  behind the scenes. It reinforced my confidence in taking on
                  leadership responsibilities and contributing to something
                  larger than myself.
                </p>

                <p>
                  During the summer, I began my first software development co-op
                  at ITSC. Transitioning from the classroom to a professional
                  development environment required me to embrace uncertainty and
                  learn quickly. I strengthened my technical skills in
                  full-stack development while also learning how to collaborate
                  within a team, communicate effectively, and contribute to
                  projects that impact real users. The experience showed me that
                  growth often comes from being willing to be uncomfortable and
                  ask questions.
                </p>

                <p>
                  Perhaps the most important growth this year happened on a
                  personal level. Navigating friendships and relationships
                  taught me resilience in a different way. I learned how to
                  build a support network, maintain meaningful connections, and
                  make difficult decisions to preserve relationships that matter
                  to me. At the same time, I continued pushing myself to meet
                  new people and expand my professional and personal
                  communities.
                </p>

                <p>
                  Moving forward, I will hold myself accountable by staying
                  connected to the communities that have helped me grow,
                  including the University Honors Program, my mentors,
                  coworkers, friends, and campus organizations. I will continue
                  seeking opportunities that challenge me while relying on my
                  support network for guidance and perspective. This year taught
                  me that resilience is about having the courage to grow through
                  challenges while staying connected to the people who help make
                  that growth possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
