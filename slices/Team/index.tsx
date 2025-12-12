import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
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
                    className="text-base lg:text-lg max-w-full lg:max-w-[480px]"
                >
                    {getText(slice.primary.description) || "Meet the skilled and experienced team behind our successful digital marketing strategies"}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {slice.items.map((member, index: number) => (
                    <div
                        key={index}
                        className="border-2 border-b-8 border-dark rounded-3xl p-6 lg:p-8 relative w-full max-w-[387px] mx-auto"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                                {member.avatar?.url && (
                                    <Image
                                        src={member.avatar.url}
                                        alt={getText(member.name) || "Team member"}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{getText(member.name)}</h3>
                                <p className="font-medium">{getText(member.role)}</p>
                            </div>
                            <button className="ml-auto w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center">
                                in
                            </button>
                        </div>
                        <div className="border-t-2 border-dark pt-6">
                            <p className="text-sm">{getText(member.experience)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {slice.primary.show_button && (
                <div className="flex justify-end">
                    <button className="bg-dark text-white px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all">
                        {getText(slice.primary.button_text) || "See all team"}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Team;
