"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `WorkingProcess`.
 */
export type WorkingProcessProps = SliceComponentProps<Content.WorkingProcessSlice>;

/**
 * Component for "WorkingProcess" Slices.
 */
const WorkingProcess = ({ slice }: WorkingProcessProps): JSX.Element => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container mx-auto px-4 lg:px-8 py-16"
        >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-12">
                <h2
                    className="section-heading text-3xl lg:text-4xl xl:text-5xl bg-primary w-fit px-1 sm:px-2 py-0.5 sm:py-1 rounded"
                >
                    {getText(slice.primary.heading)}
                </h2>
                <p
                    className="text-base lg:text-lg max-w-full lg:max-w-[292px]"
                >
                    {getText(slice.primary.description) || "Step-by-Step Guide to Achieving Your Business Goals"}
                </p>
            </div>

            <div className="space-y-6">
                {slice.items.map((item, index) => (
                    <div
                        key={index}
                        className={`border-2 border-b-8 border-dark rounded-3xl overflow-hidden transition-all ${activeAccordion === index ? "bg-primary" : "bg-gray-light"
                            }`}
                    >
                        <button
                            onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 lg:p-8 text-left"
                        >
                            <div className="flex items-center gap-3 lg:gap-6">
                                <span className="text-3xl lg:text-5xl font-bold">{getText(item.step_number)}</span>
                                <h3 className="text-lg lg:text-2xl font-semibold">{getText(item.step_title)}</h3>
                            </div>
                            <div
                                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-dark flex items-center justify-center text-xl lg:text-2xl flex-shrink-0 ${activeAccordion === index ? "bg-gray-light" : "bg-gray-light"
                                    }`}
                            >
                                {activeAccordion === index ? "−" : "+"}
                            </div>
                        </button>
                        {activeAccordion === index && (
                            <div className="px-4 lg:px-8 pb-4 lg:pb-8">
                                <div className="border-t-2 border-dark pt-4 lg:pt-6">
                                    <p className="text-base lg:text-lg">{getText(item.step_description)}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkingProcess;
