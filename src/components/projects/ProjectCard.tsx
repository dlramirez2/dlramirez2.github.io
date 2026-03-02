import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
  year?: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  image,
  year,
}: ProjectCardProps) => {
  return (
    <article className="group">
      {/* Image */}
      {image && (
        <div className="aspect-[4/3] overflow-hidden mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {/* Year */}
        {year && (
          <p className="text-sm font-body text-muted-foreground tracking-wider">
            {year}
          </p>
        )}

        {/* Title */}
        <h3 className="text-2xl font-display text-foreground">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            {title}
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
          </a>
        </h3>

        {/* Description */}
        <p className="text-muted-foreground font-body font-light leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-body text-muted-foreground tracking-wide"
            >
              {tech}
              <span className="mx-2 text-border">·</span>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
