import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = ({ slice }: CaseStudiesProps): JSX.Element => {
  return (
    <section
      id="cases"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-16"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-12">
        <h2 className="section-heading text-3xl lg:text-4xl xl:text-5xl bg-primary w-fit px-1 sm:px-2 py-0.5 sm:py-1 rounded">
          {getText(slice.primary.heading)}
        </h2>
        <p className="text-base lg:text-lg max-w-full lg:max-w-[580px]">
          {getText(slice.primary.description) ||
            "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
        </p>
      </div>

      <div className="bg-dark rounded-3xl p-6 lg:p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slice.items.map((item, index: number) => (
            <div
              key={index}
              className={`${
                index < slice.items.length - 1
                  ? "border-b md:border-b-0 md:border-r border-primary pb-8 md:pb-0 md:pr-8"
                  : ""
              }`}
            >
              <p className="mb-4">{getText(item.case_description)}</p>
              <button className="text-primary hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
