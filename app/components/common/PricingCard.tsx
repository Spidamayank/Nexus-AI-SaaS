type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular,
}: PricingCardProps) {
  return (
    <div className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        ${
            popular
                ? "border-blue-500 bg-blue-500/10 scale-105"
                : "border-gray-800 bg-gray-900/50 hover:border-blue-500/50"
        }`}>
        {/* Popular Badge */}
        {popular && (
            <div className="mb-6 inline-flex rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                ⭐ Most Popular
            </div>
        )}

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <h2 className="mt-6 text-5xl font-bold">
        {price}
      </h2>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>
        
        <div className="mt-8 space-y-3">
            {features.map((feature) => (
                <div
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                >
                    <span className="text-blue-400">✔</span>
                    <span>{feature}</span>
                </div>
            ))}
        </div>
        <button className={`mt-8 w-full rounded-xl py-3 font-semibold transition-all duration-300
                ${
                    popular
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-white text-black hover:bg-gray-200"
                }`}>
            Get Started
        </button>

    </div>
  );
}