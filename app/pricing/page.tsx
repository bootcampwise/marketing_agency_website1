import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function PricingPage() {
    const client = createClient();

    try {
        const page = await client.getSingle("pricing_page");

        return (
            <div>
                <SliceZone slices={page.data.slices} components={components} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching pricing page from Prismic:", error);

        return (
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        ⚠️ Pricing Page Not Found in Prismic
                    </h2>
                    <p className="mb-4 text-yellow-700">
                        The pricing page document hasn't been created in Prismic yet. Please follow these steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                        <li>Open Slice Machine (if not running, run: <code className="bg-yellow-100 px-2 py-1 rounded">npm run slicemachine</code>)</li>
                        <li>Push your custom types and slices to Prismic</li>
                        <li>Go to your Prismic dashboard</li>
                        <li>Create a new "Pricing Page" document</li>
                        <li>Add PricingHero and PricingTiers slices</li>
                        <li>Publish the document</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();

    try {
        const page = await client.getSingle("pricing_page");

        return {
            title: (page.data.meta_title as string) || "Pricing - Positivus Digital Marketing",
            description: (page.data.meta_description as string) || "Choose the perfect plan for your business needs",
            openGraph: {
                title: (page.data.meta_title as string) || "Pricing - Positivus Digital Marketing",
                description: (page.data.meta_description as string) || "Choose the perfect plan for your business",
                images: page.data.meta_image?.url ? [page.data.meta_image.url] : [],
            },
        };
    } catch (error) {
        return {
            title: "Pricing - Positivus Digital Marketing",
            description: "Choose the perfect plan for your business needs",
        };
    }
}
