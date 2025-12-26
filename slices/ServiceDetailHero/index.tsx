import { ServiceDetailHeroProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  ImageField,
  RichTextField,
  Slice,
} from "@prismicio/client";

const ServiceDetailHero = ({ slice }: ServiceDetailHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-16 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {getText(slice.primary.title) || "Service Title"}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            {getText(slice.primary.description) || "Service description"}
          </p>
          {slice.primary.button_text &&
            ((getText(slice.primary.button_link) || "#").includes("contact") ||
              (getText(slice.primary.button_link) || "#").includes("Contact") ? (
              <div className="border-2 border-dark px-8 py-3 rounded-lg font-medium hover:bg-dark hover:text-white transition-colors inline-block cursor-not-allowed opacity-70">
                {getText(slice.primary.button_text)}
              </div>
            ) : (
              <Link
                href={getText(slice.primary.button_link) || "#"}
                className="border-2 border-dark px-8 py-3 rounded-lg font-medium hover:bg-dark hover:text-white transition-colors inline-block"
              >
                {getText(slice.primary.button_text)}
              </Link>
            ))}
        </div>
        <div className="flex justify-center lg:justify-end">
          {slice.primary.hero_image?.url && (
            <img
              src={slice.primary.hero_image.url}
              alt={slice.primary.hero_image.alt || "Hero illustration"}
              className="w-full max-w-lg object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
