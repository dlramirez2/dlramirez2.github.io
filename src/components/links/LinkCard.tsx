import { ArrowUpRight } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
}

export const LinkCard = ({
  title,
  description,
  url,
}: LinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-6 border-b border-border last:border-b-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-display text-foreground group-hover:opacity-70 transition-opacity">
            {title}
          </h3>
          <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <ArrowUpRight className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </a>
  );
};
