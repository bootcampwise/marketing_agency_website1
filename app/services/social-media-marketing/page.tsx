import Image from 'next/image'
import Link from 'next/link'

export default function SocialMediaMarketingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Top Line Growth Through Enhanced Digital Presence
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Technology makes us fast. Empathy makes us human. Global reach makes us unstoppable.
                        </p>
                        <button className="border-2 border-dark px-8 py-3 rounded-lg font-medium hover:bg-dark hover:text-white transition-colors">
                            Let's connect
                        </button>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/hero-illustration.png"
                            alt="Digital Presence Illustration"
                            width={500}
                            height={500}
                            className="w-full max-w-lg object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Section with Green Bar on Top */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="overflow-hidden rounded-[45px]">
                    {/* Green Bar - Now part of Philosophy section */}
                    <div className="w-full bg-primary py-3">
                        <div className="flex gap-4 items-center whitespace-nowrap text-dark font-bold text-xs tracking-widest px-8 ml-[450px]">
                            <span>SERVICES</span>
                            <Image src="/separator-icon.png" alt="" width={12} height={12} className="inline-block" />
                            <span>CASE STUDIES</span>
                            <Image src="/separator-icon.png" alt="" width={12} height={12} className="inline-block" />
                            <span>CLIENTS</span>
                            <Image src="/separator-icon.png" alt="" width={12} height={12} className="inline-block" />
                        </div>
                    </div>

                    {/* Philosophy Content (Black) */}
                    <div className="bg-dark p-12 lg:p-16 relative">
                        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                Tech <span className="text-primary">+</span> Human Empathy <span className="text-primary">=</span> Creativity
                            </h2>
                            <p className="text-white text-sm lg:text-base leading-relaxed">
                                We leverage our deep understanding of human behavior and technology to find solutions to recurring challenges by breaking the mold. Delivering creative content and interactive platforms powered by best-in-class technology and design principles. Our approach is continuously refined through the measurement of KPI's, allowing us to adapt and optimize to achieve the best results.
                            </p>
                        </div>

                        {/* Dot Pattern - Right Side */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-6 gap-2 opacity-20">
                            {[...Array(42)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            ))}
                        </div>

                        {/* Dot Pattern - Left Side */}
                        <div className="absolute left-8 bottom-8 grid grid-cols-6 gap-2 opacity-20">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Icons */}
            <section className="container mx-auto px-4 lg:px-8 py-16">
                <h2 className="text-2xl font-bold mb-12 inline-block relative">
                    Digital marketing services
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-primary -z-10"></span>
                </h2>

                <div className="flex justify-between max-w-3xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-3">
                        <Image src="/icon-strategy.png" alt="Strategy" width={48} height={48} />
                        <span className="font-bold text-sm">Strategy</span>
                        <span className="text-xs">▼</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src="/icon-creative.png" alt="Creative" width={48} height={48} />
                        <span className="font-bold text-sm">Creative</span>
                        <span className="text-xs">▼</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src="/icon-media.png" alt="Media" width={48} height={48} />
                        <span className="font-bold text-sm">Media</span>
                        <span className="text-xs">▼</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src="/icon-tech.png" alt="Tech" width={48} height={48} />
                        <span className="font-bold text-sm">Tech</span>
                        <span className="text-xs">▼</span>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="bg-primary px-6 py-2 w-full mb-8">
                    <h3 className="text-xl font-bold text-dark">Strategy</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            We design and develop meaningful strategies, campaigns, content, and tech builds – delivering engaging people-first experiences.
                        </p>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                            <ul className="space-y-2">
                                <li className="text-sm">• Business consulting</li>
                                <li className="text-sm">• Consumer research</li>
                                <li className="text-sm">• Persona development</li>
                                <li className="text-sm">• Content strategy</li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="text-sm">• Digital strategy</li>
                                <li className="text-sm">• Listening</li>
                                <li className="text-sm">• Trendspotting</li>
                                <li className="text-sm">• Audits</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <Image src="/strategy-image.png" alt="Strategy" width={600} height={400} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Creative Section */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="bg-primary px-6 py-2 w-full mb-8">
                    <h3 className="text-xl font-bold text-dark">Creative</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            Understanding consumer behavior is key to creative breakthroughs. We leverage our global network of strategists, technologists, and creatives to deliver content your consumers will love.
                        </p>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                            <ul className="space-y-2">
                                <li className="text-sm">• Concept development</li>
                                <li className="text-sm">• Brand identity</li>
                                <li className="text-sm">• Copywriting</li>
                                <li className="text-sm">• Graphic design</li>
                                <li className="text-sm">• Motion design</li>
                                <li className="text-sm">• UI/UX</li>
                                <li className="text-sm">• Websites</li>
                                <li className="text-sm">• Content creation</li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="text-sm">• Production studio</li>
                                <li className="text-sm">• Photography</li>
                                <li className="text-sm">• Video production</li>
                                <li className="text-sm">• Video editing</li>
                                <li className="text-sm">• Radio</li>
                                <li className="text-sm">• Podcasting</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <Image src="/creative-image.png" alt="Creative" width={600} height={400} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Partner Banner */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="bg-dark rounded-[30px] p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-2xl lg:text-3xl text-white italic mb-1" style={{ fontFamily: 'cursive' }}>For social media marketing</p>
                        <p className="text-2xl lg:text-3xl text-white italic" style={{ fontFamily: 'cursive' }}>connect with our partner</p>
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                        <span className="text-white text-3xl lg:text-4xl font-bold">LiKEable</span>
                        <span className="text-white text-2xl">→</span>
                    </div>
                    {/* Dot Pattern Background */}
                    <div className="absolute left-8 top-8 grid grid-cols-4 gap-2 opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        ))}
                    </div>
                    <div className="absolute right-8 bottom-8 grid grid-cols-4 gap-2 opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Section */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="bg-primary px-6 py-2 w-full mb-8">
                    <h3 className="text-xl font-bold text-dark">Media</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            Successful media planning, buying, and analytics rely on an in-depth understanding of how consumers spend their time. We meet them where they are and know what holds their attention in an increasingly distracted world.
                        </p>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                            <ul className="space-y-2">
                                <li className="text-sm">• Concept development</li>
                                <li className="text-sm">• Brand identity</li>
                                <li className="text-sm">• Copywriting</li>
                                <li className="text-sm">• Graphic design</li>
                                <li className="text-sm">• Motion design</li>
                                <li className="text-sm">• UI/UX</li>
                                <li className="text-sm">• Websites</li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="text-sm">• Content creation</li>
                                <li className="text-sm">• Production studio</li>
                                <li className="text-sm">• Photography</li>
                                <li className="text-sm">• Video production</li>
                                <li className="text-sm">• Video editing</li>
                                <li className="text-sm">• Radio</li>
                                <li className="text-sm">• Podcasting</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <Image src="/media-image.png" alt="Media" width={600} height={400} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Tech Section */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="bg-primary px-6 py-2 w-full mb-8">
                    <h3 className="text-xl font-bold text-dark">Tech</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            Trying to figure out ChatGPT, artificial intelligence, machine learning, or another advanced technology? With data scientists, user experience developers, and architects across the globe, we've got your back.
                        </p>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                            <ul className="space-y-2">
                                <li className="text-sm">• Business intelligence</li>
                                <li className="text-sm">• App development</li>
                                <li className="text-sm">• Web development</li>
                                <li className="text-sm">• Software development</li>
                                <li className="text-sm">• Product development</li>
                                <li className="text-sm">• Project management</li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="text-sm">• CMS implementation</li>
                                <li className="text-sm">• Headless CMS</li>
                                <li className="text-sm">• Data modeling</li>
                                <li className="text-sm">• DevOps</li>
                                <li className="text-sm">• Quality assurance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <Image src="/tech-image.png" alt="Tech" width={600} height={400} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold inline-block relative z-10">
                        <span className="relative inline-block">
                            Digital marketing case studies
                            <span className="absolute bottom-2 left-0 w-[112%] h-3 bg-primary -z-10"></span>
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Case Study 1 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-dark relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    <span className="text-white text-xl font-bold">McDermott Will & Emery</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">LEGAL</span>
                                <h3 className="font-bold mt-2 text-lg">McDermott Will & Emery</h3>
                            </div>
                        </div>
                        {/* Case Study 2 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-purple-900 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <span className="text-white text-xl font-bold">NYU</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">EDUCATION</span>
                                <h3 className="font-bold mt-2 text-lg">NYU</h3>
                            </div>
                        </div>
                        {/* Case Study 3 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    <span className="text-dark text-xl font-bold">MTA</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">TRANSPORTATION</span>
                                <h3 className="font-bold mt-2 text-lg">MTA</h3>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 bg-dark rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section (Black) */}
            <section className="container mx-auto px-4 lg:px-8 py-16">
                <div className="bg-dark text-white rounded-[45px] p-12 lg:p-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Meaningful <span className="text-primary">work.</span> Outstanding <span className="text-primary">results.</span>
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Award-winning digital development company, providing businesses with product design, development, and technology audit and assessment services.
                    </p>
                    <button className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-dark transition-colors">
                        Let's connect
                    </button>
                </div>
            </section>

            {/* Clients Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 mb-12">
                <div className="mb-16 ml-[15%]">
                    <h2 className="text-3xl lg:text-4xl font-bold inline-block relative z-10">
                        <span className="relative inline-block">
                            You are in great company
                            <span className="absolute bottom-2 left-0 w-[112%] h-3 bg-primary -z-10"></span>
                        </span>
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 max-w-6xl mx-auto">
                    <Image src="/client-greekgoat.jpg" alt="Greek Goat" width={100} height={100} className="object-contain" />
                    <Image src="/client-sensible.jpg" alt="Sensible Portions" width={180} height={80} className="object-contain" />
                    <Image src="/client-nyu.jpg" alt="NYU Tandon School of Engineering" width={240} height={60} className="object-contain" />
                    <div className="flex items-center gap-1">
                        <Image src="/honda-h.png" alt="H" width={40} height={40} className="object-contain" />
                        <Image src="/honda-o.png" alt="O" width={40} height={40} className="object-contain" />
                        <Image src="/honda-n.png" alt="N" width={40} height={40} className="object-contain" />
                        <Image src="/honda-d.png" alt="D" width={40} height={40} className="object-contain" />
                        <Image src="/honda-a.png" alt="A" width={40} height={40} className="object-contain" />
                    </div>
                </div>
            </section>
        </div>
    )
}
