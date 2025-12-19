import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

import { KeyTextField, RichTextField, Slice } from "@prismicio/client";

interface PricingHeroSlice extends Slice {
  slice_type: "pricing_hero";
  variation: "default";
  primary: {
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
  };
}

export type PricingHeroProps = SliceComponentProps<PricingHeroSlice>;

const PricingHero = ({ slice }: PricingHeroProps): JSX.Element => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          {getText(slice.primary.heading) ||
            "Designed for business teams like yours"}
        </h1>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {getText(slice.primary.description) ||
            "Here at Positivus we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."}
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
