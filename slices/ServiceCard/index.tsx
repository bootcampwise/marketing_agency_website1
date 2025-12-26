import { ServiceCardProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  ImageField,
  RichTextField,
  Slice,
  BooleanField,
} from "@prismicio/client";

const ServiceCard = ({ slice }: ServiceCardProps): JSX.Element => {
  const bgColor = slice.primary.bg_color || "gray";
  const hasWrapper = slice.primary.has_wrapper || false;

  const bgColorMap: Record<string, string> = {
    gray: "bg-gray-50",
    green: "bg-primary",
    dark: "bg-dark",
    light: "bg-gray-light",
  };

  const badgeBgMap: Record<string, string> = {
    gray: "bg-primary",
    green: "bg-white",
    dark: "bg-white",
    light: "bg-primary",
  };

  const buttonBgMap: Record<string, string> = {
    gray: "bg-dark",
    green: "bg-dark",
    dark: "bg-white",
    light: "bg-dark",
  };

  const buttonTextMap: Record<string, string> = {
    gray: "text-white",
    green: "text-white",
    dark: "text-dark",
    light: "text-white",
  };

  const buttonHoverMap: Record<string, string> = {
    gray: "hover:bg-gray-800",
    green: "hover:bg-gray-800",
    dark: "hover:bg-gray-100",
    light: "hover:bg-gray-800",
  };

  const isDark = bgColor === "dark";
  const textColor = isDark ? "text-white" : "text-dark";

  const linkUrl = React.useMemo(() => {
    const link = getText(slice.primary.cta_link);
    if (!link) return "#";
    if (
      link.startsWith("/") ||
      link.startsWith("http") ||
      link.startsWith("#")
    ) {
      return link;
    }
    if (/^[a-zA-Z0-9-_]+$/.test(link)) {
      return `/services/${link}`;
    }
    return link;
  }, [slice.primary.cta_link]);

  const content = (
    <>
      <div
        className={`${bgColorMap[bgColor]} border-2 border-b-8 border-dark rounded-[45px] p-8 md:p-12 lg:p-16 relative mb-12 transition-all duration-300 hover:shadow-xl`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-between h-full min-h-[200px] space-y-6">
            <div className="flex flex-col items-start">
              <span
                className={`font-medium text-3xl text-dark leading-tight ${badgeBgMap[bgColor]} px-2 py-1 rounded-lg`}
              >
                {getText(slice.primary.badge_text_line1) || "Service"}
              </span>
              <span
                className={`font-medium text-3xl text-dark leading-tight ${badgeBgMap[bgColor]} px-2 py-1 rounded-lg`}
              >
                {getText(slice.primary.badge_text_line2) || "Name"}
              </span>
            </div>

            <div className="mt-auto">
              {linkUrl.includes("contact") || linkUrl.includes("Contact") ? (
                <div
                  className="inline-flex items-center gap-3 group cursor-not-allowed opacity-70"
                  aria-label="Service info"
                >
                  <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/arrow-neon.png"
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span
                    className={`font-medium text-base ${textColor} group-hover:underline transition-all duration-300`}
                  >
                    Service info
                  </span>
                </div>
              ) : (
                <Link
                  href={linkUrl}
                  className="inline-flex items-center gap-3 group"
                  aria-label="Learn more about this service"
                >
                  <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/arrow-neon.png"
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span
                    className={`font-medium text-base ${textColor} group-hover:underline transition-all duration-300`}
                  >
                    Service info
                  </span>
                </Link>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {slice.primary.illustration?.url && (
              <div className="relative w-full max-w-md">
                <Image
                  src={slice.primary.illustration.url}
                  alt={slice.primary.illustration.alt || "Service Illustration"}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  priority={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-dark">
            What we offer
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            {getText(slice.primary.what_we_offer) || "Service description"}
          </p>
          {linkUrl.includes("contact") || linkUrl.includes("Contact") ? (
            <div className="inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-lg font-medium text-dark hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-not-allowed opacity-70">
              <span>{getText(slice.primary.cta_text) || "Learn More"}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </div>
          ) : (
            <Link
              href={linkUrl}
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-lg font-medium text-dark hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>{getText(slice.primary.cta_text) || "Learn More"}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </Link>
          )}
        </div>

        <div className="bg-gray-light p-8 lg:p-10 rounded-3xl shadow-sm">
          <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-6 lg:mb-8">
            Benefits
          </h3>
          <ul className="space-y-5">
            {slice.items.map((item, index: number) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l3 3 7-7"
                      stroke="#191A23"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {getText(item.benefit) || "Benefit"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 mb-16 lg:mb-20"
    >
      {hasWrapper ? (
        <div className="bg-gray-light p-6 md:p-8 lg:p-12 rounded-[45px] shadow-sm">
          {content}
        </div>
      ) : (
        content
      )}
    </section>
  );
};

export default ServiceCard;
