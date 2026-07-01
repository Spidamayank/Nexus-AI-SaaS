export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-5 gap-12">
                <div>
                    <h2 className="text-3xl font-bold">
                        Nexus AI
                    </h2>

                    <p className="mt-6 leading-7 text-gray-400">
                        Build smarter, collaborate faster and
                        automate your workflow with AI.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-white">
                        Product
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-400">
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">
                            Features
                        </li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">
                            Pricing
                        </li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">
                            AI Assistant
                        </li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">
                            Integrations
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white">
                        Company
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-400">
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">About</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Careers</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Contact</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Blog</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white">
                        Resources
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-400">
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Documentation</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Help Center</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Privacy Policy</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Terms of Service</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white">
                        Connect
                    </h3>

                    <ul className="mt-6 space-y-3 text-gray-400">
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">GitHub</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">LinkedIn</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Twitter</li>
                        <li className="cursor-pointer transition-colors duration-300 hover:text-white">Discord</li>
                    </ul>
                </div>
            </div>
            <div className="mt-20 border-t border-gray-800 pt-8">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        © 2026 Nexus AI. All rights reserved.
                    </p>

                    <p className="text-sm text-gray-500">
                        Built with Next.js & TypeScript
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
}