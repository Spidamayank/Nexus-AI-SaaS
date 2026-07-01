import PricingCard from "../common/PricingCard";


export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Pricing
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Simple pricing for every team
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your workspace.
        </p>

      </div>
      {/* PricingCards */}
      <div className="mt-20 grid grid-cols-3 gap-8">

            <PricingCard
                title="Starter"
                price="Free"
                description="Perfect for individuals getting started."
                features={[
                    "AI Chat",
                    "1 Workspace",
                    "Basic Analytics",
                    "Community Support",
                ]}
            />

            <PricingCard
                title="Pro"
                price="$19/mo"
                description="Everything you need for growing teams."
                features={[
                    "Unlimited AI Chat",
                    "Unlimited Workspaces",
                    "Advanced Analytics",
                    "Priority Support",
                ]}
                popular={true}
            />

            <PricingCard
                title="Enterprise"
                price="Custom"
                description="Advanced security and dedicated support."
                features={[
                    "Custom AI Models",
                    "Dedicated Manager",
                    "SSO Login",
                    "24/7 Support",
                ]}
            />

        </div>

    </section>
  );
}