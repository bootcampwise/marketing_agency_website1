import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

export type UseCaseChallengeProps = SliceComponentProps<any>;

const UseCaseChallenge = ({ slice }: UseCaseChallengeProps): JSX.Element => {
    return (
        <section className="container mx-auto px-4 lg:px-8 py-8">
            <div className="bg-gray-light rounded-[45px] p-14 lg:p-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="max-w-lg w-full">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">
                            {getText(slice.primary.heading) || "The Challenge"}
                        </h2>
                        <p className="text-lg text-dark leading-relaxed">
                            {getText(slice.primary.description)}
                        </p>
                    </div>
                    {slice.primary.pattern_image?.url && (
                        <div className="flex-shrink-0">
                            <Image
                                src={slice.primary.pattern_image.url}
                                alt={slice.primary.pattern_image.alt || "Challenge Pattern"}
                                width={192}
                                height={192}
                                className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default UseCaseChallenge;
