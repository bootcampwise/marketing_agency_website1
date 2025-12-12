import { ImageField, KeyTextField, SharedSlice, SharedSliceVariation } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

// Local type definition to resolve immediate build error while waiting for generator
export type ClientLogosSliceDefaultPrimary = {
    heading: KeyTextField;
};

export type ClientLogosSliceDefaultItem = {
    logo: ImageField;
};

export type ClientLogosSlice = SharedSlice<
    "client_logos",
    SharedSliceVariation<"default", ClientLogosSliceDefaultPrimary, ClientLogosSliceDefaultItem>
>;

export type ClientLogosProps = SliceComponentProps<ClientLogosSlice>;

const ClientLogos = ({ slice }: ClientLogosProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="bg-white py-8 lg:py-12"
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="pl-4 lg:pl-[200px] mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 inline-block relative">
                        <span className="relative z-10">{getText(slice.primary.heading)}</span>
                        <span className="absolute bottom-1 left-0 w-[120%] h-3 bg-primary -z-0 opacity-80"></span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 px-4 lg:px-8">
                    {slice.items.map((item, index) => (
                        item.logo?.url && (
                            <div key={index} className="relative w-40 h-20 lg:w-44 lg:h-22 opacity-90 hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={item.logo.url}
                                    alt={item.logo.alt || "Client Logo"}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
