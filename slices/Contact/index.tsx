"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { useState } from "react";
import { getText } from "@/lib/prismicHelpers";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  const [formData, setFormData] = useState({
    inquiryType: "hi",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 lg:px-8 py-16"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-12">
        <h2 className="section-heading text-3xl lg:text-4xl xl:text-5xl bg-primary w-fit px-1 sm:px-2 py-0.5 sm:py-1 rounded">
          {getText(slice.primary.heading)}
        </h2>
        <p className="text-base lg:text-lg max-w-full lg:max-w-[320px]">
          {getText(slice.primary.description) ||
            "Connect with Us: Let's Discuss Your Digital Marketing Needs"}
        </p>
      </div>

      <div className="bg-gray-light rounded-3xl p-6 lg:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Radio Buttons */}
            <div className="flex items-center gap-8 mb-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-7 h-7 rounded-full border border-dark flex items-center justify-center bg-white">
                  {formData.inquiryType === "hi" && (
                    <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                  )}
                  <input
                    type="radio"
                    name="inquiryType"
                    value="hi"
                    checked={formData.inquiryType === "hi"}
                    onChange={() =>
                      setFormData({ ...formData, inquiryType: "hi" })
                    }
                    className="sr-only"
                  />
                </div>
                <span className="text-lg">Say Hi</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-7 h-7 rounded-full border border-dark flex items-center justify-center bg-white">
                  {formData.inquiryType === "quote" && (
                    <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                  )}
                  <input
                    type="radio"
                    name="inquiryType"
                    value="quote"
                    checked={formData.inquiryType === "quote"}
                    onChange={() =>
                      setFormData({ ...formData, inquiryType: "quote" })
                    }
                    className="sr-only"
                  />
                </div>
                <span className="text-lg">Get a Quote</span>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-6 py-4 border border-dark rounded-[14px] bg-white focus:outline-none focus:border-primary placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email*</label>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-6 py-4 border border-dark rounded-[14px] bg-white focus:outline-none focus:border-primary placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Message*</label>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-6 py-4 border border-dark rounded-[14px] bg-white focus:outline-none focus:border-primary resize-none placeholder:text-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-dark text-white px-8 py-5 rounded-[14px] text-lg font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Send Message
            </button>
          </form>

          {/* Illustration - Positioned with 180px from right */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none -mr-[230px]">
            <div className="relative w-full h-full flex items-center justify-end">
              {slice.primary.contact_image?.url && (
                <Image
                  src={slice.primary.contact_image.url}
                  alt={
                    slice.primary.contact_image.alt || "Contact illustration"
                  }
                  width={500}
                  height={500}
                  className="object-contain object-right h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
