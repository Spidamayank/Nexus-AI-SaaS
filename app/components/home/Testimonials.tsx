import TestimonialCard from "../common/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Loved by teams around the world
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Thousands of teams trust Nexus AI to boost productivity.
        </p>

        {/* TestiCards */}
        <div className="mt-20 grid grid-cols-3 gap-8">

            <TestimonialCard
                name="Sarah Johnson"
                role="Product Manager"
                review="Nexus AI has completely transformed the way our team collaborates."
            />

            <TestimonialCard
                name="David Miller"
                role="Software Engineer"
                review="The AI assistant saves us hours every week. Highly recommended!"
            />

            <TestimonialCard
                name="Emily Carter"
                role="Startup Founder"
                review="Clean UI, powerful features, and an amazing user experience."
            />

        </div>
      </div>

    </section>
  );
}