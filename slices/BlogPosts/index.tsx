import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BlogCard from '@/components/BlogCard';
import { getText } from "@/lib/prismicHelpers";

export type BlogPostsProps = SliceComponentProps<any>;

const BlogPosts = ({ slice }: BlogPostsProps): JSX.Element => {
    return (
        <section className="container mx-auto px-4 lg:px-8 pb-16">
            {slice.items && slice.items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {slice.items.map((post: any, index: number) => (
                        <BlogCard
                            key={index}
                            title={getText(post.title) || "Untitled"}
                            excerpt={getText(post.excerpt) || ""}
                            author={getText(post.author) || "Anonymous"}
                            logo={post.author_image?.url || "/blog-icon-1.png"}
                            date={getText(post.date) || ""}
                            badgeType={post.badge_type as 'Tutorial' | 'Article'}
                            slug={getText(post.slug) || "#"}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-600">No blog posts available. Please add blog posts in Prismic.</p>
                </div>
            )}
        </section>
    );
};

export default BlogPosts;
