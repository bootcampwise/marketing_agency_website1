import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

export type UseCaseGoalProps = SliceComponentProps<any>;

const UseCaseGoal = ({ slice }: UseCaseGoalProps): JSX.Element => {
    return (
        <section className="bg-white py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                <h6 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk', fontSize: '35px' }}>
                    {getText(slice.primary.heading) || "The Goal"}
                </h6>
                <p className="text-lg text-gray-700" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                    {getText(slice.primary.description)}
                </p>
            </div>
        </section>
    );
};

export default UseCaseGoal;
