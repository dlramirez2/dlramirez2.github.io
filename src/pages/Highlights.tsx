import { Layout } from "@/components/layout/Layout";
import { NoteCard } from "@/components/highlights/NoteCard";
import { useState } from "react";
import { cn } from "@/lib/utils";
import HackTheHallsStar from "@/assets/HTHII_Patch.jpg";
import GoonBadge from "@/assets/Goon_Badge.jpg";
import TronCTF from "@/assets/TronCTFSticker2.1.jpg"
import UMCVolunteer from "@/assets/UMC_Volunteer.jpg"

const notes = [
  {
    title: "Hack The Halls II",
    excerpt: "Mario-themed Capture the Flag (CTF) held in collaboration with the FBI, ARL, and TDAC, alongside UTEP students. This event marked the first CTF where both challenge developers and winning teams received a custom Mario Star patch. The competition was highly competitive, with first place securing victory by only a two-point margin. This event also set the foundation for contributing unique patches to future CTFs.",
    date: "Dec 15, 2025",
    tags: ["CTF", "Cybersecurity"],
    image: HackTheHallsStar,
  },
  {
    title: "Lessons from Software I & II?",
    excerpt: "AI is an incredible assistant, but relying on it to generate full-scale software is a trap that stunts your growth. It’s perfect for clarifying concepts, but the real learning happens in the struggle of debugging and design. Treat it as a mentor, not a ghostwriter.",
    date: "Dec 10, 2025",
    tags: ["Engineering", "Leadership"],
    image: HackTheHallsStar,
  },
  {
    title: "Tron CTF",
    excerpt: "Tron-themed Capture the Flag (CTF) held in collaboration with ARL, Capital One and DAC, alongside UTEP students. This event's price was a completely paid DEFCON 33 trip for the winning team.",
    date: "March 28,2025",
    tags: ["CTF", "Cybersecurity"],
    image: TronCTF,
  },
  {
    title: "Being a goon at DEFCON",
    excerpt: "Being of service to others has always been one of my core motivations. Having the opportunity to be part of the largest conference in the cybersecurity community has been one of the highlights of my year and possibly my career (so far). 9 more years to go toward earning a Golden Badge. XipeD = CHIP-ed",
    date: "August 7, 2025",
    tags: ["Leadership", "Volunteering"],
    image: GoonBadge,
    
  },
  {
    title: "UMC Hospital Volunteering",
    excerpt: "My time volunteering in the ICU at UMC came to an end in 2024, but the perspective I gained is permanent. It was a profound reality check that reminded me every day of what truly matters: our health and the people we love. Everything else is secondary.",
    date: "Sep 06, 2024",
    tags: ["Volunteering", "Health"],
    image: UMCVolunteer,
  },
];

const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));

const Notes = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredNotes = notes.filter((note) => {
    return !selectedTag || note.tags.includes(selectedTag);
  });

  return (
    <Layout>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-4">
              Writing
            </p>
            <h1 className="text-5xl md:text-6xl font-display text-foreground mb-6">
              Highlights
            </h1>
            <p className="text-lg text-muted-foreground font-body font-light max-w-2xl leading-relaxed">
              Key moments, notable outcomes, & short reflections.
            </p>
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-border">
            <button
              onClick={() => setSelectedTag(null)}
              className={cn(
                "text-sm font-body tracking-wide px-4 py-2 transition-all",
                !selectedTag
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  "text-sm font-body tracking-wide px-4 py-2 transition-all",
                  selectedTag === tag
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Notes List */}
          <div>
            {filteredNotes.map((note, index) => (
              <NoteCard key={index} {...note} />
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body">
                No notes found for this topic.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Notes;
