import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

export type UseCaseImpactProps = SliceComponentProps<any>;

const UseCaseImpact = ({ slice }: UseCaseImpactProps): JSX.Element => {
    return (
        <section className="py-16 lg:py-20">
            <div className="w-[65%] mx-auto">
                <div className="bg-gray-light p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">
                                {getText(slice.primary.heading) || "The Impact"}
                            </h2>
                            <div className="text-lg text-dark leading-relaxed">
                                <p style={{ fontFamily: 'Montserrat', fontSize: '16px' }}>
                                    {getText(slice.primary.description)}
                                </p>
                            </div>
                        </div>
                        {slice.primary.pattern_image?.url && (
                            <div className="flex justify-center lg:justify-end">
                                <Image
                                    src={slice.primary.pattern_image.url}
                                    alt={slice.primary.pattern_image.alt || "Impact Pattern"}
                                    width={256}
                                    height={256}
                                    className="w-64 h-64 object-contain"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCaseImpact;
