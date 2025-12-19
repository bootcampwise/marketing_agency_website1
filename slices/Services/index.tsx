import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-16"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-12">
        <h2 className="section-heading text-3xl lg:text-4xl xl:text-5xl bg-primary w-fit px-1 sm:px-2 py-0.5 sm:py-1 rounded">
          {getText(slice.primary.heading) || "Services"}
        </h2>
        <p className="text-base lg:text-lg max-w-full lg:max-w-[580px]">
          {getText(slice.primary.description) ||
            "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"}
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {slice.items && slice.items.length > 0 ? (
          slice.items.map((service, index: number) => {
            const bgColor =
              getText(service.background_color) || "bg-gray-light";
            const textColor = getText(service.text_color) || "text-dark";
            const titleBgColor =
              getText(service.title_background_color) || "bg-primary";

            return (
              <div
                key={index}
                className={`${bgColor} ${textColor} border-2 border-b-8 border-dark rounded-3xl p-6 lg:p-12 min-h-[280px] lg:min-h-[310px] flex flex-col`}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 flex-1">
                  {/* Text Content */}
                  <div className="flex flex-col justify-between h-full flex-1 w-full sm:w-auto">
                    {/* Service Title */}
                    <div className="mb-auto">
                      <h3 className="flex flex-col items-start gap-0">
                        <span
                          className={`${titleBgColor} block px-[7px] py-1 rounded-[7px] text-xl sm:text-2xl lg:text-3xl font-medium leading-none`}
                          style={{
                            color: titleBgColor.includes("bg-dark")
                              ? "#ffffff"
                              : "#191A23",
                          }}
                        >
                          {getText(service.title_line_1) || "Service"}
                        </span>
                        <span
                          className={`${titleBgColor} block px-[7px] py-1 rounded-[7px] text-xl sm:text-2xl lg:text-3xl font-medium leading-none sm:-mt-2 lg:-mt-2.5`}
                          style={{
                            color: titleBgColor.includes("bg-dark")
                              ? "#ffffff"
                              : "#191A23",
                          }}
                        >
                          {getText(service.title_line_2) || "Title"}
                        </span>
                      </h3>
                    </div>

                    {/* Learn More Button */}
                    <button className="flex items-center gap-2 group mt-6 lg:mt-8">
                      {bgColor === "bg-dark" ? (
                        <>
                          <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                            <Image
                              src="/images/arrow-white.png"
                              alt="Arrow"
                              width={40}
                              height={40}
                              className="object-contain w-full h-full"
                            />
                          </span>
                          <span className="font-medium text-base lg:text-lg text-white">
                            Learn more
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                            <Image
                              src="/images/arrow-dark-circle.png"
                              alt="Arrow"
                              width={40}
                              height={40}
                              className="object-contain w-full h-full"
                            />
                          </span>
                          <span className="font-medium text-base lg:text-lg">
                            Learn more
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Service Image */}
                  <div className="flex-shrink-0 self-end sm:self-start">
                    {service.service_image?.url ? (
                      <Image
                        src={service.service_image.url}
                        alt={service.service_image.alt || "Service icon"}
                        width={165}
                        height={129}
                        className="object-contain w-[120px] h-[94px] sm:w-[140px] sm:h-[110px] lg:w-[165px] lg:h-[129px]"
                        unoptimized
                      />
                    ) : (
                      <div className="w-[120px] h-[94px] sm:w-[140px] sm:h-[110px] lg:w-[165px] lg:h-[129px] bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-2 text-center py-12 text-gray-500">
            <p>No services available. Please add services in Prismic.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
