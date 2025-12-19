import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  RichTextField,
  BooleanField,
  Slice,
} from "@prismicio/client";

interface BlogHeroSlice extends Slice {
  slice_type: "blog_hero";
  variation: "default";
  primary: {
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
    show_search: BooleanField;
  };
}

export type BlogHeroProps = SliceComponentProps<BlogHeroSlice>;

const BlogHero = ({ slice }: BlogHeroProps): JSX.Element => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          {getText(slice.primary.heading) || "Our Blog"}
        </h1>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {getText(slice.primary.description) ||
            "We use an agile approach to test assumptions and connect with the needs of your audience early and often."}
        </p>
      </div>

      {/* Search Bar */}
      {slice.primary.show_search && (
        <form className="w-full mb-10">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search articles..."
              className="flex-1 px-4 sm:px-6 py-3 border-2 border-dark rounded-lg outline-none text-sm bg-white"
            />
            <button
              type="submit"
              className="bg-dark text-white p-3 rounded-lg hover:bg-primary hover:text-dark transition-colors flex items-center justify-center border-2 border-dark flex-shrink-0"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default BlogHero;
