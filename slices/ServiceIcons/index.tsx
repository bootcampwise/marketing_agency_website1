import { ServiceIconsProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  ImageField,
  RichTextField,
  Slice,
} from "@prismicio/client";

const ServiceIcons = ({ slice }: ServiceIconsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-16"
    >
      <h2 className="text-2xl font-bold mb-12 inline-block relative">
        {getText(slice.primary.section_title) || "Services"}
        <span className="absolute bottom-1 left-0 w-full h-2 bg-primary -z-10"></span>
      </h2>

      <div className="flex justify-between max-w-3xl mx-auto text-center">
        {slice.items.map((item, index: number) => (
          <div key={index} className="flex flex-col items-center gap-3">
            {item.icon_image?.url && (
              <img
                src={item.icon_image.url}
                alt={item.icon_image.alt || getText(item.icon_label)}
                className="w-12 h-12 object-contain"
              />
            )}
            <span className="font-bold text-sm">
              {getText(item.icon_label)}
            </span>
            <span className="text-xs">▼</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceIcons;
