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

interface ServiceCategorySlice extends Slice {
  slice_type: "service_category";
  variation?: string;
  primary: {
    category_title: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
    category_image: ImageField;
  };
  items: {
    feature: KeyTextField | RichTextField;
  }[];
}

export type ServiceCategoryProps = SliceComponentProps<ServiceCategorySlice>;

const ServiceCategory = ({ slice }: ServiceCategoryProps): JSX.Element => {
  // Split features into two columns
  const midpoint = Math.ceil(slice.items.length / 2);
  const firstColumn = slice.items.slice(0, midpoint);
  const secondColumn = slice.items.slice(midpoint);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-12"
    >
      {/* Category Title Bar */}
      <div className="bg-primary px-6 py-2 w-full mb-8">
        <h3 className="text-xl font-bold text-dark">
          {getText(slice.primary.category_title) || "Category"}
        </h3>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Description and Features */}
        <div>
          <p className="mb-8 text-gray-700 leading-relaxed">
            {getText(slice.primary.description)}
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {/* First Column */}
            <ul className="space-y-2">
              {firstColumn.map((item, index: number) => (
                <li key={index} className="text-sm">
                  • {getText(item.feature)}
                </li>
              ))}
            </ul>
            {/* Second Column */}
            <ul className="space-y-2">
              {secondColumn.map((item, index: number) => (
                <li key={index} className="text-sm">
                  • {getText(item.feature)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="rounded-xl overflow-hidden">
          {slice.primary.category_image?.url && (
            <img
              src={slice.primary.category_image.url}
              alt={
                slice.primary.category_image.alt ||
                getText(slice.primary.category_title)
              }
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
