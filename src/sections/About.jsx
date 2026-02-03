// Create your “About Me” page and write the introduction. This section should be 200 words and include:

import { Handshake, Lightbulb, Palette, User } from "lucide-react";

// A photo of yourself that expresses your personality while maintaining a professional tone.
// An introductory summary of your background, strengths, interests, values, and goals.
// What is the unique story you have to tell?
// What are the interests that you want to explore through UHP and UC?
// What are your interests, passions, strengths and values?

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovative Thinker",
    description: "Constantly seeking innovative approach to complex problems.",
  },
  {
    icon: Palette,
    title: "Creative Creator",
    description: "From writing to designing, creativity fuels my passions.",
  },
  {
    icon: User,
    title: "People-driven",
    description: "Human connection is at the heart of everything I do.",
  },
  {
    icon: Handshake,
    title: "Impactful Leader",
    description: "Leading with empathy to create meaningful change.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left-column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Creating meaningful journeys{" "}
              <span className="font-serif italic font-normal text-white">
                through code and visualization.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a deep thinker who seeks answers through innovation and
                creativity. Every project I build is a reflection of who I
                am—sometimes as a learning process, sometimes as a statement of
                how I want the world to perceive my work. I approach development
                as both a technical discipline and a form of expression, where
                problem-solving and storytelling coexist. I build games that
                tell momentous stories and software that feels authentic,
                intentional, and grounded in real human needs.
              </p>
              <p>
                As a college student, I view my education as more than academic training—it is a pathway toward becoming a globally minded scholar and an engaged citizen. I am deeply curious about how technology, culture, and society influence one another, and I seek learning experiences that expand my perspective beyond the classroom. Through interdisciplinary study, collaboration with diverse communities, and reflection on global and social issues, I aim to better understand my role within a larger, interconnected world and how my skills and values can contribute responsibly within it.
              </p>
              <p>
                I actively seek experiences that create meaningful impact and
                help me understand deeper narratives—whether through
                collaborative projects, community involvement, or exploratory
                learning. I care deeply about people and am driven by the desire
                to contribute to something larger than myself. That drive fuels
                my passion to continuously learn, improve, and grow—not only as
                a developer, but as a person committed to building technology
                that connects, empowers, and lasts.
              </p>
            </div>
          </div>

          {/*Right-column*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
