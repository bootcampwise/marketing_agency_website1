import { CaseStudiesGridProps } from "@/types";
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

const CaseStudiesGrid = ({ slice }: CaseStudiesGridProps): JSX.Element => {
  const bgColorMap: Record<string, string> = {
    dark: "bg-dark",
    purple: "bg-purple-900",
    gray: "bg-gray-200",
    primary: "bg-primary",
  };

  const textColorMap: Record<string, string> = {
    dark: "text-white",
    purple: "text-white",
    gray: "text-dark",
    primary: "text-dark",
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-gray-50 py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold inline-block relative z-10 mb-12">
          <span className="relative inline-block">
            {getText(slice.primary.section_title) || "Case Studies"}
            <span className="absolute bottom-2 left-0 w-[112%] h-3 bg-primary -z-10"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {slice.items.map((item, index: number) => {
            const bgColor = item.background_color || "dark";
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div
                  className={`h-48 ${bgColorMap[bgColor]} relative flex items-center justify-center`}
                >
                  {item.case_study_image?.url ? (
                    <img
                      src={item.case_study_image.url}
                      alt={
                        item.case_study_image.alt ||
                        getText(item.case_study_title)
                      }
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      className={`text-xl font-bold ${textColorMap[bgColor]}`}
                    >
                      {getText(item.case_study_title)}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {getText(item.category)}
                  </span>
                  <h3 className="font-bold mt-2 text-lg">
                    {getText(item.case_study_title)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {slice.items.length > 3 && (
          <div className="flex justify-center gap-2">
            {[...Array(Math.ceil(slice.items.length / 3))].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-dark" : "bg-gray-300"}`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
