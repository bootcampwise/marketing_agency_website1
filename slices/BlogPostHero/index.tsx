import { BlogPostHeroProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  RichTextField,
  ImageField,
  Slice,
} from "@prismicio/client";

const BlogPostHero = ({ slice }: BlogPostHeroProps): JSX.Element => {
  const publishDate = slice.primary.publish_date
    ? new Date(slice.primary.publish_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-8 lg:py-12"
    >
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-dark hover:text-primary transition-colors mb-6 font-medium"
      >
        <span>←</span> All Articles
      </Link>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
        {getText(slice.primary.title) || "Blog Post Title"}
      </h1>

      <p className="text-base text-gray-600 mb-4">
        Written by {getText(slice.primary.author) || "Author"} on {publishDate}
      </p>

      {slice.items && slice.items.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {slice.items.map((item, index: number) => (
            <span
              key={index}
              className="inline-block text-sm text-dark px-3 py-1 bg-gray-100 rounded-full"
            >
              #{getText(item.tag)}
            </span>
          ))}
        </div>
      )}

      {slice.primary.featured_image?.url && (
        <div className="mb-8 w-full">
          <img
            src={slice.primary.featured_image.url}
            alt={
              slice.primary.featured_image.alt ||
              getText(slice.primary.title) ||
              "Featured image"
            }
            className="w-full h-auto object-cover rounded-b-3xl"
          />
        </div>
      )}

      {slice.primary.introduction && (
        <div className="prose prose-lg max-w-none leading-relaxed mb-12">
          <div className="text-[#5B6B8C] text-base md:text-lg">
            <PrismicRichText field={slice.primary.introduction} />
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPostHero;
