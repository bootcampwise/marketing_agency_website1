import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-10 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="max-w-2xl">
          <h1 className="font-sans font-medium mb-6 leading-[1.1] lg:text-[60px] text-4xl -tracking-[0.02em]">
            {getText(slice.primary.heading)}
          </h1>
          <p className="font-sans text-lg lg:text-[20px] mb-10 text-dark max-w-[500px] leading-relaxed">
            {getText(slice.primary.description)}
          </p>
          <button className="font-sans bg-dark text-white rounded-[14px] hover:bg-dark/90 transition-all px-9 py-5 text-xl w-full sm:w-auto">
            {getText(slice.primary.button_text) || "Book a consultation"}
          </button>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          {slice.primary.hero_image?.url && (
            <Image
              src={slice.primary.hero_image.url}
              alt={slice.primary.hero_image.alt || "Marketing illustration"}
              width={600}
              height={515}
              priority
              className="w-full h-auto max-w-[600px]"
            />
          )}
        </div>
      </div>

      {/* Client Logos */}
      {slice.items && slice.items.length > 0 && (
        <div className="mt-16 lg:mt-24 overflow-hidden">
          <p className="sr-only">Trusted by:</p>
          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              {slice.items.map(
                (item, index: number) =>
                  item.logo?.url && (
                    <div
                      key={`logo-1-${index}`}
                      className="relative w-24 h-8 lg:w-32 lg:h-12 mx-6 lg:mx-8 flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={item.logo.url}
                        alt={item.logo.alt || `Client logo ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ),
              )}
              {/* Duplicate set for seamless loop */}
              {slice.items.map(
                (item, index: number) =>
                  item.logo?.url && (
                    <div
                      key={`logo-2-${index}`}
                      className="relative w-24 h-8 lg:w-32 lg:h-12 mx-6 lg:mx-8 flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={item.logo.url}
                        alt={item.logo.alt || `Client logo ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
