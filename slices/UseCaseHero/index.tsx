import { UseCaseHeroProps } from "@/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

const UseCaseHero = ({ slice }: UseCaseHeroProps): JSX.Element => {
  return (
    <div>
      <section className="bg-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          {slice.primary.company_logo?.url && (
            <div className="flex justify-center mb-8">
              <Image
                src={slice.primary.company_logo.url}
                alt={slice.primary.company_logo.alt || "Company Logo"}
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          )}

          <p className="text-white font-montserrat text-xl lg:text-2xl mb-6 max-w-[520px] mx-auto">
            {getText(slice.primary.subheading)}
          </p>

          <h1 className="text-white font-montserrat font-extrabold text-xl lg:text-2xl uppercase leading-tight max-w-[480px] mx-auto">
            {getText(slice.primary.heading)}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {getText(slice.primary.description)}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UseCaseHero;
