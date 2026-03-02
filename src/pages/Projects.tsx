import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Work in Progress",
    description: "Currently learning and incorporating AI into my workflow as much as possible. Being an engineer is about creativity and constantly improving day by day..",
    technologies: ["Gemini", "GhatGPT"],
    githubUrl: "",
    year: "2025",
  },
  {
    title: "NMAP Web Service Enumerator",
    description: "A script that parses Nmap XML output, identifies HTTP/HTTPS/WWW or unknown services, and automatically opens a web browser tab for each detected web-accessible port.",
    technologies: ["NMAP", "Python", "Cybersecurity"],
    githubUrl: "https://github.com/username/creative-systems",
    year: "2025",
  },
  {
    title: "Prompt Engineering to Reduce food waste",
    description: "A thoughtfully designed system for preserving and organizing digital memories. Features intuitive interfaces and robust data protection.",
    technologies: ["Node.js", "PostgreSQL", "Encryption"],
    githubUrl: "https://github.com/username/digital-archive",
    year: "2024",
  },
  {
    title: "Web Application Security Workshop",
    description: "My first publication as a Software Engineering master’s student, completed under the mentorship of Dr. J. Acosta in collaboration with fellow student R. Quiroz.",
    technologies: ["PHP", "Cybersecurity", "Student"],
    githubUrl: "https://github.com/dlramirez2/WebSecurityWorkshop",
    year: "2021",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-4">
              Work
            </p>
            <h1 className="text-5xl md:text-6xl font-display text-foreground mb-6">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground font-body font-light max-w-2xl leading-relaxed">
              A collection of personal projects focused on security research, automation, and practical tooling for real-world systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
