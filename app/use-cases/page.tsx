import Image from 'next/image'
import Link from 'next/link'

export default function UseCasesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Dark Background */}
            <section className="bg-dark py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    {/* Solana Logo */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/solana-logo.png"
                            alt="Solana"
                            width={200}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Subheading */}
                    <p className="text-white font-montserrat text-[26px] tracking-wide">
                        Easly Partners with HawkSEM to<br />
                        Build an Innovative SEO Strategy<br />
                        Meant to Last
                    </p>
                    {/* Heading */}
                    <p className="text-white font-montserrat font-extrabold text-[26px]">
                        CAPITAL-AS-A-SERVICE FUNDING<br />
                        SOLUTIONS PLATFORM
                    </p>

                </div>
            </section>

            {/* Description Section - White Background */}
            <section className="bg-white py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="text-center text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Solana is a Canada-based CaaS platform that provides innovative companies of all sizes in the region with funding that suits their needs. Their mission is to provide advances on Scientific Research and Experimental Development (SR&ED) refunds and other government-funded investment tax credit and grant programs. They facilitate growth through non-dilutive financing that allows the companies they work with to retain their equity.
                    </p>
                </div>
            </section>

            {/* The Goal Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h6 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk', fontSize: '35px' }}>The Goal</h6>
                    <p className="text-lg text-gray-700" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Build a successful (and scalable) search engine optimization strategy
                    </p>
                </div>
            </section>

            {/* The Challenge Section - Gray Box */}
            <section className="container mx-auto px-4 lg:px-8 py-8">
                <div className="bg-gray-light rounded-[45px] p-14 lg:p-20">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="max-w-lg w-full">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">The Challenge</h2>
                            <p className="text-lg text-dark leading-relaxed">
                                In October 2020, Solana came to HawkSEM for help with search engine optimization (SEO) services on their newly built website. Before working with us, the company had few digital efforts to speak of.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Image
                                src="/challenge-pattern.png"
                                alt="Challenge Pattern"
                                width={192}
                                height={192}
                                className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Results Section - UPDATED LAYOUT */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
                    <div className="flex-shrink-0">
                        <Image
                            src="/results-pattern.png"
                            alt="Results Pattern"
                            width={192}
                            height={192}
                            className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                        />
                    </div>
                    <div className="max-w-lg">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">The Results</h2>
                        <div className="space-y-4 text-lg text-dark leading-relaxed">
                            <p>Increased referring domains by more than 2,500%</p>
                            <p>More than 40 featured snippet results on Google</p>
                            <p>Increased the brand's keyword portfolio by more than 1,500%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Cards Grid */}
            <section className="container mx-auto px-4 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1 - Green */}
                    <div className="bg-primary rounded-[30px] pl-20 pr-10 py-8 flex items-center gap-10 shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-dark w-full">
                        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <Image
                                src="/card-icon-1.png"
                                alt="Content Icon"
                                width={64}
                                height={64}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="max-w-[60%] ml-auto pr-[10px]">
                            <p
                                className="text-dark font-medium leading-relaxed text-left"
                                style={{ fontFamily: 'Montserrat', fontSize: '18px' }}
                            >
                                Create more than 70<br />
                                content pieces on-site that<br />
                                are SEO optimized and<br />
                                touch multiple points of the <br />
                                conversion funnel
                            </p>
                        </div>
                    </div>
                    {/* Card 2 - Gray */}
                    <div className="bg-gray-100 rounded-[30px] pl-20 pr-10 py-8 flex items-center gap-10 shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-dark w-full">
                        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <Image src="/card-icon-2.png" alt="Link Icon" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <div className="max-w-[60%] ml-auto pr-[10px]">
                            <p className="text-teal-600 text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Montserrat', fontSize: '18px' }}>
                                Build domain authority<br />
                                through off-site SEO and<br />
                                creating linkable content for<br />
                                natural backlinks accrual
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Gray */}
                    <div className="bg-gray-100 rounded-[30px] pl-20 pr-10 py-8 flex items-center gap-10 shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-dark w-full">
                        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <Image src="/card-icon-3.png" alt="Analytics Icon" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <div className="max-w-[60%] ml-auto pr-[10px]">
                            <p className="text-teal-600 text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Montserrat', fontSize: '18px' }}>
                                Create more than 70<br />
                                content pieces on-site that<br />
                                are SEO optimized and<br />
                                touch multiple points of the<br />
                                conversion funnel
                            </p>
                        </div>
                    </div>

                    {/* Card 4 - Green */}
                    <div className="bg-primary rounded-[30px] pl-20 pr-10 py-8 flex items-center gap-10 shadow-[0_5px_0_0_rgba(0,0,0,1)] border border-dark w-full">
                        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            <Image src="/card-icon-4.png" alt="Mobile Icon" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <div className="max-w-[60%] ml-auto pr-[10px]">
                            <p className="text-dark text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Montserrat', fontSize: '18px' }}>
                                Improve mobile and<br />
                                desktop user experience for<br />
                                CRO. Create more than 70<br />
                                content pieces
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution Section - Dark Box */}
            <section className="container mx-auto px-4 lg:px-8 py-16">
                <div className="bg-dark text-white rounded-[45px] p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src="/solution-pattern.png"
                                alt="Solution Pattern"
                                width={275}
                                height={295}
                                className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Solution</h2>
                            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat', fontSize: '18px' }}>
                                After digging into their company, we saw how Solana's niche is limited in terms of traffic potential and search volume. Because they work with SR&ED and grant financing space, we knew there was a distinct need to publish quality content, capitalize on site visits to promote conversion rate optimization (CRO).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Impact Section - Constrained Width */}
            <section className="py-16 lg:py-20">
                <div className="w-[65%] mx-auto">
                    <div className="bg-gray-light p-12 lg:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">The Impact</h2>
                                <div className="space-y-4 text-lg text-dark leading-relaxed">
                                    <p style={{ fontFamily: 'Montserrat', fontSize: '16px' }}>
                                        When we partnered with Solana on their SEO efforts, they were ranking for 20 keywords total, with no first-page non-branded rankings or featured results.
                                    </p>
                                    <p style={{ fontFamily: 'Montserrat', fontSize: '13px' }}>
                                        After we implemented online-enhanced SEO strategy, Solana saw a 1,500% increase for more than 328 keywords in Canada, their target region. We were also able to increase their referring domains by more than 2,500%. Lastly, we systematically on-page optimized all pages and posts, and created more CTAs to increase conversions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <Image
                                    src="/impact-pattern.png"
                                    alt="Impact Pattern"
                                    width={256}
                                    height={256}
                                    className="w-64 h-64 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
