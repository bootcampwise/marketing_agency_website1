import PricingCard from '@/components/PricingCard'

export default function PricingPage() {
    const pricingTiers = [
        {
            tier: 'Starter',
            description: 'Best option for personal use & for your individual business',
            price: 29,
            features: [
                'Individual configuration',
                'No setup, or hidden fees',
                'Team size: 1 developer',
                'Premium support: 6 months',
                'Free updates: 6 months',
            ],
            isPopular: false,
        },
        {
            tier: 'Company',
            description: 'Relevant for multiple users, extended & premium support',
            price: 99,
            features: [
                'Individual configuration',
                'No setup, or hidden fees',
                'Team size: 10 developers',
                'Premium support: 24 months',
                'Free updates: 24 months',
            ],
            isPopular: true,
        },
        {
            tier: 'Enterprise',
            description: 'Best for large scale uses and extended redistribution rights',
            price: 499,
            features: [
                'Individual configuration',
                'No setup, or hidden fees',
                'Team size: 100+ developers',
                'Premium support: 36 months',
                'Free updates: 36 months',
            ],
            isPopular: false,
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Designed for business teams like yours
                    </h1>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        Here at Positivus we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </section>

            {/* Pricing Tiers Grid */}
            <section className="container mx-auto px-4 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <PricingCard
                            key={index}
                            tier={tier.tier}
                            description={tier.description}
                            price={tier.price}
                            features={tier.features}
                            isPopular={tier.isPopular}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
