import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function ServiceDetailPage({ params }: { params: { uid: string } }) {
    const client = createClient();

    try {
        const page = await client.getByUID("service_detail_page", params.uid);

        return (
            <div className="min-h-screen bg-white">
                <SliceZone slices={page.data.slices} components={components} />
            </div>
        );
    } catch (error) {
        console.error(`Error fetching service detail page for UID "${params.uid}":`, error);

        return (
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        ⚠️ Service Page Not Found in Prismic
                    </h2>
                    <p className="mb-4 text-yellow-700">
                        The service page with UID "<code className="bg-yellow-100 px-2 py-1 rounded">{params.uid}</code>" hasn't been created in Prismic yet.
                    </p>
                    <p className="mb-4 text-yellow-700">Please follow these steps:</p>
                    <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                        <li>Open Slice Machine (run: <code className="bg-yellow-100 px-2 py-1 rounded">npm run slicemachine</code>)</li>
                        <li>Push your custom types and slices to Prismic</li>
                        <li>Go to your Prismic dashboard</li>
                        <li>Create a new "Service Detail Page" document with UID: <code className="bg-yellow-100 px-2 py-1 rounded">{params.uid}</code></li>
                        <li>Add slices and populate with content</li>
                        <li>Publish the document</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export async function generateMetadata({ params }: { params: { uid: string } }): Promise<Metadata> {
    const client = createClient();

    try {
        const page = await client.getByUID("service_detail_page", params.uid);

        return {
            title: page.data.meta_title || `${params.uid.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Positivus`,
            description: page.data.meta_description || "Explore our comprehensive digital marketing services",
            openGraph: {
                title: page.data.meta_title || `${params.uid.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Positivus`,
                description: page.data.meta_description || "Explore our comprehensive digital marketing services",
                images: page.data.meta_image?.url ? [page.data.meta_image.url] : [],
            },
        };
    } catch (error) {
        return {
            title: `${params.uid.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Positivus`,
            description: "Explore our comprehensive digital marketing services",
        };
    }
}
