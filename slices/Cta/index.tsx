import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { getText } from "@/lib/prismicHelpers";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta = ({ slice }: CtaProps): JSX.Element => {
  // Check if there is a CTA image to determine layout
  // Homepage uses the image (Gray Card style)
  // Inner pages (Services, Use Cases) often don't have the image (Minimal Centered style)
  if (slice.primary.cta_image?.url) {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="container mx-auto px-4 lg:px-8 py-16"
      >
        <div
          className="bg-gray-light rounded-3xl p-8 lg:p-0 lg:px-[60px]"
          style={{ minHeight: "347px" }} // Added minHeight for consistency
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-8 lg:py-0">
            <div className="flex flex-col items-start text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {getText(slice.primary.heading)}
              </h2>
              <p className="text-lg mb-8 max-w-md">
                {getText(slice.primary.description)}
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                {getText(slice.primary.button_text)}
              </Link>
            </div>
            <div className="relative flex items-center justify-center lg:h-[347px]">
              <div className="relative w-[300px] h-[300px] lg:w-[359px] lg:h-[394px]">
                <Image
                  src={slice.primary.cta_image.url}
                  alt={slice.primary.cta_image.alt || "CTA illustration"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback / Minimal Style for pages without the specific CTA image
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-16"
    >
      <div className="rounded-[45px] px-6 py-16 lg:p-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-3xl text-dark">
          {(() => {
            const heading = getText(slice.primary.heading) || "";
            // Split by "work" or "results" (case-insensitive) to highlight them
            const parts = heading.split(/(work|results)/gi);
            return parts.map((part, i) =>
              part.toLowerCase() === "work" ||
              part.toLowerCase() === "results" ? (
                <span key={i} className="text-primary">
                  {part}
                </span>
              ) : (
                part
              ),
            );
          })()}
        </h2>

        <p className="text-base lg:text-lg mb-10 max-w-2xl text-gray-600">
          {getText(slice.primary.description)}
        </p>

        <Link
          href="/contact"
          className="inline-block bg-dark text-white border border-dark px-8 py-4 rounded-[14px] font-sans text-lg hover:bg-primary hover:border-primary hover:text-dark transition-all duration-300"
        >
          {getText(slice.primary.button_text) || "Let's connect"}
        </Link>
      </div>
    </section>
  );
};

export default Cta;
