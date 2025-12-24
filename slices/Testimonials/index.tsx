"use client";

import { useState, useRef, type TouchEvent } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

export default function Testimonials({
  slice,
}: SliceComponentProps<Content.TestimonialsSlice>) {
  const items = slice.items;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (items.length === 0) return null;

  const next = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goTo = (i: number) => {
    if (isAnimating || i === current) return;
    setDirection(i > current ? "right" : "left");
    setIsAnimating(true);
    setCurrent(i);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const dist = touchStartX.current - touchEndX.current;
    if (Math.abs(dist) > 50) dist > 0 ? next() : prev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getClass = (offset: number) => {
    if (!isAnimating)
      return offset === 0 ? "opacity-100 scale-100" : "opacity-40 scale-95";

    if (offset === 0)
      return direction === "right"
        ? "animate-slide-in-right opacity-100 scale-100"
        : "animate-slide-in-left opacity-100 scale-100";

    if (offset === -1)
      return direction === "right"
        ? "animate-slide-out-left opacity-0 scale-90"
        : "opacity-40 scale-95";

    if (offset === 1)
      return direction === "left"
        ? "animate-slide-out-right opacity-0 scale-90"
        : "opacity-40 scale-95";

    return "opacity-40 scale-95";
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-12">
        <h2 className="section-heading bg-primary w-fit px-1 sm:px-2 py-0.5 sm:py-1 rounded text-3xl lg:text-4xl xl:text-5xl">
          {getText(slice.primary.heading)}
        </h2>

        <p className="text-base lg:text-lg max-w-full lg:max-w-[475px]">
          {getText(slice.primary.description) ||
            "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"}
        </p>
      </div>

      <div className="bg-dark rounded-[45px] pt-12 pb-14 text-white overflow-hidden">
        <div
          className="relative flex justify-center gap-8 mb-8 min-h-[330px] select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {[-1, 0, 1].map((offset) => {
            const index = (current + offset + items.length) % items.length;
            const t = items[index];

            return (
              <div
                key={index}
                className={`w-full max-w-[90vw] sm:max-w-[500px] lg:max-w-[620px] shrink-0 transition-all duration-500 ${getClass(offset)}`}
              >
                <div className="bg-dark border border-primary rounded-[45px] p-6 lg:p-10 relative mb-8">
                  <p className="text-white text-base leading-relaxed">
                    “{getText(t.quote)}”
                  </p>

                  <div className="absolute -bottom-[1px] left-10 w-8 h-8 bg-dark border-b border-r border-primary rotate-45 translate-y-1/2"></div>
                </div>

                <div className="pl-10">
                  <p className="text-primary font-semibold text-lg">
                    {getText(t.author)}
                  </p>
                  <p className="text-sm">{getText(t.position)}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-6 lg:gap-8 mt-4">
          <button
            onClick={prev}
            disabled={isAnimating}
            className="text-white hover:text-primary transition p-2"
            aria-label="Previous Testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 transform ${
                  i === current ? "text-primary scale-110" : "text-white"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.4889 2.05894C11.6961 1.6234 12.3039 1.6234 12.5111 2.05894L14.7876 6.84534C14.881 7.04163 15.061 7.17237 15.2713 7.1983L20.4578 7.91572C20.9298 7.98101 21.1176 8.57754 20.767 8.9044L16.9405 12.5348C16.7853 12.682 16.7165 12.8937 16.7562 13.1027L17.7348 18.2575C17.8245 18.7295 17.3202 19.0827 16.9038 18.8407L12.3298 16.1837C12.1442 16.0759 11.8558 16.0759 11.6702 16.1837L7.09618 18.8407C6.67984 19.0827 6.17552 18.7295 6.26521 18.2575L7.24376 13.1027C7.28345 12.8937 7.21469 12.682 7.05949 12.5348L3.23298 8.9044C2.88242 8.57754 3.07021 7.98101 3.54224 7.91572L8.7287 7.1983C8.93895 7.17237 9.11902 7.04163 9.21239 6.84534L11.4889 2.05894Z" />
                </svg>
              </button>
            ))}
          </div>

          <button
            onClick={next}
            disabled={isAnimating}
            className="text-white hover:text-primary transition p-2"
            aria-label="Next Testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
