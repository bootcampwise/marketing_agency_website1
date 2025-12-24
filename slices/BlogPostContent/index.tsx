import { BlogPostContentProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

import { KeyTextField, RichTextField, Slice } from "@prismicio/client";

const BlogPostContent = ({ slice }: BlogPostContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-0"
    >
      <div className="space-y-10">
        {slice.items.map((item, index: number) => (
          <div key={index}>
            <h2 className="text-lg md:text-xl font-bold text-dark mb-3">
              {getText(item.section_number) && (
                <span>{getText(item.section_number)}. </span>
              )}
              {getText(item.section_title) || "Section Title"}
            </h2>

            {item.section_content && (
              <div className="prose prose-base max-w-none leading-relaxed text-[#5B6B8C]">
                <PrismicRichText field={item.section_content} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPostContent;
