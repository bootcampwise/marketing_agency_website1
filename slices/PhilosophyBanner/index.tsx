import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

export type PhilosophyBannerProps = SliceComponentProps<any>;

const PhilosophyBanner = ({ slice }: PhilosophyBannerProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container mx-auto px-4 lg:px-8 py-12"
        >
            <div className="overflow-hidden rounded-[45px]">
                {/* Green Bar */}
                <div className="w-full bg-primary py-3">
                    <div className="flex gap-4 items-center whitespace-nowrap text-dark font-bold text-xs tracking-widest px-8 ml-[450px]">
                        {slice.items.map((item: any, index: number) => (
                            <div key={index} className="flex items-center gap-4">
                                <span>{getText(item.nav_item)}</span>
                                {index < slice.items.length - 1 && (
                                    <span className="w-3 h-3 bg-dark rounded-full"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Philosophy Content (Black) */}
                <div className="bg-dark p-12 lg:p-16 relative">
                    <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                            <PrismicRichText
                                field={slice.primary.heading}
                                components={{
                                    strong: ({ children }) => <span className="text-primary">{children}</span>,
                                }}
                            />
                        </h2>
                        <p className="text-white text-sm lg:text-base leading-relaxed">
                            {getText(slice.primary.description)}
                        </p>
                    </div>

                    {/* Dot Pattern - Right Side */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-6 gap-2 opacity-20">
                        {[...Array(42)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        ))}
                    </div>

                    {/* Dot Pattern - Left Side */}
                    <div className="absolute left-8 bottom-8 grid grid-cols-6 gap-2 opacity-20">
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophyBanner;
