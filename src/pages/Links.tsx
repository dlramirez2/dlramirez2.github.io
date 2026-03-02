import { Layout } from "@/components/layout/Layout";
import { LinkCard } from "@/components/links/LinkCard";

const linkCategories = [
  {
    name: "Inspiration",
    description: "Sources that shape my thinking and work",
    links: [
      {
        title: "Craig Mod",
        description: "Thoughtful essays on walking, writing, publishing, and the intersection of technology and attention.",
        url: "https://craigmod.com/",
        category: "Blog",
      },
      {
        title: "Frank Chimero",
        description: "Design thinking and creative process from a designer who cares deeply about craft and intention.",
        url: "https://frankchimero.com/",
        category: "Design",
      },
      {
        title: "Gwern Branwen",
        description: "Long-form essays on technology, psychology, and statistics. A masterclass in thorough research.",
        url: "https://gwern.net/",
        category: "Research",
      },
    ],
  },
  {
    name: "Tools & Resources",
    description: "Things I use and recommend",
    links: [
      {
        title: "Linear",
        description: "The best issue tracking tool I've used. Proof that enterprise software can be beautiful and fast.",
        url: "https://linear.app/",
        category: "Tool",
      },
      {
        title: "Raycast",
        description: "A launcher that extends how I work. Scriptable, fast, and thoughtfully designed.",
        url: "https://www.raycast.com/",
        category: "Tool",
      },
      {
        title: "Are.na",
        description: "A platform for collecting and connecting ideas. The antidote to algorithmic feeds.",
        url: "https://www.are.na/",
        category: "Platform",
      },
    ],
  },
  {
    name: "Learning",
    description: "Resources for growth and skill development",
    links: [
      {
        title: "Practical Typography",
        description: "Matthew Butterick's comprehensive guide to typography. Essential reading for anyone who works with text.",
        url: "https://practicaltypography.com/",
        category: "Book",
      },
      {
        title: "Refactoring UI",
        description: "Design tips for developers. Practical advice that immediately improves your interfaces.",
        url: "https://www.refactoringui.com/",
        category: "Course",
      },
      {
        title: "The Odin Project",
        description: "A free, open-source curriculum for learning web development from the ground up.",
        url: "https://www.theodinproject.com/",
        category: "Course",
      },
    ],
  },
];

const Links = () => {
  return (
    <Layout>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-4">
              Curated
            </p>
            <h1 className="text-5xl md:text-6xl font-display text-foreground mb-6">
              Interesting Links
            </h1>
            <p className="text-lg text-muted-foreground font-body font-light max-w-2xl leading-relaxed">
              A collection of resources, tools, and voices that have influenced my 
              thinking and work. Updated as I discover new things worth sharing.
            </p>
          </div>

          {/* Link Categories */}
          <div className="space-y-20">
            {linkCategories.map((category) => (
              <div key={category.name}>
                <div className="mb-8">
                  <h2 className="text-3xl font-display text-foreground mb-2">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground font-body font-light">
                    {category.description}
                  </p>
                </div>
                <div>
                  {category.links.map((link) => (
                    <LinkCard key={link.title} {...link} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Links;
