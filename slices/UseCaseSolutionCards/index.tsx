import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { getText } from "@/lib/prismicHelpers";

export type UseCaseSolutionCardsProps = SliceComponentProps<any>;

const UseCaseSolutionCards = ({ slice }: UseCaseSolutionCardsProps): JSX.Element => {
    return (
        <section className="container mx-auto px-4 lg:px-8 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {slice.items && slice.items.map((card: any, index: number) => (
                    <div
                        key={index}
                        className={`${card.card_background === 'Green' ? 'bg-primary' : 'bg-gray-100'
                            } rounded-[30px] pl-20 pr-10 py-8 flex items-center gap-10 shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-dark w-full`}
                    >
                        {card.card_icon?.url && (
                            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                                <Image
                                    src={card.card_icon.url}
                                    alt={card.card_icon.alt || "Card Icon"}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                        <div className="max-w-[60%] ml-auto pr-[10px]">
                            <p
                                className={`${card.card_background === 'Green' ? 'text-dark' : 'text-teal-600'
                                    } font-medium leading-relaxed text-left`}
                                style={{ fontFamily: 'Montserrat', fontSize: '18px' }}
                            >
                                {getText(card.card_text)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UseCaseSolutionCards;
