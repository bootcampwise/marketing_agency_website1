import Link from "next/link";
import { PricingCardProps } from "@/types";

export default function PricingCard({
  tier,
  description,
  price,
  features,
  isPopular = false,
}: PricingCardProps) {
  return (
    <div
      className="bg-white border-2 border-dark rounded-3xl p-8 transition-all flex flex-col"
      style={{ boxShadow: "0px 8px 0px 0px rgba(0, 0, 0, 1)" }}
    >
      <h3 className="text-2xl font-bold mb-3">{tier}</h3>

      <p className="text-sm text-gray-text mb-6 min-h-[3rem]">{description}</p>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-lg text-gray-text">/month</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-primary text-dark font-semibold py-3 px-6 rounded-xl hover:bg-dark hover:text-white transition-all border-2 border-dark">
        Get Started
      </button>
    </div>
  );
}
