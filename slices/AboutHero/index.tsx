import { AboutHeroProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

import {
  KeyTextField,
  ImageField,
  Slice,
  BooleanField,
} from "@prismicio/client";

const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
  return (
    <div>
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "Space Grotesk" }}
          >
            {slice.primary.heading}
          </h1>
          <div style={{ width: "100%" }}>
            <p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: "Space Grotesk", fontSize: "20px" }}
            >
              {slice.primary.description}
            </p>
          </div>
          {slice.primary.button_text && (
            <button className="bg-dark text-white px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all">
              <p style={{ fontFamily: "Space Grotesk", fontSize: "20px" }}>
                {slice.primary.button_text}
              </p>
            </button>
          )}
        </div>
      </section>

      {slice.primary.show_client_logos && slice.items.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 py-8 overflow-hidden">
          <div className="pt-12">
            <div className="relative">
              <div className="flex animate-scroll-left">
                {slice.items.map(
                  (item, index: number) =>
                    item.logo?.url && (
                      <div
                        key={`logo-1-${index}`}
                        className="relative w-32 h-12 mx-8 flex-shrink-0 grayscale opacity-60 hover:opacity-100 transition-all duration-300"
                      >
                        <Image
                          src={item.logo.url}
                          alt={item.logo_alt || `Client logo ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ),
                )}
                {slice.items.map(
                  (item, index: number) =>
                    item.logo?.url && (
                      <div
                        key={`logo-2-${index}`}
                        className="relative w-32 h-12 mx-8 flex-shrink-0 grayscale opacity-60 hover:opacity-100 transition-all duration-300"
                      >
                        <Image
                          src={item.logo.url}
                          alt={item.logo_alt || `Client logo ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutHero;
