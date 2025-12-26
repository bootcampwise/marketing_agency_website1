import { PartnerBannerProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  RichTextField,
  ImageField,
  Slice,
} from "@prismicio/client";

const PartnerBanner = ({ slice }: PartnerBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-12"
    >
      {(getText(slice.primary.partner_link) || "#").includes("contact") ||
        (getText(slice.primary.partner_link) || "#").includes("Contact") ? (
        <div className="block group cursor-not-allowed opacity-70">
          <div className="bg-dark rounded-[30px] p-6 lg:px-16 lg:py-10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-16 opacity-30 pointer-events-none hidden md:flex flex-col justify-center gap-2 pl-6">
              {[...Array(8)].map((_, r) => (
                <div key={r} className="flex gap-2">
                  {[...Array(4)].map((_, c) => (
                    <div
                      key={c}
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    ></div>
                  ))}
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center md:text-left pl-0 md:pl-16">
              <div
                className="text-2xl lg:text-[28px] text-white italic leading-tight font-light"
                style={{ fontFamily: "cursive" }}
              >
                <span className="text-white">For </span>
                <span className="text-primary">social media marketing</span>
                <div className="h-2"></div>
                <span className="text-white">connect with our partner</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-8 md:pr-16">
              {slice.primary.logo?.url ? (
                <div className="relative h-14 w-auto">
                  <img
                    src={slice.primary.logo.url}
                    alt={slice.primary.logo.alt || "Partner Logo"}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ) : (
                <span className="text-white text-3xl font-bold font-sans">
                  {getText(slice.primary.partner_name)}
                </span>
              )}

              <div className="text-white transform group-hover:translate-x-2 transition-transform duration-300">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-16 opacity-30 pointer-events-none hidden md:flex flex-col justify-center gap-2 pr-6 items-end">
              {[...Array(8)].map((_, r) => (
                <div key={r} className="flex gap-2">
                  {[...Array(4)].map((_, c) => (
                    <div
                      key={c}
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={getText(slice.primary.partner_link) || "#"}
          className="block group"
        >
          <div className="bg-dark rounded-[30px] p-6 lg:px-16 lg:py-10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-16 opacity-30 pointer-events-none hidden md:flex flex-col justify-center gap-2 pl-6">
              {[...Array(8)].map((_, r) => (
                <div key={r} className="flex gap-2">
                  {[...Array(4)].map((_, c) => (
                    <div
                      key={c}
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    ></div>
                  ))}
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center md:text-left pl-0 md:pl-16">
              <div
                className="text-2xl lg:text-[28px] text-white italic leading-tight font-light"
                style={{ fontFamily: "cursive" }}
              >
                <span className="text-white">For </span>
                <span className="text-primary">social media marketing</span>
                <div className="h-2"></div>
                <span className="text-white">connect with our partner</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-8 md:pr-16">
              {slice.primary.logo?.url ? (
                <div className="relative h-14 w-auto">
                  <img
                    src={slice.primary.logo.url}
                    alt={slice.primary.logo.alt || "Partner Logo"}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ) : (
                <span className="text-white text-3xl font-bold font-sans">
                  {getText(slice.primary.partner_name)}
                </span>
              )}

              <div className="text-white transform group-hover:translate-x-2 transition-transform duration-300">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-16 opacity-30 pointer-events-none hidden md:flex flex-col justify-center gap-2 pr-6 items-end">
              {[...Array(8)].map((_, r) => (
                <div key={r} className="flex gap-2">
                  {[...Array(4)].map((_, c) => (
                    <div
                      key={c}
                      className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Link>
      )}
    </section>
  );
};

export default PartnerBanner;
