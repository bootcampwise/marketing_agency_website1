import BlogCard from '@/components/BlogCard'

export default function BlogsPage() {
    const blogPosts = [
        {
            title: 'How to quickly deploy a static website',
            excerpt: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
            author: 'Jese Leos',
            logo: '/blog-icon-1.png',
            date: 'January 20, 2024',
            badgeType: 'Tutorial' as const,
            slug: 'building-static-website',
        },
        {
            title: 'Our first project with Astro',
            excerpt: 'In the ever-evolving world of mobile technology, Samsung has consistently delivered cutting-edge devices that redefine the way we experience the digital world.',
            author: 'Bonnie Green',
            logo: '/blog-icon-2.png',
            date: 'January 17, 2025',
            badgeType: 'Article' as const,
            slug: 'first-project-astro',
        },
        {
            title: "Capturing Life's Moments with Canon Excellence",
            excerpt: 'Consider human a growth of masterwork in the food of privelkeding by including their value-based life. Clean one has a value.',
            author: 'Bonnie Green',
            logo: '/blog-icon-3.png',
            date: 'January 15, 2024',
            badgeType: 'Article' as const,
            slug: 'canva-pro-moments',
        },
        {
            title: 'Unleash Creativity With These Cutting-Edge Tablets',
            excerpt: 'In the world of digital creativity, tablets have become indispensable tools for artists, designers, and anyone seeking to unleash their artistic potential.',
            author: 'Bonnie Green',
            logo: '/blog-icon-4.png',
            date: 'January 14, 2024',
            badgeType: 'Article' as const,
            slug: 'sketch-accessibility-tablets',
        },
        {
            title: 'Guardian of the Digital Realm: Web Security',
            excerpt: "In today's interconnected world, where data breaches and cyber threats are on the rise, web security has become paramount. As the guardians of the digital realm...",
            author: 'Jese Leos',
            logo: '/blog-icon-5.png',
            date: 'January 14, 2024',
            badgeType: 'Tutorial' as const,
            slug: 'web-security-guardian',
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                    </p>
                </div>

                {/* Search Bar */}
                <form className="w-full mb-10">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="flex-1 px-6 py-3 border-2 border-dark rounded-lg outline-none text-sm bg-white"
                        />
                        <button
                            type="submit"
                            className="bg-dark text-white p-3 rounded-lg hover:bg-primary hover:text-dark transition-colors flex items-center justify-center border-2 border-dark"
                            aria-label="Search"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </section>

            {/* Blog Posts Grid */}
            <section className="container mx-auto px-4 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            title={post.title}
                            excerpt={post.excerpt}
                            author={post.author}
                            logo={post.logo}
                            date={post.date}
                            badgeType={post.badgeType}
                            slug={post.slug}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
