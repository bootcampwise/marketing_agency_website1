import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { KeyTextField, ImageField, Slice } from "@prismicio/client";
import { components } from "@/slices";

export default async function BlogPostPage({
  params,
}: {
  params: { uid: string };
}) {
  const client = createClient();

  try {
    const post = await client.getByUID("blog_post", params.uid);

    return (
      <article>
        <SliceZone slices={post.data.slices} components={components} />
      </article>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: { uid: string };
}): Promise<Metadata> {
  const client = createClient();

  try {
    const post = await client.getByUID("blog_post", params.uid);

    const heroSlice = post.data.slices?.find(
      (slice: Slice) => slice.slice_type === "blog_post_hero",
    ) as (Slice & { primary: { title: KeyTextField } }) | undefined;
    const title = heroSlice?.primary?.title || "Blog Post";

    return {
      title: post.data.meta_title || title,
      description: post.data.meta_description || "",
      openGraph: {
        title: post.data.meta_title || title,
        description: post.data.meta_description || "",
        images: post.data.meta_image?.url ? [post.data.meta_image.url] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}
