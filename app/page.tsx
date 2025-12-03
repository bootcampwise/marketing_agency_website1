'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function HomePage() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

    const workingProcess = [
        {
            number: '01',
            title: 'Consultation',
            description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            number: '02',
            title: 'Research and Strategy Development',
            description: 'We conduct thorough research and develop a comprehensive strategy.',
        },
        {
            number: '03',
            title: 'Implementation',
            description: 'Our team implements the marketing strategies across all channels.',
        },
        {
            number: '04',
            title: 'Monitoring and Optimization',
            description: 'We continuously monitor campaign performance and optimize for better results.',
        },
        {
            number: '05',
            title: 'Reporting and Communication',
            description: 'Regular reports and updates keep you informed of progress and results.',
        },
        {
            number: '06',
            title: 'Continual Improvement',
            description: 'We refine strategies based on data and feedback for ongoing success.',
        },
    ]

    const team = [
        { name: 'John Smith', role: 'CEO and Founder', experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', avatar: '/team-1.png' },
        { name: 'Jane Doe', role: 'Director of Operations', experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', avatar: '/team-2.png' },
        { name: 'Michael Brown', role: 'Senior SEO Specialist', experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', avatar: '/team-3.png' },
        { name: 'Emily Johnson', role: 'PPC Manager', experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis', avatar: '/team-4.png' },
        { name: 'Brian Williams', role: 'Social Media Specialist', experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement', avatar: '/team-5.png' },
        { name: 'Sarah Kim', role: 'Content Creator', experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries', avatar: '/team-6.png' },
    ]

    const testimonials = [
        {
            quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            author: "John Smith",
            position: "Marketing Director at XYZ Corp"
        },
        {
            quote: "Positivus has been instrumental in transforming our digital presence. Their SEO strategies helped us rank on the first page for our most important keywords, resulting in a 300% increase in organic traffic. The team's expertise and dedication are unmatched.",
            author: "Emily Rodriguez",
            position: "CEO at TechStart Solutions"
        },
        {
            quote: "The social media campaigns created by Positivus exceeded all our expectations. We saw a 150% increase in engagement and our brand awareness has never been stronger. Their creative approach and data-driven strategies make them stand out from the competition.",
            author: "Michael Chen",
            position: "Brand Manager at StyleHub"
        },
        {
            quote: "Working with Positivus on our PPC campaigns has been a game-changer. They optimized our ad spend and increased our conversion rate by 85%. The ROI we're seeing is incredible, and their transparent reporting keeps us informed every step of the way.",
            author: "Sarah Thompson",
            position: "Marketing Lead at GrowthCo"
        },
        {
            quote: "The content marketing strategy developed by Positivus has positioned us as thought leaders in our industry. Their team creates compelling, SEO-optimized content that resonates with our audience. We've seen a 200% increase in qualified leads since partnering with them.",
            author: "David Park",
            position: "VP of Marketing at InnovateTech"
        },
    ]

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToTestimonial = (index: number) => {
        setCurrentTestimonial(index)
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="font-bold mb-6 leading-tight max-w-[1440px]" style={{ fontFamily: 'Space Grotesk', fontSize: '60px' }}>
                            Navigating the digital landscape for success
                        </h1>
                        <p className="text-lg mb-8 text-gray-text" style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }}>
                            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                        <button className="btn-primary h-[68px] w-[264px]">
                            <p style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }}>Book a consultation</p>
                        </button>
                    </div>
                    <div className="relative">
                        <Image
                            src="/hero-illustration.png"
                            alt="Marketing illustration"
                            width={600}
                            height={515}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Client Logos */}
                <div className="mt-16 pt-16 border-t border-gray-200">
                    <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-60">
                        <Image src="/logos/amazon-logo.png" alt="Amazon" width={120} height={40} className="object-contain mt-2" />
                        <Image src="/logos/dribbble-logo.png" alt="Dribbble" width={120} height={40} className="object-contain" />
                        <Image src="/logos/hubspot-logo.png" alt="HubSpot" width={120} height={40} className="object-contain" />
                        <Image src="/logos/notion-logo.png" alt="Notion" width={120} height={40} className="object-contain" />
                        <Image src="/logos/netflix-logo.png" alt="Netflix" width={120} height={40} className="object-contain" />
                        <Image src="/logos/zoom-logo.png" alt="Zoom" width={120} height={40} className="object-contain" />

                    </div>
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
                            className={`${service.bgColor} ${service.border} ${service.textColor || 'text-dark'} border-2 border-b-8 rounded-3xl p-8 h-[310px] w-[600px] hover:shadow-lg transition-all overflow-hidden`}
                        >
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {/* Left side - Text content (50%) */}
                                <div className="flex flex-col justify-between">
                                    {/* Title with background */}
                                    <div className="mb-4">
                                        {service.title === 'Search engine optimization' ? (
                                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                                <span className="bg-primary px-2 py-1 rounded inline-block">Search engine</span><br />
                                                <span className="bg-primary px-2 py-1 rounded inline-block">optimization</span>
                                            </h3>
                                        ) : service.title === 'Pay-per-click advertising' ? (
                                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                                <span className="bg-white px-2 py-1 rounded inline-block">Pay-per-click</span><br />
                                                <span className="bg-white px-2 py-1 rounded inline-block">advertising</span>
                                            </h3>
                                        ) : service.title === 'Social Media Marketing' ? (
                                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                                <span className="bg-white text-dark px-2 py-1 rounded inline-block">Social Media</span><br />
                                                <span className="bg-white text-dark px-2 py-1 rounded inline-block">Marketing</span>
                                            </h3>
                                        ) : service.title === 'Email Marketing' ? (
                                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                                <span className="bg-primary px-2 py-1 rounded inline-block">Email</span><br />
                                                <span className="bg-primary px-2 py-1 rounded inline-block">Marketing</span>
                                            </h3>
                                        ) : service.title === 'Content Creation' ? (
                                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                                <span className="bg-white px-2 py-1 rounded inline-block">Content</span><br />
                                                <span className="bg-white px-2 py-1 rounded inline-block">Creation</span>
                                            </h3>
                                        ) : service.title === 'Analytics and Tracking' ? (
                                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                                <span className="bg-primary px-2 py-1 rounded inline-block">Analytics and</span><br />
                                                <span className="bg-primary px-2 py-1 rounded inline-block">Tracking</span>
                                            </h3>
                                        ) : (
                                            <h3 className={`text-2xl lg:text-3xl font-semibold inline-block px-2 py-1 rounded ${['Pay-per-click advertising', 'Social Media Marketing', 'Content Creation'].includes(service.title) ? 'bg-white' : 'bg-primary'} ${service.title === 'Social Media Marketing' ? 'text-dark' : ''}`}>
                                                {service.title}
                                            </h3>
                                        )}
                                    </div>

                                    {/* Learn more button - at bottom */}
                                    <div>
                                        <button className="flex items-center gap-4">
                                            <div className="w-[41px] h-[41px] rounded-full bg-dark flex items-center justify-center">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="font-normal text-[20px]" style={{ fontFamily: 'Space Grotesk' }}>Learn more</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right side - Image (50%) */}
                                <div className="flex items-center justify-center">
                                    {service.image && (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={180}
                                            height={180}
                                            className="object-contain w-full h-full max-w-[210px] max-h-[210px]"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="container mx-auto px-4 lg:px-8 py-16">
                <div className="bg-gray-light rounded-3xl" style={{ width: '1240px', height: '347px', paddingLeft: '60px', paddingRight: '60px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                Let's make things happen
                            </h2>
                            <p className="text-lg mb-8">
                                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                            </p>
                            <button className="btn-primary">
                                Get your free proposal
                            </button>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <Image
                                src="/cta-illustration.png"
                                alt="Let's make things happen"
                                width={359}
                                height={394}
                                className="object-contain"
                                style={{ width: '359px', height: '394px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section id="cases" className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk', fontSize: '40px' }}>Case Studies</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Explore Real-Life Examples of Our Proven Digital Marketing <br />
                        Success through Our Case Studies
                    </p>
                </div>

                <div className="bg-dark rounded-3xl p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border-b md:border-b-0 md:border-r border-primary pb-8 md:pb-0 md:pr-8">
                            <p className="mb-4">
                                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                            </p>
                            <button className="text-primary hover:underline">Learn more →</button>
                        </div>
                        <div className="border-b md:border-b-0 md:border-r border-primary pb-8 md:pb-0 md:pr-8">
                            <p className="mb-4">
                                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                            </p>
                            <button className="text-primary hover:underline">Learn more →</button>
                        </div>
                        <div>
                            <p className="mb-4">
                                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                            </p>
                            <button className="text-primary hover:underline">Learn more →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Process Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk', fontSize: '40px' }}>Our Working Process</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Step-by-Step Guide to Achieving<br />
                        Your Business Goals
                    </p>
                </div>

                <div className="space-y-6">
                    {workingProcess.map((item, index) => (
                        <div
                            key={index}
                            className={`border-2 border-b-8 border-dark rounded-3xl overflow-hidden transition-all ${activeAccordion === index ? 'bg-primary' : 'bg-gray-light'
                                }`}
                        >
                            <button
                                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-5xl font-bold">{item.number}</span>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <div className={`w-12 h-12 rounded-full border-2 border-dark flex items-center justify-center text-2xl ${activeAccordion === index ? 'bg-gray-light' : 'bg-gray-light'
                                    }`}>
                                    {activeAccordion === index ? '−' : '+'}
                                </div>
                            </button>
                            {activeAccordion === index && (
                                <div className="px-8 pb-8">
                                    <div className="border-t-2 border-dark pt-6">
                                        <p className="text-lg">{item.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading text-4xl lg:text-5xl">Team</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Meet the skilled and experienced team behind our<br />
                        successful digital marketing strategies
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {team.map((member, index) => (
                        <div key={index} className="border-2 border-b-8 border-dark rounded-3xl p-8 relative" style={{ width: '387px', height: '331px' }}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="font-medium">{member.role}</p>
                                </div>
                                <button className="ml-auto w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center">
                                    in
                                </button>
                            </div>
                            <div className="border-t-2 border-dark pt-6">
                                <p className="text-sm">{member.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <button className="bg-dark text-white px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all">See all team</button>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading flex items-center justify-center" style={{ width: '297px', height: '51px', fontSize: '40px', fontFamily: 'Space Grotesk' }}>Testimonials</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Hear from Our Satisfied Clients: Read Our Testimonials<br />
                        to Learn More about Our Digital Marketing Services
                    </p>
                </div>

                <div className="bg-dark rounded-3xl pt-12 pb-12 text-white overflow-hidden">
                    {/* Testimonial Cards Carousel */}
                    <div className="flex justify-center items-start gap-8 mb-12">
                        {[-1, 0, 1].map((offset) => {
                            const index = (currentTestimonial + offset + testimonials.length) % testimonials.length;
                            const testimonial = testimonials[index];
                            return (
                                <div key={index} className="flex flex-col flex-shrink-0 w-[350px] lg:w-[600px]">
                                    {/* Speech Bubble Card */}
                                    <div className="bg-dark border border-primary rounded-[45px] p-8 relative mb-8 h-full">
                                        <p className="text-base leading-relaxed text-white">"{testimonial.quote}"</p>
                                        {/* Speech bubble tail - seamless outline */}
                                        <div className="absolute -bottom-[1px] left-10 w-8 h-8 bg-dark border-b border-r border-primary transform rotate-45 translate-y-1/2"></div>
                                    </div>
                                    {/* Author Info */}
                                    <div className="pl-10">
                                        <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                                        <p className="text-sm text-white">{testimonial.position}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Controls - Centered at Bottom */}
                    <div className="flex justify-between items-center mt-24 px-4">
                        <div className="flex items-center gap-12 mx-auto">
                            {/* Previous Arrow */}
                            <button
                                onClick={prevTestimonial}
                                className="text-white hover:text-primary transition-colors"
                                aria-label="Previous testimonials"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 19L2 12L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Navigation Dots - Stars */}
                            <div className="flex gap-4">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`transition-colors ${currentTestimonial === index ? 'text-primary' : 'text-white'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    >
                                        {/* 5-pointed star SVG */}
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>

                            {/* Next Arrow */}
                            <button
                                onClick={nextTestimonial}
                                className="text-white hover:text-primary transition-colors"
                                aria-label="Next testimonials"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 5L22 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>




            {/* Contact Section */}
            <section id="contact" className="container mx-auto px-4 lg:px-8 py-16">
                <div className="flex items-center gap-8 mb-12">
                    <h2 className="section-heading text-4xl lg:text-5xl">Contact Us</h2>
                    <p className="text-lg" style={{ fontFamily: 'Space Grotesk', fontSize: '18px' }}>
                        Connect with Us: Let's Discuss Your<br />
                        Digital Marketing Needs
                    </p>
                </div>

                <div className="bg-gray-light rounded-[45px] pt-8 pb-8 pl-8 pr-0 lg:pt-12 lg:pb-12 lg:pl-12 lg:pr-0 overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <form className="space-y-5 relative z-10">
                            <div className="flex gap-6 mb-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input
                                            type="radio"
                                            name="contactType"
                                            value="hi"
                                            defaultChecked
                                            className="peer h-5 w-5 appearance-none rounded-full border border-dark bg-white transition-all cursor-pointer"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform"></div>
                                        </div>
                                    </div>
                                    <span className="text-base">Say Hi</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input
                                            type="radio"
                                            name="contactType"
                                            value="quote"
                                            className="peer h-5 w-5 appearance-none rounded-full border border-dark bg-white transition-all cursor-pointer"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform"></div>
                                        </div>
                                    </div>
                                    <span className="text-base">Get a Quote</span>
                                </label>
                            </div>

                            <div>
                                <label className="block mb-1.5 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-5 py-3.5 rounded-2xl border border-dark bg-white focus:outline-none focus:ring-2 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label className="block mb-1.5 text-sm font-medium">Email*</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl border border-dark bg-white focus:outline-none focus:ring-2 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label className="block mb-1.5 text-sm font-medium">Message*</label>
                                <textarea
                                    placeholder="Message"
                                    required
                                    rows={5}
                                    className="w-full px-5 py-3.5 rounded-2xl border border-dark bg-white focus:outline-none focus:ring-2 focus:ring-dark resize-none"
                                />
                            </div>

                            <button type="submit" className="w-full bg-dark text-white py-4 rounded-2xl font-medium hover:bg-opacity-90 transition-all mt-6">
                                Send Message
                            </button>
                        </form>

                        {/* Right Decorative Illustration */}
                        <div className="relative hidden lg:flex items-center justify-end w-full -mr-12">
                            <Image
                                src="/contact-illustration.png"
                                alt="Contact illustration"
                                width={400}
                                height={600}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
