import Image from 'next/image'
import Link from 'next/link'

interface BlogPostPageProps {
    params: {
        uid: string
    }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    // In a real app, you'd fetch this data based on params.uid
    // For now, we'll use static content matching the Figma design

    return (
        <div className="min-h-screen bg-white">
            {/* Back Navigation & Article Header */}
            <section className="container mx-auto px-4 lg:px-8 pt-12 pb-8">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-dark hover:text-primary transition-colors font-medium mb-6"
                    >
                        <span>←</span>
                        <span>All Articles</span>
                    </Link>

                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                        Guardian of the Digital Realm: Web Security
                    </h1>

                    <p className="text-gray-600 mb-4">
                        Written by Jese Leos on January 14, 2024
                    </p>

                    <div className="flex gap-2">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            #Code
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            #Security
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            #Tech
                        </span>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="container mx-auto px-4 lg:px-8 pb-12">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl overflow-hidden">
                        <Image
                            src="/blog-hero-vr-security.png"
                            alt="Guardian of the Digital Realm: Web Security"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="container mx-auto px-4 lg:px-8 pb-16">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <p className="text-gray-700 leading-relaxed mb-8">
                        In today's interconnected world, where data breaches and cyber threats are on the rise, web security has become paramount. As the guardians of the digital realm, it's our responsibility to protect sensitive information, maintain user trust, and ensure the integrity of online systems. Let's dive into the world of web security and explore the key principles that every developer should embrace.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        1. Authentication and Authorization
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Authentication</strong> is the process of verifying the identity of users or systems accessing your web applications. Implement strong authentication mechanisms, such as multi-factor authentication (MFA), to prevent unauthorized access.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        <strong>Authorization</strong>, on the other hand, determines what actions authenticated users are allowed to perform. Employ role-based access control (RBAC) and least privilege principles to ensure users have only the necessary permissions.
                    </p>

                    {/* Section 2 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        2. Data Encryption
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Encrypt sensitive data both at rest and in transit. Use protocols like HTTPS to secure data during transmission and employ strong encryption algorithms to protect data stored on servers. Regularly update encryption methods to stay ahead of emerging threats.
                    </p>

                    {/* Section 3 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        3. Input Validation and Sanitization
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Always validate and sanitize user inputs to prevent SQL injection, cross-site scripting (XSS), and other injection attacks. Implement server-side validation and use libraries that offer protection against common vulnerabilities.
                    </p>

                    {/* Section 4 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        4. Patch Management
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Stay vigilant about software and framework updates. Vulnerabilities often arise from outdated components. Establish a patch management process to apply security patches promptly and regularly.
                    </p>

                    {/* Section 5 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        5. Security Headers
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Utilize security headers in your web applications to mitigate common web attacks. Headers like Content Security Policy (CSP), X-Content-Type-Options, and X-Frame-Options can add an extra layer of protection against cross-site scripting and clickjacking attacks.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        6. Web Application Firewall (WAF)
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Consider implementing a Web Application Firewall (WAF) to filter and monitor incoming traffic. A WAF can help identify and block malicious requests before they reach your application.
                    </p>

                    {/* Section 7 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        7. Security Testing
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Regularly conduct security assessments, including penetration testing and code reviews, to identify and address vulnerabilities. Automated scanning tools can also help discover potential issues.
                    </p>

                    {/* Section 8 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        8. Logging and Monitoring
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Maintain comprehensive logs of application activities and set up real-time monitoring. Monitoring allows you to detect and respond to security incidents promptly.
                    </p>

                    {/* Section 9 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        9. User Education
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Educate your users about best security practices, such as creating strong passwords, recognizing phishing attempts, and staying vigilant online. Informed users are your allies in the battle against cyber threats.
                    </p>

                    {/* Section 10 */}
                    <h2 className="text-xl font-bold mb-3 mt-10">
                        10. Incident Response Plan
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Prepare for the worst-case scenario with a well-defined incident response plan. This plan should outline the steps to take when a security breach occurs, minimizing damage and downtime.
                    </p>

                    {/* Conclusion */}
                    <p className="text-gray-700 leading-relaxed mb-8">
                        As developers and stewards of the digital realm, our commitment to web security is not optional; it's a necessity. By following these principles and staying informed about emerging threats, we can safeguard the digital world and protect the trust of users and organizations alike. Let's remain vigilant in our role as guardians of web security.
                    </p>
                </div>
            </article>
        </div>
    )
}
