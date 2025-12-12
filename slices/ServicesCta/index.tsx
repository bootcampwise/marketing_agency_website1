import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `ServicesCta`.
 */
export type ServicesCtaProps = SliceComponentProps<any>;

/**
 * Component for "ServicesCta" Slices.
 * 
 * This component renders a call-to-action section at the end of the services page with:
 * - Compelling heading
 * - Descriptive text
 * - Prominent CTA button
 * - Centered layout with visual emphasis
 */
const ServicesCta = ({ slice }: ServicesCtaProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container mx-auto px-4 lg:px-8 py-16 lg:py-24"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium mb-6 text-dark leading-tight">
                    {getText(slice.primary.heading) || "Ready to transform your digital presence?"}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-dark leading-relaxed mb-8 max-w-2xl mx-auto">
                    {getText(slice.primary.description) || "Contact us today to discuss your digital marketing needs and discover how our services can help your business grow and recover online."}
                </p>

                {/* CTA Button */}
                <Link
                    href={getText(slice.primary.button_link) || "/contact"}
                    className="inline-block bg-dark text-white px-8 py-4 rounded-[14px] font-sans text-lg hover:bg-dark/90 transition-all duration-300"
                >
                    {getText(slice.primary.button_text) || "Get in touch"}
                </Link>
            </div>
        </section>
    );
};

export default ServicesCta;

