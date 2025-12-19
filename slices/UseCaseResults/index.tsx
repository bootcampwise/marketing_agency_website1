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

interface UseCaseResultsSlice extends Slice {
  slice_type: "use_case_results";
  primary: {
    pattern_image: ImageField;
    heading: KeyTextField | RichTextField;
  };
  items: {
    result_text: KeyTextField | RichTextField;
  }[];
}

export type UseCaseResultsProps = SliceComponentProps<UseCaseResultsSlice>;

const UseCaseResults = ({ slice }: UseCaseResultsProps): JSX.Element => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
        {slice.primary.pattern_image?.url && (
          <div className="flex-shrink-0">
            <Image
              src={slice.primary.pattern_image.url}
              alt={slice.primary.pattern_image.alt || "Results Pattern"}
              width={192}
              height={192}
              className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>
        )}
        <div className="max-w-lg">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">
            {getText(slice.primary.heading) || "The Results"}
          </h2>
          <div className="space-y-4 text-lg text-dark leading-relaxed">
            {slice.items &&
              slice.items.map((item, index: number) => (
                <p key={index}>{getText(item.result_text)}</p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseResults;
