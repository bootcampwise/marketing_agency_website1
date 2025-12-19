import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getText } from "@/lib/prismicHelpers";

import { KeyTextField, RichTextField, Slice } from "@prismicio/client";

interface UseCaseGoalSlice extends Slice {
  slice_type: "use_case_goal";
  primary: {
    heading: KeyTextField | RichTextField;
    description: KeyTextField | RichTextField;
  };
}

export type UseCaseGoalProps = SliceComponentProps<UseCaseGoalSlice>;

const UseCaseGoal = ({ slice }: UseCaseGoalProps): JSX.Element => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h6
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "Space Grotesk", fontSize: "35px" }}
        >
          {getText(slice.primary.heading) || "The Goal"}
        </h6>
        <p
          className="text-lg text-gray-700"
          style={{ fontFamily: "Space Grotesk", fontSize: "18px" }}
        >
          {getText(slice.primary.description)}
        </p>
      </div>
    </section>
  );
};

export default UseCaseGoal;
