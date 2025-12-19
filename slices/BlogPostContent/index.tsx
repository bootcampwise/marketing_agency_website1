import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `BlogPostContent`.
 */
import { KeyTextField, RichTextField, Slice } from "@prismicio/client";

/**
 * Props for `BlogPostContent`.
 */
interface BlogPostContentSlice extends Slice {
  slice_type: "blog_post_content";
  variation?: string;
  items: {
    section_number: KeyTextField | RichTextField;
    section_title: KeyTextField | RichTextField;
    section_content: RichTextField;
  }[];
}

export type BlogPostContentProps = SliceComponentProps<BlogPostContentSlice>;

/**
 * Component for "BlogPostContent" Slices.
 */
const BlogPostContent = ({ slice }: BlogPostContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-0"
    >
      {/* Content sections with left indentation like Figma */}
      <div className="space-y-10">
        {slice.items.map((item, index: number) => (
          <div key={index}>
            {/* Section Heading with Number */}
            <h2 className="text-lg md:text-xl font-bold text-dark mb-3">
              {getText(item.section_number) && (
                <span>{getText(item.section_number)}. </span>
              )}
              {getText(item.section_title) || "Section Title"}
            </h2>

            {/* Section Content - Purple/blue tinted text like Figma */}
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
