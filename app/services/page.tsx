import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At Positivus, we offer a comprehensive range of digital marketing services designed to help your business thrive in the online world. Explore our services below to find the perfect solution for your needs.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 space-y-16 pb-20">
                {/* Service 1: SEO - Light Gray */}
                <ServiceCard
                    bgColor="bg-gray-50"
                    badgeBg="bg-primary"
                    badgeText="Search Engine"
                    badgeText2="Optimization"
                    badgeTextColor="text-dark"
                    buttonBg="bg-dark"
                    buttonTextColor="text-white"
                    illustration="/service-seo.png"
                    whatWeOffer="We optimize your website to rank higher in search engine results pages, driving more organic traffic to your site. Our SEO services include keyword research, on-page optimization, technical SEO, and link building strategies."
                    ctaText="Get SEO Audit"
                    ctaLink="#seo-audit"
                    benefits={[
                        'Increased organic traffic',
                        'Higher website rankings',
                        'Better user experience',
                        'Increased brand visibility'
                    ]}
                />

                {/* Service 2: PPC - Green */}
                <ServiceCard
                    hasBackgroundWrapper={true}
                    bgColor="bg-primary"
                    badgeBg="bg-white"
                    badgeText="Pay-per-click"
                    badgeText2="advertising"
                    badgeTextColor="text-dark"
                    buttonBg="bg-dark"
                    buttonTextColor="text-white"
                    illustration="/service-ppc.png"
                    whatWeOffer="Our PPC services help you maximize your advertising budget by creating targeted campaigns that reach the right audience at the right time. We manage campaigns across Google Ads, Bing Ads, and social media platforms."
                    ctaText="Start PPC Campaign"
                    ctaLink="#ppc"
                    benefits={[
                        'Immediate website traffic',
                        'Highly targeted advertising',
                        'Measurable ROI',
                        'Flexible budgeting options'
                    ]}
                />

                {/* Service 3: Social Media - Dark */}
                <ServiceCard
                    bgColor="bg-dark"
                    badgeBg="bg-white"
                    badgeText="Social Media"
                    badgeText2="Marketing"
                    badgeTextColor="text-dark"
                    buttonBg="bg-white"
                    buttonTextColor="text-dark"
                    illustration="/service-social.png"
                    whatWeOffer="We help you build and engage with your audience across various social media platforms. Our services include content creation, community management, paid social advertising, and performance analytics."
                    ctaText="Social Media Strategy"
                    ctaLink="/services/social-media-marketing"
                    benefits={[
                        'Increased brand awareness',
                        'Better customer engagement',
                        'Higher conversion rates',
                        'Audience insights'
                    ]}
                />

                {/* Service 4: Email Marketing - Light */}
                <ServiceCard
                    hasBackgroundWrapper={true}
                    bgColor="bg-gray-light"
                    badgeBg="bg-primary"
                    badgeText="Email"
                    badgeText2="Marketing"
                    badgeTextColor="text-dark"
                    buttonBg="bg-dark"
                    buttonTextColor="text-white"
                    illustration="/service-email.png"
                    whatWeOffer="Our email marketing services help you nurture leads and maintain customer relationships through personalized campaigns. We handle everything from strategy development to design, automation, and performance analysis."
                    ctaText="Start Email Campaign"
                    ctaLink="#email"
                    benefits={[
                        'Direct customer communication',
                        'High ROI',
                        'Personalized messaging',
                        'Automated workflows'
                    ]}
                />

                {/* Service 5: Content Creation - Green */}
                <ServiceCard
                    bgColor="bg-primary"
                    badgeBg="bg-white"
                    badgeText="Content"
                    badgeText2="Creation"
                    badgeTextColor="text-dark"
                    buttonBg="bg-dark"
                    buttonTextColor="text-white"
                    illustration="/service-content.png"
                    whatWeOffer="We create high-quality, engaging content that resonates with your target audience and helps achieve your business goals. Our content services include blog posts, articles, infographics, videos, and more."
                    ctaText="Content Strategy"
                    ctaLink="#content"
                    benefits={[
                        'Increased audience engagement',
                        'Increased brand authority',
                        'Better search visibility',
                        'Valuable marketing assets'
                    ]}
                />

                {/* Service 6: Analytics - Dark */}
                <ServiceCard
                    hasBackgroundWrapper={true}
                    bgColor="bg-dark"
                    badgeBg="bg-white"
                    badgeText="Analytics and"
                    badgeText2="Tracking"
                    badgeTextColor="text-dark"
                    buttonBg="bg-white"
                    buttonTextColor="text-dark"
                    illustration="/service-analytics.png"
                    whatWeOffer="We help you make data-driven decisions by setting up comprehensive tracking systems and providing actionable insights. Our services include setting up analytics tools, custom dashboards, conversion tracking, and regular reporting."
                    ctaText="Analytics Setup"
                    ctaLink="#analytics"
                    benefits={[
                        'Data-driven decision making',
                        'Performance tracking',
                        'User behavior insights',
                        'ROI measurement'
                    ]}
                />
            </div>

            {/* CTA Section */}
            <section className="container mx-auto px-4 lg:px-8 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Ready to transform your digital presence?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        Contact us today to discuss your digital marketing needs and discover how our services can help your business grow and succeed online.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-dark text-white px-10 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                        Get in touch
                    </Link>
                </div>
            </section>
        </div>
    )
}

// Service Card Component
function ServiceCard({
    bgColor,
    badgeBg,
    badgeText,
    badgeText2,
    badgeTextColor,
    buttonBg,
    buttonTextColor,
    illustration,
    whatWeOffer,
    ctaText,
    ctaLink,
    benefits,
    hasBackgroundWrapper = false
}: {
    bgColor: string
    badgeBg: string
    badgeText: string
    badgeText2: string
    badgeTextColor: string
    buttonBg: string
    buttonTextColor: string
    illustration: string
    whatWeOffer: string
    ctaText: string
    ctaLink: string
    benefits: string[]
    hasBackgroundWrapper?: boolean
}) {
    const isDark = bgColor === 'bg-dark'
    const textColor = isDark ? 'text-white' : 'text-dark'

    const content = (
        <>
            {/* Large Service Card */}
            <div className={`${bgColor} border-2 border-b-8 border-dark rounded-[45px] p-12 lg:p-16 relative mb-12`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Badge and Button */}
                    <div className="flex flex-col justify-between h-full min-h-[200px]">
                        {/* Badge */}
                        <div className={`inline-flex flex-col ${badgeBg} px-6 py-3 rounded-lg w-fit`}>
                            <span className={`font-medium ${badgeTextColor}`}>{badgeText}</span>
                            <span className={`font-medium ${badgeTextColor}`}>{badgeText2}</span>
                        </div>

                        {/* Service Info Button */}
                        <div className="mt-auto">
                            <Link
                                href={ctaLink}
                                className={`inline-flex items-center justify-center w-12 h-12 ${buttonBg} ${buttonTextColor} rounded-full hover:opacity-80 transition-opacity`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16l4-4-4-4M8 12h8" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src={illustration}
                            alt="Service Illustration"
                            width={400}
                            height={300}
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Content Below Card - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - What we offer */}
                <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">What we offer</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {whatWeOffer}
                    </p>
                    <Link
                        href={ctaLink}
                        className="inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-lg font-medium text-dark hover:bg-primary/90 transition-colors"
                    >
                        {ctaText}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 10h10M10 5l5 5-5 5" />
                        </svg>
                    </Link>
                </div>

                {/* Right Column - Benefits */}
                <div className="bg-gray-light p-8 rounded-3xl">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">Benefits</h3>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2 7l3 3 7-7" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )

    return (
        <div className="container mx-auto px-4 lg:px-8">
            {hasBackgroundWrapper ? (
                <div className="bg-gray-light p-8 lg:p-12">
                    {content}
                </div>
            ) : (
                content
            )}
        </div>
    )
}
