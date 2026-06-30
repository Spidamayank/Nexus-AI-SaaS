export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto min-h-screen flex items-center px-8">
        {/* ================
            HERO SECTION 
        ===================*/}
        <div className="grid grid-cols-2 items-center gap-16">
            <div className="max-w-2xl">
                <p className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-300">
                    ✨ AI Powered Workspace
                </p>

                <h1 className="mt-8 text-6xl font-bold tracking-tight leading-tight">
                    The Future of

                    <br />

                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        AI Workspace
                    </span>
                    
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-gray-400">
                    Build, collaborate and automate your workflow with the power of AI.
                </p>
                {/* ==============
                    HeroButtons
                ===================*/}
                <div className="mt-10 flex items-center gap-4">
                    <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all duration-300">
                        Start Free
                    </button>
                    <button className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white">
                        Book Demo
                    </button>
                </div>

                {/* ==========
                  Hero Stats 
                ===============*/}
                <div className="mt-12 flex gap-10">

                    <div>
                        <h3 className="text-3xl font-bold">50K+</h3>
                        <p className="mt-1 text-sm text-gray-400">Active Users</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold">99.9%</h3>
                        <p className="mt-1 text-sm text-gray-400">Uptime</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold">150+</h3>
                        <p className="mt-1 text-sm text-gray-400">Companies</p>
                    </div>

                </div>
                    {/* ============
                       TrustedCompanies 
                    =================*/}
                <div className="mt-16">

                    <p className="text-sm uppercase tracking-widest text-gray-500">
                        Trusted by
                    </p>

                    <div className="mt-6 flex gap-8 text-gray-400 font-semibold">

                        <span>Google</span>

                        <span>Microsoft</span>

                        <span>Netflix</span>

                        <span>Spotify</span>

                    </div>

                </div>
            </div>
            {/* =====================
                3d preview container 
            =========================*/}
            <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                <div className="absolute h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
                <div className="relative h-full w-full p-8">
                    
                    <h3 className="text-3xl font-bold text-white">
                        AI Assistant
                    </h3>
                    <div className="mt-8 space-y-4">

                        <div className="rounded-xl bg-gray-800/60 p-4">
                            Generating project summary...
                        </div>

                        <div className="rounded-xl bg-blue-500/20 p-4 ml-10">
                            Summary completed successfully.
                        </div>

                    </div>
                    {/* ============
                    ProgressCard 
                    =================*/}
                    <div className="mt-8 rounded-xl border border-gray-700 p-4">

                        <div className="flex justify-between">

                            <span>AI Processing</span>

                            <span>82%</span>

                        </div>
                        {/* ✅ Progress Bar */}
                        <div className="mt-3 h-2 rounded-full bg-gray-800 overflow-hidden">
                            <div className="h-full w-[82%] rounded-full bg-blue-500"></div>
                        </div>

                    </div>
                    {/* ===============
                        Live AI Status Box 
                    ====================*/}
                    <div className="absolute bottom-8 left-8 rounded-xl border border-gray-700 bg-black/40 px-5 py-4 backdrop-blur-md">

                        <p className="text-sm text-gray-400">
                            Live AI Status
                        </p>

                        <h4 className="mt-1 text-lg font-semibold">
                            Online
                        </h4>

                    </div>
                </div>
                <div className="absolute top-10 right-12 h-4 w-4 rounded-full bg-blue-400 blur-sm"></div>

                <div className="absolute bottom-28 right-24 h-3 w-3 rounded-full bg-cyan-400 blur-sm"></div>

                <div className="absolute top-44 left-10 h-5 w-5 rounded-full bg-purple-500 blur-md"></div>
            </div>
        </div>
        {/* Gradient */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
}