interface NoteCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image?: string;
}

export const NoteCard = ({
  title,
  excerpt,
  date,
  tags,
  image,
}: NoteCardProps) => {
  return (
    <article className="group py-8 border-b border-border last:border-b-0">
      <div className="grid md:grid-cols-4 gap-6 md:gap-8">
         {/* Meta with Image */}
        <div className="md:col-span-1 space-y-3">
          {image && (
            <div className="w-full aspect-[3/2] overflow-hidden rounded-sm">
              <img 
                src={image} 
                alt="" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          )}
          <p className="text-sm font-body text-muted-foreground">
            {date}
          </p>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-2xl font-display text-foreground">
            {title}
          </h3>

          <p className="text-muted-foreground font-body font-light leading-relaxed">
            {excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body text-muted-foreground tracking-wide border border-border px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
