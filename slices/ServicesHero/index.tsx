import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `ServicesHero`.
 */
export type ServicesHeroProps = SliceComponentProps<any>;

/**
 * Component for "ServicesHero" Slices.
 * 
 * This component renders the hero section for the services page with:
 * - Large, prominent title
 * - Descriptive subtitle
 * - Centered layout with maximum readability
 */
const ServicesHero = ({ slice }: ServicesHeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container mx-auto px-4 lg:px-8 py-16 lg:py-24"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 text-dark leading-tight">
                    {getText(slice.primary.title) || "Our Services"}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {getText(slice.primary.description) || "Explore our comprehensive range of digital marketing services."}
                </p>


            </div>
        </section>
    );
};

export default ServicesHero;

