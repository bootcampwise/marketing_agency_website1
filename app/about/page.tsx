import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function AboutPage() {
  const client = createClient();

  try {
    const [aboutPage, homepage] = await Promise.all([
      client.getSingle("about_page"),
      client.getSingle<Content.HomepageDocument>("homepage"),
    ]);

    // Extract Team and Services slices from homepage
    const teamSlice = homepage.data.slices?.find(
      (s) => s.slice_type === "team",
    );
    const servicesSlice = homepage.data.slices?.find(
      (s) => s.slice_type === "services",
    );

    // Combine About page slices with homepage Team and Services slices
    const combinedSlices = [
      ...(aboutPage.data.slices || []),
      ...(teamSlice ? [teamSlice] : []),
      ...(servicesSlice ? [servicesSlice] : []),
    ];

    return (
      <div>
        <SliceZone slices={combinedSlices} components={components} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching about page from Prismic:", error);

    return (
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">
            ⚠️ About Page Not Found in Prismic
          </h2>
          <p className="mb-4 text-yellow-700">
            The about page document hasn't been created in Prismic yet. Please
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
            <li>Create a new "About Page" document</li>
            <li>Add the AboutHero slice and populate with content</li>
            <li>Publish the document</li>
          </ol>
          <p className="mt-4 text-sm text-yellow-600">
            The Team and Services sections will automatically appear from the
            homepage data.
          </p>
        </div>
      </div>
    );
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  try {
    const page = await client.getSingle("about_page");

    return {
      title:
        page.data.meta_title || "About Us - Positivus Digital Marketing Agency",
      description:
        page.data.meta_description ||
        "Learn about our team and the services we offer to help businesses grow and succeed online.",
      openGraph: {
        title:
          page.data.meta_title ||
          "About Us - Positivus Digital Marketing Agency",
        description:
          page.data.meta_description || "Learn about our team and services",
        images: page.data.meta_image?.url ? [page.data.meta_image.url] : [],
      },
    };
  } catch (error) {
    return {
      title: "About Us - Positivus Digital Marketing Agency",
      description:
        "Learn about our team and the services we offer to help businesses grow and succeed online.",
    };
  }
}
