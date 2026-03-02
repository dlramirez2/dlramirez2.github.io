import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import resume from "@/assets/Ramirez_Diana_Resume_2025.pdf";

export const BioSection = () => {
  return (
    <section id="bio" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src= {portrait}
                alt="Profile Picture"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-l font-display text-foreground leading-tight mb-8">
                My name is Diana Ramirez, and I'm a Vulnerability Assessment Analyst at ARMY Transformation Decision Analysis Center (TDAC)
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground font-body font-light leading-relaxed text-lg">
              <p>
                My journey with TDAC commenced shortly after earning my Master's degree from The University of Texas at El Paso.
                In the Fall of 2017, I proudly completed my Bachelor's in Biological Sciences, specializing in Biomedical Studies. 
                I went on to earn my Master's in Software Engineering with a concentration in Secure Cyber Systems in the Spring of 2021.
              </p>
              <p>
                My post-graduation objective was to secure a position that would allow me to apply my skills in meaningful ways and contribute to the spaces I belong to.
                While the challenging and compelling nature of my work fulfills me, what truly drives me is the opportunity to solve real-world problems and contribute 
                to long-term solutions.The support, mentorship, and freedom I’ve been given throughout my academic and professional journey have made me 
                deeply appreciative and committed to using my knowledge and experiences to do work that matters.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <a 
                href= {resume} 
                className="group flex items-center gap-2 text-foreground font-body text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                Resume
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground font-body text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground font-body text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                GitHub
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a 
                href="mailto:your@email.com"
                className="group flex items-center gap-2 text-foreground font-body text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                Contact
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
