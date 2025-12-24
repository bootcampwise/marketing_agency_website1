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
        <section className="container mx-auto px-4 lg:px-8 py-8">
          <div className="border-t border-gray-200 pt-12">
            <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-60">
              {slice.items.map(
                (item, index: number) =>
                  item.logo?.url && (
                    <Image
                      key={index}
                      src={item.logo.url}
                      alt={item.logo_alt || `Client logo ${index + 1}`}
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  ),
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutHero;
