import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
    title: string
    excerpt: string
    author: string
    logo: string
    date: string
    badgeType?: 'Tutorial' | 'Article'
    slug: string
}

export default function BlogCard({
    title,
    excerpt,
    author,
    logo,
    date,
    badgeType,
    slug,
}: BlogCardProps) {
    return (
        <div
            className="bg-white border-2 border-dark rounded-3xl p-6 transition-all flex flex-col"
            style={{ boxShadow: '0px 8px 0px 0px rgba(0, 0, 0, 1)', width: '612px' }}
        >
            {/* Header: Badge and Date */}
            <div className="flex items-center justify-between mb-4">
                {badgeType && (
                    <span className="inline-flex items-center gap-1 bg-primary text-dark px-3 py-1 rounded-full text-xs font-semibold">
                        {badgeType === 'Tutorial' ? (
                            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="2" y="4" width="10" height="8" rx="1" />
                                <path d="M12 6l2.5-1.5v7L12 10V6z" />
                            </svg>
                        ) : (
                            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="3" y="2" width="10" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
                                <line x1="5" y1="5" x2="11" y2="5" stroke="currentColor" strokeWidth="1" />
                                <line x1="5" y1="7" x2="11" y2="7" stroke="currentColor" strokeWidth="1" />
                                <line x1="5" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        )}
                        {badgeType}
                    </span>
                )}
                <span className="text-sm text-gray-text ml-auto">{date}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">{title}</h3>

            {/* Excerpt */}
            <p className="text-gray-text mb-6 line-clamp-3 flex-grow" style={{ fontSize: '16px' }}>{excerpt}</p>

            {/* Footer: Author and Read More */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-dark overflow-hidden relative">
                        <Image src={logo} alt={author} fill className="object-cover" />
                    </div>
                    <span className="text-sm font-medium">{author}</span>
                </div>
                <Link
                    href={`/blogs/${slug}`}
                    className="text-sm font-medium text-dark hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                    Read more
                    <span>→</span>
                </Link>
            </div>
        </div>
    )
}
