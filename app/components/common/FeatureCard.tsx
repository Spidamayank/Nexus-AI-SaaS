type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>

    </div>
  );
}