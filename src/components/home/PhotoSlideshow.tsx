import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import WomenInSTEM from "@/assets/Women_in_STEM.jpg";
import careerFair from "@/assets/Spring24_CareerFair.jpeg";
import UTEPCTF1 from "@/assets/UTEP_CTF1.jpg";
import UTEPCTF2 from "@/assets/UTEP_CTF2.jpg";
import UTEPCS from "@/assets/UTEP_CS.jpg";
import DEFCON24 from "@/assets/DEFCON_24.jpeg"
import UTEPCTF3 from "@/assets/UTEP_CTF3.jpeg";

interface Slide {
  id: number;
  image: string;
  caption: string;
}

const slides: Slide[] = [
  {
    id: 0,
    image: UTEPCTF3,
    caption: "UTEP Hall the Halls II CTF",
  },
  {
    id: 1,
    image: WomenInSTEM,
    caption: "35 under 35 UTEP Engineering",
  },
  {
    id: 2,
    image: careerFair,
    caption: "DEVCOM Analysis Center @ UTEP Career Fair",
  },
  {
    id: 3,
    image: UTEPCTF1,
    caption: "UTEP Dragon's Den CTF",
  },
  {
    id: 4,
    image: UTEPCS,
    caption: "UTEP Computer Science Representatives",
  },
  {
    id: 5,
    image: DEFCON24,
    caption: "DEFCON 2024",
  },
  {
    id: 6,
    image: UTEPCTF2,
    caption: "UTEP Dragon's Den #2 CTF",
  },
];

export const PhotoSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Slideshow Container */}
        <div className="relative aspect-[20/10] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Caption and Navigation */}
        <div className="flex items-center justify-between mt-8">
          <p className="font-display text-xl text-muted-foreground italic">
            {slides[currentSlide]?.caption ?? ""}
          </p>
          
          {/* Dots Indicator */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-500",
                  index === currentSlide
                    ? "bg-foreground w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
