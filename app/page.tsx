import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function HomePage() {
  const client = createClient();

  try {
    const page = await client.getSingle("homepage");

    return (
      <div>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching homepage from Prismic:", error);

    return (
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">
            ⚠️ Homepage Not Found in Prismic
          </h2>
          <p className="mb-4 text-yellow-700">
            The homepage document hasn't been created in Prismic yet. Please
            follow these steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-yellow-700">
            <li>
              Open Slice Machine (if not running, run:{" "}
              <code className="bg-yellow-100 px-2 py-1 rounded">
                npm run slicemachine
              </code>
              )
            </li>
            <li>Push your custom types and slices to Prismic</li>
            <li>Go to your Prismic dashboard</li>
            <li>Create a new "Homepage" document</li>
            <li>Add slices and populate with content</li>
            <li>Publish the document</li>
          </ol>
          <p className="mt-4 text-sm text-yellow-600">
            Check the{" "}
            <code className="bg-yellow-100 px-2 py-1 rounded">
              HOMEPAGE_PRISMIC_GUIDE.md
            </code>{" "}
            file for detailed instructions.
          </p>
        </div>
      </div>
    );
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  try {
    const page = await client.getSingle("homepage");

    return {
      title: page.data.meta_title || "Positivus - Digital Marketing Agency",
      description:
        page.data.meta_description ||
        "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
      openGraph: {
        title: page.data.meta_title || "Positivus - Digital Marketing Agency",
        description:
          page.data.meta_description ||
          "Our digital marketing agency helps businesses grow and succeed online",
        images: page.data.meta_image?.url ? [page.data.meta_image.url] : [],
      },
    };
  } catch (error) {
    return {
      title: "Positivus - Digital Marketing Agency",
      description:
        "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
    };
  }
}
