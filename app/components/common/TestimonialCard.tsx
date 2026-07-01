type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl">

      <div className="mb-6 text-4xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="leading-7 text-gray-300">
        "{review}"
      </p>

      <div className="mt-8">

        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>

        <p className="mt-1 text-gray-400">
          {role}
        </p>

      </div>

    </div>
  );
}