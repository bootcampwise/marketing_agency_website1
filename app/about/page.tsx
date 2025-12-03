import TeamMemberCard from '@/components/TeamMemberCard'
import Image from "next/image";


export default function AboutPage() {
    const teamMembers = [
        {
            name: 'John Smith',
            role: 'CEO and Founder',
            bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
            avatar: '/team-1.png',
            linkedInUrl: '#',
        },
        {
            name: 'Jane Doe',
            role: 'Director of Operations',
            bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
            avatar: '/team-2.png',
            linkedInUrl: '#',
        },
        {
            name: 'Michael Brown',
            role: 'Senior SEO Specialist',
            bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
            avatar: '/team-3.png',
            linkedInUrl: '#',
        },
        {
            name: 'Emily Johnson',
            role: 'PPC Manager',
            bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
            avatar: '/team-4.png',
            linkedInUrl: '#',
        },
        {
            name: 'Brian Williams',
            role: 'Social Media Specialist',
            bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
            avatar: '/team-5.png',
            linkedInUrl: '#',
        },
        {
            name: 'Sarah Kim',
            role: 'Content Creator',
            bio: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
            avatar: '/team-6.png',
            linkedInUrl: '#',
        },
    ]

    const services = [
        {
            title: 'Search engine optimization',
            icon: '🔎',
            image: '/service-seo.png',
            bgColor: 'bg-gray-light',
            border: 'border-dark',
        },
        {
            title: 'Pay-per-click advertising',
            icon: '👆',
            image: '/service-ppc.png',
            bgColor: 'bg-primary',
            border: 'border-dark',
        },
        {
            title: 'Social Media Marketing',
            icon: '👥',
            image: '/service-social.png',
            bgColor: 'bg-dark',
            border: 'border-dark',
            textColor: 'text-white',
        },
        {
            title: 'Email Marketing',
            icon: '📧',
            image: '/service-email.png',
            bgColor: 'bg-gray-light',
            border: 'border-dark',
        },
        {
            title: 'Content Creation',
            icon: '📝',
            image: '/service-content.png',
            bgColor: 'bg-primary',
            border: 'border-dark',
        },
        {
            title: 'Analytics and Tracking',
            icon: '📊',
            image: '/service-analytics.png',
            bgColor: 'bg-dark',
            border: 'border-dark',
            textColor: 'text-white',
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                        We Navigate the digital landscape for success
                    </h1>
                    <div style={{ width: '100%' }}>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }}>
                            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                    </div>
                    <button className="btn-primary">
                        <p style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }}>Book a consultation</p>
                    </button>
                </div>
            </section>

            {/* Client Logos */}
            <section className="container mx-auto px-4 lg:px-8 py-8">
                <div className="border-t border-gray-200 pt-12">
                    <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-60">
                        <Image
                            src="/logos/amazon-logo.png"
                            alt="Amazon"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                        <Image
                            src="/logos/dribbble-logo.png"
                            alt="Dribbble"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                        <Image
                            src="/logos/hubspot-logo.png"
                            alt="HubSpot"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                        <Image
                            src="/logos/notion-logo.png"
                            alt="Notion"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                        <Image
                            src="/logos/netflix-logo.png"
                            alt="Netflix"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                        <Image
                            src="/logos/zoom-logo.png"
                            alt="Zoom"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk', fontSize: '40px' }}>Team</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Meet the skilled and experienced team behind our<br />
                        successful digital marketing strategies
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            avatar={member.avatar}
                            linkedInUrl={member.linkedInUrl}
                        />
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading flex items-center justify-center" style={{ width: '178px', height: '51px', fontSize: '40px', fontFamily: 'Space Grotesk' }}>Services</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        At our digital marketing agency, we offer a range of services to<br />
                        help businesses grow and succeed online. These services include:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.bgColor} ${service.border} ${service.textColor || 'text-dark'} border-2 border-b-8 rounded-3xl p-8 relative h-[310px] w-[600px] hover:shadow-lg transition-all overflow-hidden`}
                        >
                            {/* Title with background */}
                            <div className="mb-4">
                                <h3 className="text-2xl lg:text-3xl font-semibold inline-block bg-primary px-2 py-1 rounded">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Illustration - positioned absolutely on the right */}
                            {service.image && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-44 h-44">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={180}
                                        height={180}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            )}

                            {/* Learn more button - at bottom */}
                            <div className="absolute bottom-8 left-8">
                                <button className="flex items-center gap-2 bg-dark text-white rounded-full px-4 py-2">
                                    <span className="text-lg">→</span>
                                    <span className="font-medium">Learn more</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
