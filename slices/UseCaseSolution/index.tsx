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

interface UseCaseSolutionSlice extends Slice {
  slice_type: "use_case_solution";
  primary: {
    pattern_image: ImageField;
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
  };
}

export type UseCaseSolutionProps = SliceComponentProps<UseCaseSolutionSlice>;

const UseCaseSolution = ({ slice }: UseCaseSolutionProps): JSX.Element => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="bg-dark text-white rounded-[45px] p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {slice.primary.pattern_image?.url && (
            <div className="flex justify-center lg:justify-start">
              <Image
                src={slice.primary.pattern_image.url}
                alt={slice.primary.pattern_image.alt || "Solution Pattern"}
                width={275}
                height={295}
                className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
              />
            </div>
          )}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {getText(slice.primary.heading) || "The Solution"}
            </h2>
            <p
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "Montserrat", fontSize: "18px" }}
            >
              {getText(slice.primary.description)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSolution;
