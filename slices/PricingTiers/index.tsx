import { PricingTiersProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PricingCard from "@/components/PricingCard";
import { getText } from "@/lib/prismicHelpers";

import {
  KeyTextField,
  Slice,
  BooleanField,
  NumberField,
} from "@prismicio/client";

const PricingTiers = ({ slice }: PricingTiersProps): JSX.Element => {
  return (
    <section className="container mx-auto px-4 lg:px-8 pb-16">
      {slice.items && slice.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.items.map((tier, index: number) => {
            const featuresText = getText(tier.features) || "";
            const features = featuresText
              .split("\n")
              .filter((f: string) => f.trim() !== "");

            return (
              <PricingCard
                key={index}
                tier={getText(tier.tier) || "Plan"}
                description={getText(tier.description) || ""}
                price={tier.price || 0}
                features={features}
                isPopular={tier.is_popular || false}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No pricing tiers available. Please add pricing tiers in Prismic.
          </p>
        </div>
      )}
    </section>
  );
};

export default PricingTiers;
