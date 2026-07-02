import FeatureCard from "../common/FeatureCard";
import { FEATURES } from "@/app/constants/features";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Features
        </p> 

        <h2 className="mt-4 text-5xl font-bold">
          Everything you need to build with AI
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Powerful tools that help your team collaborate,
          automate tasks and work faster.
        </p>

        
      </div>

      {/* FeatureCard */}
        <div className="mt-20 grid grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
                <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>

    </section>
  );
}