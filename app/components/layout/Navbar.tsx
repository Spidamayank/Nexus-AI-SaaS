export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <h2 className="text-2xl font-bold tracking-tight">
          Nexus AI
        </h2>

        <div className="flex gap-8">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 font-medium">
            Login
          </button>

          <button className="rounded-lg bg-white px-5 py-2 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200">
            Get Started
          </button>
        </div>

      </div>

    </nav>
  );
}